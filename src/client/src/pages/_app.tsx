/**
 * Absolute imports
 */
import React, { Fragment } from 'react';
import App from 'next/app';

/**
 * Local Imports
 */
import GlobalStyles from '../theme/GlobalStyles';

/**
 * Containers
 */
import StyledThemeProvider from '../containers/StyledThemeProvider';
import ApolloClientProvider from '../containers/ApolloClientProvider';

class WebClient extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <ApolloClientProvider>
          <StyledThemeProvider>
            <GlobalStyles />
            <Component {...pageProps} />
          </StyledThemeProvider>
        </ApolloClientProvider>
      </Fragment>
    );
  }
}

export default WebClient;
