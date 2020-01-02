/**
 * Absolute imports
 */
import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

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

const ShopHomeView: NextPage = () => {
  const { data, loading } = usePingQuery();

  return (
    <BaseLayout>
      <Head>
        <title>Shop</title>
      </Head>

      <Products />
    </BaseLayout>
  );
};

ShopHomeView.getInitialProps = async ctx => {
  var header = ctx.req && ctx.req.headers; // && ctx.req.headers.cookie;
  console.log('ShopHomeView.getInitialProps', header);
  return {};
};

export default ShopHomeView;
