/**
 * Absolute imports
 */
import { ApolloServer } from 'apollo-server';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';

/**
 * Apollo configs
 */
import typeDefs from './schema';
import resolvers, { UserResolver } from './resolvers';

/**
 * Entities
 */
import { User } from './entities/User';

import { ServerContext } from './context';

// (async () => {
//   const serverWithAutoSchema = new ApolloServer({
//     schema: await buildSchema({
//       resolvers: [UserResolver],
//     }),
//     context: ({ req, res }): ServerContext => ({ req, res }),
//   });
// })();

// const server = new ApolloServer({ resolvers, typeDefs });

// server.listen().then(({ url }) => console.log(`Server ready at ${url}. `));

createConnection()
  .then(async connection => {
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.email = 'Bob';
    user.password = '12345';

    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch(error => console.log(error));
