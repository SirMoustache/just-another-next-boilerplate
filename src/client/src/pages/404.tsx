/**
 * Absolute imports
 */
import React from 'react';
import { NextPage } from 'next';

/**
 * Views
 */
import NotFoundView from '../views/NotFoundView';

export type ErrorPageProps = {
  statusCode?: number;
};

const Error404Page: NextPage<ErrorPageProps> = () => {
  return <NotFoundView />;
};

export default Error404Page;
