/**
 * Absolute imports
 */
import React from 'react';
import Head from 'next/head';

/**
 * Components
 */
import BaseLayout from '../../components/Layout/BaseLayout';
import CreateShopItemFrom from '../../components/Forms/CreateShopItemForm';

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
      <section>
        <h2>Create Shop Item</h2>
        <CreateShopItemFrom onSubmit={console.log} />
      </section>
    </BaseLayout>
  );
};

export default AdminCreateShopItem;
