/**
 * Absolute imports
 */
import styled from 'styled-components/macro';

export const Root = styled.nav`
  margin: 0;
  padding: 0;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
  }
`;

export const NavigationLink = styled.a`
  color: #fff;
  padding: 16px 12px;
  text-decoration: none;
  display: block;
  cursor: pointer;
`;
