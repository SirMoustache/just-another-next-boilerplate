/**
 * Absolute imports
 */
import React from 'react';
import Head from 'next/head';
import { NextPage, NextPageContext } from 'next';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

let apolloClient: ApolloClient<any> | null = null;

export type ComponentContext = NextPageContext & {
  apolloClient: ApolloClient<any>;
  apolloState: any;
};

export const setComponentDisplayName = (
  PageComponent: NextPage,
  WrappedComponent: NextPage,
) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  const displayName =
    PageComponent.displayName || PageComponent.name || 'Component';

  if (displayName === 'App') {
    console.warn('This withApollo HOC only works with PageComponents.');
  }

  WrappedComponent.displayName = `withApollo(${displayName})`;
};

export const setComponentInitialProps = (
  PageComponent: NextPage,
  WrappedComponent: NextPage,
  ssr: boolean,
) => {
  WrappedComponent.getInitialProps = async (ctx: ComponentContext) => {
    const { AppTree } = ctx;

    // Initialize ApolloClient, add it to the ctx object so
    // we can use it in `PageComponent.getInitialProp`.
    const apolloClient = (ctx.apolloClient = initApolloClient());

    // Run wrapped getInitialProps methods
    let pageProps = {};

    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    // Only on the server:
    if (typeof window === 'undefined') {
      // When redirecting, the response is finished.
      // No point in continuing to render
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      // Only if ssr is enabled
      if (ssr) {
        try {
          // Run all GraphQL queries
          const { getDataFromTree } = await import('@apollo/react-ssr');
          await getDataFromTree(
            <AppTree
              pageProps={{
                ...pageProps,
                apolloClient,
              }}
            />,
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }
    }

    // Extract query data from the Apollo store
    const apolloState = apolloClient.cache.extract();

    return {
      ...pageProps,
      apolloState,
    };
  };
};

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 */
export function withApollo(PageComponent: NextPage, { ssr = true } = {}) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }: any) => {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  // Run wrapped component getInitialProps
  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: ComponentContext) => {
      const { AppTree } = ctx;

      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = (ctx.apolloClient = initApolloClient());

      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr');
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />,
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
      };
    };
  }

  return WithApollo;
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState = {}) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createApolloClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}

/**
 * Creates and configures the ApolloClient
 */
function createApolloClient(initialState = {}) {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
    fetch: fetch as any,
  });

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: httpLink,
    cache: new InMemoryCache().restore(initialState),
  });
}
