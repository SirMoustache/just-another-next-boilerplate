/**
 * Absolute imports
 */
import React, { Fragment, ReactNode } from 'react';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { compose } from 'ramda';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialUISheet = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    const composeStyles = (app: ReactNode) =>
      materialUISheet.collect(styledComponentsSheet.collectStyles(app));

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            composeStyles(
              <Fragment>
                <App {...props} />
              </Fragment>,
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      initialProps.head;

      return {
        ...initialProps,
        head: initialProps.head,
        styles: (
          <Fragment>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
          </Fragment>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
