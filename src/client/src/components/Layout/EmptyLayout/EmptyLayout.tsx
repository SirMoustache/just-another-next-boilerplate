/**
 * Absolute imports
 */
import styled from 'styled-components';

export type EmptyLayoutProps = {
  justify?: 'center' | 'flex-end' | 'flex-start';
  align?: 'center' | 'flex-end' | 'flex-start';
};

const EmptyLayout = styled.main<EmptyLayoutProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
`;

export default EmptyLayout;
