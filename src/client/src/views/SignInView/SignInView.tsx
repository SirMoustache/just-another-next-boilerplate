/**
 * Absolute imports
 */
import React from 'react';
import Head from 'next/head';

/**
 * Components
 */
import BaseLayout from '../../components/Layout/BaseLayout';
import SignInForm from '../../components/Forms/SignInForm';

/**
 * Styles
 */
import {} from './styles';

const SignInView = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignInForm />
    </BaseLayout>
  );
};

export default SignInView;
