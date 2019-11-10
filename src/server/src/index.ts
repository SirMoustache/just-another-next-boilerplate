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
 * Routes
 */
import routes from './routes';

const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = 'http://localhost:3000';

(async () => {
  const app = express();
  app.use(
    cors({
      origin: CLIENT_ORIGIN,
      credentials: true,
    }),
  );
  app.use(cookieParser());
  app.use('/', routes);

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
