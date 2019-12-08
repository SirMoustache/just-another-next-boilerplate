/**
 * Absolute imports
 */
import React from 'react';
import Head from 'next/head';

/**
 * Components
 */
import BaseLayout from '../../components/Layout/BaseLayout';
import Products from '../../components/Products';

/**
 * GraphQL
 */
import { usePingQuery } from '../../generated';

/**
 * Styles
 */
import {} from './styles';

const ShopHomeView = () => {
  const { data, loading } = usePingQuery();

  return (
    <BaseLayout>
      <Head>
        <title>Shop</title>
      </Head>

      <h3>
        {' '}
        loading: {loading}, data: {JSON.stringify(data)}{' '}
      </h3>

      <Products />
    </BaseLayout>
  );
};

export default ShopHomeView;
