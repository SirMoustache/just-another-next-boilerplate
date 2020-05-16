/**
 * Absolute imports
 */
import styled from 'styled-components';

export type RootProps = {
  isScrolled?: boolean;
};

export const Root = styled.header<RootProps>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;

  background-color: ${({ isScrolled }) =>
    isScrolled ? 'white' : 'transparent'};

  transition: background-color 200ms ease-in-out;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6vw 8vw;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 4vw 8vw 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 49px;
  height: 49px;
  object-fit: contain;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const Language = styled.div`
  display: flex;
`;

export const MobileMenu = styled.div`
  margin-left: 16px;
  position: relative;
  z-index: 15;

  @media (min-width: ${({ theme }): number => theme.breakpoints.md}px) {
    display: none;
  }
`;
