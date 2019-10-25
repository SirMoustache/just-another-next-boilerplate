/**
 * Absolute imports
 */
import { ApolloServer } from 'apollo-server';

/**
 * Apollo configs
 */
import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({ resolvers, typeDefs });

server.listen().then(({ url }) => console.log(`Server ready at ${url}. `));
