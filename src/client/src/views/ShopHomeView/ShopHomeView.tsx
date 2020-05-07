/**
 * Absolute imports
 */
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

/**
 * Components
 */
import BaseLayout from '../../components/Layout/BaseLayout';
import Products from '../../components/Products';
import { RouterLink } from '../../components/UI/Link';

/**
 * GraphQL
 */
import { usePingQuery } from '../../generated';

/**
 * Styles
 */
import {} from './styles';

const ShopHomeView: NextPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Shop Home Page</title>
      </Head>
      <div>
        <ul>
          <li>
            <RouterLink href="/shop/1234" passHref>
              <a>See shop item</a>
            </RouterLink>
          </li>
        </ul>
        <Products />
      </div>
    </BaseLayout>
  );
};

ShopHomeView.getInitialProps = async (ctx) => {
  var header = ctx.req && ctx.req.headers; // && ctx.req.headers.cookie;
  console.log('ShopHomeView.getInitialProps', header);
  return {};
};

export default ShopHomeView;
