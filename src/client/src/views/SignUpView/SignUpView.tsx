/**
 * Absolute imports
 */
import React from 'react';
import Head from 'next/head';

/**
 * Components
 */
import BaseLayout from '../../components/Layout/BaseLayout';
import SignUpForm from '../../components/Forms/SignUpForm';

/**
 * Styles
 */
import {} from './styles';

const SignUpView = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUpForm />
    </BaseLayout>
  );
};

export default SignUpView;
