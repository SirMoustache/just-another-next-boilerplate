/**
 * Absolute imports
 */
import Router from 'next/router';

import { NextPageContext } from 'next';

export const redirectTo = (to: string, res?: NextPageContext['res']) => {
  if (res) {
    res.writeHead(302, { Location: to });
    res.end();
    res.finished = true;
  } else {
    Router.push(to);
  }
};

export const redirectToLogin = (res?: NextPageContext['res']) => {
  redirectTo('/login', res);
};
