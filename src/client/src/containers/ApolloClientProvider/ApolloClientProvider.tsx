/**
 * Absolute imports
 */
import React, { FC } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'node-fetch';

/**
 * Services
 */
import { getAccessToken } from '../../services/tokenService';

const URI = 'http://localhost:4000/graphql';

const client = new ApolloClient({
  uri: URI,
  fetch: fetch as any,
  credentials: 'include',
  request: operration => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      return;
    }

    operration.setContext({
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
  },
});

const ApolloClientProvider: FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
