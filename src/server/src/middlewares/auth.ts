/**
 * Absolute imports
 */
import { MiddlewareFn } from 'type-graphql';
import { ServerContext } from '../context';

/**
 * Utils
 */
import { verifyAccessToken } from '../utils/token';

export const isAuth: MiddlewareFn<ServerContext> = ({ context }, next) => {
  const authorizationHeader = context.req.headers['authorization'];

  if (!authorizationHeader) {
    throw new Error('Not authenticated');
  }

  try {
    const token = authorizationHeader.split(' ')[1];
    const payload = verifyAccessToken(token);
    context.payload = payload as any;
  } catch (err) {
    console.log(err);
    throw new Error('Not authenticated');
  }

  return next();
};
