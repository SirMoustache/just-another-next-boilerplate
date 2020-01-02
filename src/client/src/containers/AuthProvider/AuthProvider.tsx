/**
 * Absolute imports
 */
import React, { FC, Fragment, useEffect } from 'react';

/**
 * Services
 */
import {
  getAccessToken,
  fetchAccessToken,
  setAccessToken,
} from '../../services/tokenService';

const AuthProvider: FC = ({ children }) => {
  useEffect(() => {
    fetchAccessToken().then(token => {
      if (token) {
        setAccessToken(token);
      }
    });
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AuthProvider;
