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

class WebClient extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <StyledThemeProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </StyledThemeProvider>
      </Fragment>
    );
  }
}

export default WebClient;
