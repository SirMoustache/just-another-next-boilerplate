/**
 * Absolute imports
 */
import React from 'react';
import Error from 'next/error';
import { NextPage } from 'next';

/**
 * Views
 */
import NotFoundView from '../views/NotFoundView';

export type ErrorPageProps = {
  statusCode?: number;
};

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  if ((statusCode = 404)) {
    return <NotFoundView />;
  }

  return <Error statusCode={statusCode} />;
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
