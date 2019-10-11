/**
 * Absolute imports
 */
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  pallete: {
    bg: {
      main: '#f7f6ee',
      dark: '#fff',
      light: '#fff',
    },
    error: {
      main: 'red',
      dark: 'red',
      light: 'red',
    },
    active: {
      main: '#21d4fd',
      dark: '#009ed1',
      light: '#21d4fd',
    },
    textSecondary: {
      main: '#000',
      dark: '#000',
      light: '#000',
    },
    textPrimary: {
      main: '#232323',
      dark: '#000',
      light: '#2c3e50',
    },
  },
  gutter: 8,
  shadow: {
    main: '',
  },
  typography: {
    fontFamily: "'Roboto','Helvetica','Arial',sans-serif",
    sizes: {
      xs: '',
      sm: '',
      default: '16px',
      md: '',
      ml: '',
      lg: '',
      xl: '',
    },
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export default theme;
