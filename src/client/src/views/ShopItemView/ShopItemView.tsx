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
import { LayoutContainer } from '../../components/UI/Container';
import BaseLayout from '../../components/Layout/BaseLayout';
import ShopItemDetails from '../../components/Shop/ShopItemDetails';

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
import { Root, Breadcrumbs, Breadcrumb, Divider } from './ShopItemView.styles';

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
        <LayoutContainer>
          <Breadcrumbs>
            <Link href="/" passHref>
              <Breadcrumb className="go-back">Home</Breadcrumb>
            </Link>
            <Divider />
            <Link href="/shop" passHref>
              <Breadcrumb className="go-back">Shop</Breadcrumb>
            </Link>
          </Breadcrumbs>
        </LayoutContainer>

        <ShopItemDetails
          title="Some basic Item"
          imageSrc={src}
          price="12.23 $"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          adipisci quo hic ducimus, repellat dicta laboriosam deleniti
          obcaecati tempore molestias, quaerat laudantium animi laborum ut,
          labore illo porro. Doloremque, culpa?"
        />

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
