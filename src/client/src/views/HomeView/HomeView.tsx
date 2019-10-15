/**
 * Absolute imports
 */
import React from 'react';
import Head from 'next/head';

/**
 * Components
 */
import BaseLayout from '../../components/Layout/BaseLayout';

/**
 * Styles
 */
import {} from './styles';

const NotFoundView = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page...</h1>
    </BaseLayout>
  );
};

export default NotFoundView;