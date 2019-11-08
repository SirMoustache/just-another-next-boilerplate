/**
 * Absolute imports
 */
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { verify } from 'jsonwebtoken';

/**
 * Apollo configs
 */
import typeDefs from './schema';
import { UserResolver } from './resolvers/UserResolver';

/**
 * Entities
 */
import { User } from './entities/User';

/**
 * Types
 */
import { ServerContext } from './context';

/**
 * Utils
 */
import { createRefreshToken, createAccessToken } from './utils/auth';
import { sendRefreshToken } from './utils/sendRefreshToken';

const PORT = process.env.PORT || 4000;

(async () => {
  const app = express();
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );
  app.use(cookieParser());
  app.get('/', (_req, res) => res.send('hello'));
  app.post('/refresh_token', async (req, res) => {
    const token = req.cookies.jid;
    if (!token) {
      return res.send({ ok: false, accessToken: '' });
    }

    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
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

    sendRefreshToken(res, createRefreshToken(user));

    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => {
    console.log(`express server started on  http://localhost:${PORT}`);
  });
})();
