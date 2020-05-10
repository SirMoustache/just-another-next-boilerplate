/**
 * Absolute imports
 */
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  pallete: {
    bg: {
      main: '#f7f6ee', // or #f7f5f5
      dark: '#fff',
      light: '#fff',
    },
    bgSecondary: {
      main: '#161c27',
      dark: '#161c27',
      light: '#161c27',
    },
    error: {
      main: '#ff5c5c',
      dark: '#f50000',
      light: '#ffa8a8',
    },
    active: {
      main: '#21d4fd',
      dark: '#009ed1',
      light: '#21d4fd',
    },
    textSecondary: {
      main: '#696969',
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
    lineHeight: 1.4,
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
  container: {
    width: {
      sm: '1088px',
      md: '1088px',
      lg: '1366px',
      xl: '1740px',
    },
    padding: {
      sm: `${8 * 3.25}px`, // 26px
      md: `${8 * 4.5}px`, // 36px
      lg: `${8 * 4.5}px`,
      xl: `${8 * 4.5}px`,
    },
  },
};

export default theme;
