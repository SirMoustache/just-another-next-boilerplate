/**
 * Absolute imports
 */
import { MiddlewareFn } from 'type-graphql';
import { ServerContext } from '../context';

/**
 * Entities
 */
import { User, UserRole } from '../entities/User';

/**
 * Utils
 */
import { verifyAccessToken } from '../utils/token';

export const isAdmin: MiddlewareFn<ServerContext> = async (
  { context },
  next,
) => {
  const userId = context!.payload!.userId;

  if (!userId) {
    throw new Error('Not authenticated');
  }

  const user = await User.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error('Not authenticated');
  }

  const isAdmin = user.roles.some(role => role === UserRole.admin);

  console.log('-----------------------------------------')
  console.log(isAdmin)
  console.log('-----------------------------------------')

  if (!isAdmin) {
    throw new Error('Not authenticated');
  }

  return next();
};
