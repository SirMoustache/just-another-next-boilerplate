/**
 * Absolute imports
 */
import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

/**
 * Components
 */
import EmptyLayout from '../../components/Layout/EmptyLayout';
import A from '../../components/UI/A';

/**
 * Styles
 */
import { ErrorCode, ErrorDescription } from './styles';

const NotFoundView = () => {
  return (
    <EmptyLayout>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <ErrorCode>404</ErrorCode>
      <ErrorDescription>
        Oops! I think you are lost little randonneur,{' '}
        <Link href="/">
          <A title="Home Page">ride home!</A>
        </Link>
      </ErrorDescription>
    </EmptyLayout>
  );
};

export default NotFoundView;
