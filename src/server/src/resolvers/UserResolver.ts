import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Args,
  ArgsType,
  Field,
  Ctx,
  UseMiddleware,
  Int,
  Subscription,
  PubSub,
  PubSubEngine,
  Publisher,
  ResolverFilterData,
  Root,
} from 'type-graphql';
import { hash } from 'bcryptjs';
import { getConnection } from 'typeorm';

/**
 * Entities
 */
import { User, UserRole } from '../entities/User';

/**
 * Types
 */
import { ServerContext } from '../context';

/**
 * Middlewares
 */
import { isAuth } from '../middlewares/auth';
import { isAdmin } from '../middlewares/role';

/**
 * Utils
 */
import {
  createAccessToken,
  createRefreshToken,
  setRefreshTokenToCookie,
} from '../utils/token';
import { validate, isEmail } from '../utils/validation';

/**
 *
 */

@ArgsType()
class UsersArgs {
  @Field((type) => Int, { nullable: true })
  skip?: number;

  @Field((type) => Int, { nullable: true })
  take?: number;
}

type PingNotificationPayload = {
  message: string;
};

@Resolver()
export class UserResolver {
  @Query(() => String)
  async pingCustomMessage(
    @PubSub() pubSub: PubSubEngine,
    @Arg('name') name: string,
    @Arg('message', { nullable: true }) message?: string,
  ) {
    await pubSub.publish(name, { message });
    return 'pong!';
  }

  @Query(() => String)
  async ping(
    @PubSub('NOTIFICATIONS') publish: Publisher<PingNotificationPayload>,
  ) {
    await publish({ message: 'foo' });
    return 'pong!';
  }

  @Subscription({
    topics: 'NOTIFICATIONS',
    filter: ({ payload }: ResolverFilterData<PingNotificationPayload>) =>
      payload.message === 'foo',
  })
  onPing(@Root() notificationPayload: PingNotificationPayload): string {
    return `There is a ping message: ${notificationPayload.message}`;
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  secretQuery(@Ctx() { payload }: ServerContext) {
    return `secretQuery ${payload!.userId}`;
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  @UseMiddleware(isAdmin)
  secretAdminQuery(@Ctx() { payload }: ServerContext) {
    return `secretAdminQuery ${payload!.userId}`;
  }

  @Query(() => [User])
  users(@Args() { take, skip }: UsersArgs) {
    return User.find({ take, skip });
  }

  @Mutation(() => Boolean)
  async revokeRefreshTokensForUser(@Arg('userId', () => Int) userId: number) {
    await getConnection()
      .getRepository(User)
      .increment({ id: userId }, 'tokenVersion', 1);

    return true;
  }

  @Mutation(() => Boolean)
  async createUser(
    @Arg('email') email: string,
    @Arg('password') password: string,
  ) {
    const hashedPassword = await hash(password, 12);

    const user = await User.findOne({ where: { email } });

    if (user) {
      throw new Error('This email is already registered');
    }

    validate(isEmail, 'Invalid email value', email);

    try {
      await User.insert({
        email,
        password: hashedPassword,
        roles: [UserRole.user],
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }
}
