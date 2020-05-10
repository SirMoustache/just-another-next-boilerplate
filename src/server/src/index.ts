/**
 * Absolute imports
 */
import express from 'express';
import cors from 'cors';
import http from 'http';
import cookieParser from 'cookie-parser';
import { ApolloServer, PubSub } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';

/**
 * Apollo configs
 */
import typeDefs from './schema';

/**
 * Resolvers
 */
import { UserResolver } from './resolvers/UserResolver';
import { AuthResolver } from './resolvers/AuthResolver';
import { ShopItemResolvers } from './resolvers/ShopItemResolvers';

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

  const pubsub = new PubSub();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, AuthResolver, ShopItemResolvers],
    }),
    // you can pass the endpoint path for subscriptions
    // otherwise it will be the same as main graphql endpoint
    // subscriptions: "/subscriptions",
    context: ({ req, res }) => ({ req, res, pubsub }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  // Subscriptions
  // See https://www.apollographql.com/docs/apollo-server/data/subscriptions/#subscriptions-with-additional-middleware
  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen(PORT, () => {
    console.log(`🐷 Server started on  http://localhost:${PORT}`);
    console.log(
      `🐶 Server graphql ready at http://localhost:${PORT}${apolloServer.graphqlPath}`,
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`,
    );
  });
})();
