/**
 * Absolute imports
 */
import React, { FC } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'node-fetch';

const URI = 'http://localhost:4000/graphql';

const client = new ApolloClient({
  uri: URI,
  fetch: fetch as any,
});

const ApolloClientProvider: FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
