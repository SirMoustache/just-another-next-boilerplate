/**
 * Absolute imports
 */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type BaseProps = {
  justify?: 'center' | 'flex-end' | 'flex-start';
  align?: 'center' | 'flex-end' | 'flex-start';
};

const Base = styled(motion.main)<BaseProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
`;

export type EmptyLayoutProps = {
  children?: React.ReactNode;
};

const EmptyLayout = ({ children }: EmptyLayoutProps) => {
  return (
    <Base initial="initial" animate="animate" exit={{ opacity: 0 }}>
      {children}
    </Base>
  );
};

export default EmptyLayout;
