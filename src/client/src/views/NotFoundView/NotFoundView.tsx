/**
 * Absolute imports
 */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

/**
 * Components
 */
import EmptyLayout from '../../components/Layout/EmptyLayout';
import A from '../../components/UI/A';
import { Container } from '../../components/UI/Container';

/**
 * Styles
 */
import { ErrorCode, ErrorDescription } from './styles';

const HomeView = () => {
  return (
    <EmptyLayout>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <Container>
        <ErrorCode>404</ErrorCode>
        <ErrorDescription>
          Oops! I think you are lost,{' '}
          <Link href="/" passHref>
            <A title="Home Page">ride home!</A>
          </Link>
        </ErrorDescription>
      </Container>
    </EmptyLayout>
  );
};

export default HomeView;
