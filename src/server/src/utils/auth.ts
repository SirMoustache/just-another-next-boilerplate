/**
 * Absolute imports
 */
import { sign, verify } from 'jsonwebtoken';
import { MiddlewareFn } from 'type-graphql';
import { ServerContext } from '../context';

/**
 * Entities
 */
import { User } from '../entities/User';

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '15m',
  });
};

export const createRefreshToken = (user: User) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: '7d',
    },
  );
};

export const isAuth: MiddlewareFn<ServerContext> = ({ context }, next) => {
  const authorization = context.req.headers['authorization'];

  if (!authorization) {
    throw new Error('Not authenticated');
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (err) {
    console.log(err);
    throw new Error('Not authenticated');
  }

  return next();
};
