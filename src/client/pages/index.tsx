/**
 * Absolute imports
 */
import React from 'react';
import { NextPage } from 'next';

/**
 * Components
 */
import EmptyLayout from '../components/Layout/EmptyLayout';

const HomePage: NextPage = () => {
  return (
    <EmptyLayout>
      <h1>Home Page...</h1>
    </EmptyLayout>
  );
};

export default HomePage;
