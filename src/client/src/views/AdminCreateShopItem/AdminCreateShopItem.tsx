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
 * GraphQL
 */

/**
 * Styles
 */
import {} from './styles';

const AdminCreateShopItem = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Admin Create Shop Item</title>
      </Head>
      <h2>Create Shop Item</h2>
    </BaseLayout>
  );
};

export default AdminCreateShopItem;
