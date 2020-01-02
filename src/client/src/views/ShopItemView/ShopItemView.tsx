/**
 * Absolute imports
 */
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 * Materila UI
 */

/**
 * Components
 */
import { RouterLink } from '../../components/UI/Link';
import BaseLayout from '../../components/Layout/BaseLayout';

/**
 * GraphQL
 */

/**
 * Utils
 */

/**
 * Styles
 */
import {
  Root,
  ShopItem,
  ShopItemMedia,
  ShopItemDetails,
  ShopItemPrice,
  ErrorDescription,
  ShopItemActions,
  ShopItemDescription,
  ShopItemTitle,
} from './styles';

export type ShopItemViewProps = {
  theId: string | string[];
};

const ShopItemView: NextPage<ShopItemViewProps> = ({ theId }) => {
  const { query } = useRouter();
  const { id } = query;
  return (
    <BaseLayout>
      <Head>
        <title>Shop item Home Page</title>
      </Head>
      <Root>
        <ShopItem>
          <ShopItemMedia></ShopItemMedia>
          <ShopItemDetails>
            <ShopItemTitle>Some basic Item</ShopItemTitle>
            <ShopItemPrice>12.23 $</ShopItemPrice>
            <ShopItemDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              adipisci quo hic ducimus, repellat dicta laboriosam deleniti
              obcaecati tempore molestias, quaerat laudantium animi laborum ut,
              labore illo porro. Doloremque, culpa?
            </ShopItemDescription>
            <ShopItemActions>
              <button>Add to cart</button>
            </ShopItemActions>
          </ShopItemDetails>
        </ShopItem>
        <h2>
          Shop item {id} {theId}
        </h2>
      </Root>
    </BaseLayout>
  );
};

// ShopItemView.getInitialProps = async () => {
//   console.log('getInitialProps');

//   return { theId: 'null' };
// };

export default ShopItemView;
