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
import { FormWrapper } from './styles';

const SignInView = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Sign In</title>
      </Head>
      <FormWrapper withPadding>
        <SignInForm />
      </FormWrapper>
    </BaseLayout>
  );
};

export default SignInView;
