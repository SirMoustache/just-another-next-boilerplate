/**
 * Absolute imports
 */
import React, { FC } from 'react';
import Link from 'next/link';
import { Formik, FormikProps, FormikHelpers } from 'formik';

/**
 * Material UI
 */
import { Button } from '@material-ui/core';

/**
 * Components
 */
import A from '../../UI/A';
// import LoadingOverlay from '../../UI/LoadingOverlay';
import FormTextField from '../../FormsWrap/FormTextField';
// import FormToggle, { ToggleProps } from '../FormToggle';

/**
 * Styles
 */
import { FormHeader, FormDescription, FormActions, FormError } from './styles';

/**
 * Types
 */

/**
 * Routes
 */
// import routeNames from '../../../routes/routeNames';

/**
 * Services
 */
import { setAccessToken } from '../../../services/tokenService';

/**
 * GraphQL
 */
import { useSignInMutation } from '../../../generated';

/**
 * Utils
 */
import { normalizeServerError } from '../../../utils/apolloUtils';
import validateSchema from './validate';

export type SignInRequestData = {
  email: string;
  password: string;
};

type SignInFormProps = {
  isLoading?: boolean;
  errorMessage?: string;
};

const SignInForm: FC<SignInFormProps> = ({ isLoading, errorMessage }) => {
  const [signIn, { error }] = useSignInMutation();

  const handleSubmit = async (
    values: SignInRequestData,
    actions: FormikHelpers<SignInRequestData>,
  ) => {
    actions.setSubmitting(true);

    const responce = await signIn({
      variables: values,
    });

    if (!responce || !responce.data) {
      actions.setSubmitting(false);
      return;
    }

    setAccessToken(responce.data.login.accessToken);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validateSchema}
    >
      {(props: FormikProps<SignInRequestData>) => (
        <form onSubmit={props.handleSubmit}>
          <FormHeader>Sign In</FormHeader>

          <FormDescription>Sign in to your account</FormDescription>

          <FormTextField
            name="email"
            label="Email"
            margin="normal"
            variant="filled"
            disabled={props.isSubmitting}
            //component={FormTextField}
          />

          <FormTextField
            name="password"
            label="Password"
            margin="normal"
            variant="filled"
            type="password"
            disabled={props.isSubmitting}
            //component={FormTextField}
          />

          {error && (
            <FormError>
              <strong>Error:</strong> {normalizeServerError(error.message)}
            </FormError>
          )}

          <FormActions>
            <Button
              variant="contained"
              // color="primary"
              size="large"
              type="submit"
              disabled={props.isSubmitting}
            >
              {/* {isLoading && <LoadingOverlay size={24} />} */}
              Sign In
            </Button>
          </FormActions>

          <Link href="/" passHref>
            <A>Forgot your password?</A>
          </Link>
        </form>
      )}
    </Formik>
  );
};

export default SignInForm;
