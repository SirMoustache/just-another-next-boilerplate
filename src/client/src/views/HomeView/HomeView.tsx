/**
 * Absolute imports
 */
import React from 'react';
import Head from 'next/head';

/**
 * Components
 */
import BaseLayout from '../../components/Layout/BaseLayout';
import FeaturedProducts from '../../components/FeaturedProducts';
import HomeHero from '../../components/HomeHero';

/**
 * Styles
 */
import {} from './styles';

const NotFoundView = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomeHero />
      <FeaturedProducts />
    </BaseLayout>
  );
};

export default NotFoundView;
