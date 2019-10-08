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
    font-family: "Helvetica", Verdana, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #2c3e50;
    font-size: 16px;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
