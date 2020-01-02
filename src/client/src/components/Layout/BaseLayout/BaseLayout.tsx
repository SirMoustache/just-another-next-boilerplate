/**
 * Absolute imports
 */
import React, { Fragment, FC } from 'react';

/**
 * Components
 */
import Header from '../Header';
import Footer from '../Footer';

/**
 * Styles
 */
import { Root } from './styles';

export type BaseLayoutProps = {
  justify?: 'center' | 'flex-end' | 'flex-start';
  align?: 'center' | 'flex-end' | 'flex-start';
};

const BaseLayout: FC = ({ children }) => {
  return (
    <Root>
      <Header />
      <main>{children}</main>
      <Footer />
    </Root>
  );
};

export default BaseLayout;
