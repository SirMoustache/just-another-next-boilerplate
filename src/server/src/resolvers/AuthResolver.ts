/**
 * Absolute imports
 */
import { Resolver, Mutation, Arg, ObjectType, Field, Ctx } from 'type-graphql';
import { compare } from 'bcryptjs';

/**
 * Entities
 */
import { User } from '../entities/User';

/**
 * Types
 */
import { ServerContext } from '../context';

/**
 * Utils
 */
import {
  createAccessToken,
  createRefreshToken,
  setRefreshTokenToCookie,
} from '../utils/token';
import { validate, isEmail } from '../utils/validation';

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken!: string;

  @Field(() => User)
  user!: User;
}

@Resolver()
export class AuthResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: ServerContext) {
    setRefreshTokenToCookie(res, '');

    return true;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { res }: ServerContext,
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('Wrong login or password');
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('Wrong login or password');
    }

    // login successful

    setRefreshTokenToCookie(res, createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
      user,
    };
  }
}
