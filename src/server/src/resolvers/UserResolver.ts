import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
  Ctx,
  UseMiddleware,
  Int,
} from 'type-graphql';
import { hash, compare } from 'bcryptjs';
import { getConnection } from 'typeorm';

/**
 * Entities
 */
import { User } from '../entities/User';

/**
 * Types
 */
import { ServerContext } from '../context';

/**
 * Middlewares
 */
import { isAuth } from '../middlewares/auth';

/**
 * Utils
 */
import {
  createAccessToken,
  createRefreshToken,
  setRefreshTokenToCookie,
} from '../utils/token';

@Resolver()
export class UserResolver {
  @Query(() => String)
  ping() {
    return 'pong!';
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  secretQuery(@Ctx() { payload }: ServerContext) {
    return `secretQuery ${payload!.userId}`;
  }

  @Query(() => [User])
  users() {
    return User.find();
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

    try {
      await User.insert({
        email,
        password: hashedPassword,
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }
}
