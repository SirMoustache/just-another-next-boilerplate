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

export type NavigationLinkProps = {
  active?: Boolean;
};

export const NavigationLink = styled.a<NavigationLinkProps>`
  padding: ${({ theme }) => `${theme.gutter}px ${theme.gutter * 2}px`};
  color: ${({ theme, active }) =>
    active ? 'red' : theme.pallete.textSecondary.main};
  font-size: 18px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.pallete.textSecondary.light};
  }
`;
