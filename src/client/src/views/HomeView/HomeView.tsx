/**
 * Absolute imports
 */
import React from 'react';
import Head from 'next/head';

/**
 * Components
 */
import BaseLayout from '../../components/Layout/BaseLayout';
import FeaturedProducts from '../../components/Products/FeaturedProducts';
import HomeHero from '../../components/HomeHero';

/**
 * GraphQL
 */
import { usePingQuery } from '../../generated';

/**
 * Styles
 */
import {} from './styles';

const NotFoundView = () => {
  const { data, loading } = usePingQuery();

  return (
    <BaseLayout>
      <Head>
        <title>Home Page</title>
      </Head>
      <h3>
        {' '}
        loading: {loading}, data: {JSON.stringify(data)}{' '}
      </h3>
      <HomeHero />
      <FeaturedProducts />
    </BaseLayout>
  );
};

export default NotFoundView;
