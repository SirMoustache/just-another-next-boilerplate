/**
 * Absolute imports
 */
import styled from 'styled-components';

export const Root = styled.nav`
  margin: 0;
  padding: 0;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
  }
`;

export const NavigationLink = styled.a`
  padding: ${({ theme }) => `${theme.gutter}px ${theme.gutter * 2}px`};
  text-decoration: none;
  display: block;
  cursor: pointer;
`;
