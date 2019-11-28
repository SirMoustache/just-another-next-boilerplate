/**
 * Absolute imports
 */
import express from 'express';

/**
 * Entities
 */
import { User } from '../entities/User';

/**
 * Utils
 */
import {
  createRefreshToken,
  createAccessToken,
  setRefreshTokenToCookie,
  verifyRefreshToken,
} from '../utils/token';

import { ServerContext } from '../context';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.post('/refresh-token', async (req, res) => {
  const token = req.cookies.jid;

  if (!token) {
    return res.send({ ok: false, accessToken: '' });
  }

  let payload: ServerContext['payload'];
  try {
    payload = verifyRefreshToken(token);
  } catch (err) {
    console.log(err);
    return res.send({ ok: false, accessToken: '' });
  }

  if (!payload) {
    return res.send({ ok: false, accessToken: '' });
  }

  // token is valid and
  // we can send back an access token
  const user = await User.findOne({ id: payload.userId });

  if (!user) {
    return res.send({ ok: false, accessToken: '' });
  }

  if (user.tokenVersion !== payload.tokenVersion) {
    return res.send({ ok: false, accessToken: '' });
  }

  setRefreshTokenToCookie(res, createRefreshToken(user));

  return res.send({ ok: true, accessToken: createAccessToken(user) });
});

export default routes;
