/**
 * Absolute imports
 */
import React, { Fragment } from 'react';
import App from 'next/app';

/**
 * Local Imports
 */
import GlobalStyles from '../theme/GlobalStyles';

class WebClient extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <GlobalStyles />
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default WebClient;
