/**
 * Absolute imports
 */
import React, { useState } from 'react';

/**
 * Services
 */
import { setAccessToken } from '../../services/tokenService';

/**
 * GraphQL
 */
import { useSignInMutation } from '../../generated';

const SignInForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [signIn, { error }] = useSignInMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValues(state => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const responce = await signIn({
      variables: values,
    });

    if (!responce || !responce.data) {
      return;
    }

    setAccessToken(responce.data.login.accessToken);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={values.email}
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={values.password}
      />

      <button type="submit">Sign In</button>

      {error && <div>Error: {JSON.stringify(error)}</div>}
    </form>
  );
};

export default SignInForm;
