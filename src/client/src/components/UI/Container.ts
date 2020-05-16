/**
 * Absolute imports
 */
import styled, { DefaultTheme } from 'styled-components';

export type ContainerProps = {
  width?: keyof DefaultTheme['container']['width'];
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;

  max-width: ${({ theme, width = 'md' }) => theme.container.width[width]};

  /* @media (min-width: 1280px) {
    width: 1176px; 
    width: 1280px;
  } */
`;

export const LayoutContainer = styled.div<ContainerProps>`
  width: 100%;
  padding: 0 8vw;
  margin-left: auto;
  margin-right: auto;
`;
