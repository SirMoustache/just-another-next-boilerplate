/**
 * Absolute imports
 */
import React, { useState } from 'react';

/**
 * GraphQL
 */
import { useSignUpMutation } from '../../generated';

const SignUpForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [signUp, { error }] = useSignUpMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValues(state => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    signUp({
      variables: values,
    });
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
      <button type="submit">Sign Up</button>
      {error && <div>Error: {JSON.stringify(error)}</div>}
    </form>
  );
};

export default SignUpForm;
