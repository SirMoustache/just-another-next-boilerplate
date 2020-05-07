/**
 * Absolute imports
 */
import React, { Fragment } from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';

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
    const { Component, pageProps, router } = this.props;
    return (
      <Fragment>
        <ApolloClientProvider>
          <StyledThemeProvider>
            <GlobalStyles />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </StyledThemeProvider>
        </ApolloClientProvider>
      </Fragment>
    );
  }
}

export default WebClient;
