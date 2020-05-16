/**
 * Absolute imports
 */
import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Utils
 */
import { getMinMedia } from '../../utils/styleUtils';

export const Root = styled.section`
  padding-top: 40px;
`;

export const Breadcrumbs = styled.div`
  padding: 40px 0;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-column-gap: 1ch;
`;

export const Breadcrumb = styled.a`
  cursor: pointer;
`;

export const Divider = styled.span`
  &::before {
    content: '/';
    display: block;
  }
`;
