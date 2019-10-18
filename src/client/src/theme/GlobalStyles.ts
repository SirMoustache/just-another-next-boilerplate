/**
 * Absolute imports
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, 
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  html {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: 400;
    font-style: normal;
    color: ${({ theme }) => theme.pallete.textPrimary.main};
    background-color: ${({ theme }) => theme.pallete.bg.main};
    font-size: ${({ theme }) => theme.typography.sizes.default};
    line-height: ${({ theme }) => theme.typography.lineHeight};;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
