/**
 * Absolute imports
 */
import React, { Fragment, FC } from 'react';
import { motion } from 'framer-motion';

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
      <motion.main initial="initial" animate="animate" exit={{ opacity: 0 }}>
        {children}
      </motion.main>
      <Footer />
    </Root>
  );
};

export default BaseLayout;
