/**
 * Absolute imports
 */
import React from 'react';
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

const AdminHomeView = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Admin Home Page</title>
      </Head>
      <ul>
        <li>
          <RouterLink href="/admin/create-shop-item" passHref>
            <a>Create Chop Item</a>
          </RouterLink>
        </li>
      </ul>
    </BaseLayout>
  );
};

export default AdminHomeView;
