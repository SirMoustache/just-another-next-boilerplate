/**
 * Absolute imports
 */
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Materila UI
 */
import { Button } from '@material-ui/core';

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
import { mockImageUrl } from '../../utils/mockUtils';

/**
 * Styles
 */
import {
  Root,
  ShopItem,
  ShopItemMedia,
  ShopItemDetails,
  ShopItemPrice,
  ShopItemActions,
  ShopItemDescription,
  ShopItemTitle,
  ShopItemImg,
} from './ShopItemView.styles';

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export type ShopItemViewProps = {
  theId: string | string[];
};

const ShopItemView: NextPage<ShopItemViewProps> = ({ theId }) => {
  const { query } = useRouter();
  const { id } = query;

  const src = mockImageUrl();
  return (
    <BaseLayout>
      <Head>
        <title>Shop item Home Page</title>
      </Head>
      <Root>
        <ShopItem>
          <ShopItemMedia>
            <ShopItemImg src={src} key={src} />
          </ShopItemMedia>
          <ShopItemDetails>
            <Link href="/">
              <motion.div variants={fadeInUp}>
                <a className="go-back">Back to products</a>
              </motion.div>
            </Link>

            <ShopItemTitle>Some basic Item</ShopItemTitle>

            <ShopItemPrice>12.23 $</ShopItemPrice>

            <ShopItemDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              adipisci quo hic ducimus, repellat dicta laboriosam deleniti
              obcaecati tempore molestias, quaerat laudantium animi laborum ut,
              labore illo porro. Doloremque, culpa?
            </ShopItemDescription>

            <ShopItemActions>
              <Button variant="contained" color="primary">
                Add to cart
              </Button>
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
