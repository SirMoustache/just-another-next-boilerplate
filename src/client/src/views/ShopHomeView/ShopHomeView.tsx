/**
 * Absolute imports
 */
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

/**
 * Components
 */
import { RouterLink } from '../../components/UI/Link';
import BaseLayout from '../../components/Layout/BaseLayout';

/**
 * GraphQL
 */

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
      <ul>
        <li>
          <RouterLink href="/shop/1234" passHref>
            <a>See shop item</a>
          </RouterLink>
        </li>
      </ul>
    </BaseLayout>
  );
};

export default ShopHomeView;
