/**
 * Absolute imports
 */
import { sign, verify } from 'jsonwebtoken';
import { Response } from 'express';
import 'dotenv/config';

/**
 * Entities
 */
import { User } from '../entities/User';

/**
 *
 */
import { ServerContext } from '../context';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

export const createAccessToken = (user: User) => {
  if (typeof ACCESS_TOKEN_SECRET === 'undefined') {
    throw new TypeError('ACCESS_TOKEN_SECRET is undefined');
  }

  return sign({ userId: user.id }, ACCESS_TOKEN_SECRET!, {
    expiresIn: '15m',
  });
};

export const createRefreshToken = (user: User) => {
  if (typeof REFRESH_TOKEN_SECRET === 'undefined') {
    throw new TypeError('REFRESH_TOKEN_SECRET is undefined');
  }

  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    REFRESH_TOKEN_SECRET!,
    {
      expiresIn: '7d',
    },
  );
};

export const verifyAccessToken = (token: string) => {
  if (typeof ACCESS_TOKEN_SECRET === 'undefined') {
    throw new TypeError('ACCESS_TOKEN_SECRET is undefined');
  }

  return verify(token, ACCESS_TOKEN_SECRET!) as ServerContext['payload'];
};

export const verifyRefreshToken = (token: string) => {
  if (typeof REFRESH_TOKEN_SECRET === 'undefined') {
    throw new TypeError('REFRESH_TOKEN_SECRET is undefined');
  }

  return verify(token, REFRESH_TOKEN_SECRET!) as ServerContext['payload'];
};

export const setRefreshTokenToCookie = (res: Response, token: string) => {
  res.cookie('jid', token, {
    httpOnly: true,
    //path: '/refresh-token',
  });
};
