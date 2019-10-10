/**
 * Absolute imports
 */
import { DefaultTheme } from 'styled-components/macro';

const theme: DefaultTheme = {
  pallete: {
    bg: {
      main: '#fff',
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
      main: '#000',
      dark: '#000',
      light: '#000',
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
      s: '',
      default: '',
      m: '',
      ml: '',
      l: '',
      xl: '',
    },
  },
};

export default theme;
