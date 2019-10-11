import 'styled-components';

type Color = {
  main: string;
  dark: string;
  light: string;
};

interface Pallete {
  pallete: {
    bg: Color;
    error: Color;
    active: Color;
    textPrimary: Color;
    textSecondary: Color;
  };
}

interface Shadow {
  shadow: {
    main: string;
  };
}

interface Typography {
  typography: {
    fontFamily: string;
    sizes: {
      xs: string;
      sm: string;
      default: string;
      md: string;
      ml: string;
      lg: string;
      xl: string;
    };
  };
}

interface Breakpoints {
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

interface Guter {
  gutter: number;
}

// TypeScript definitions for styled-components
// extended by using declaration merging
declare module 'styled-components' {
  export interface DefaultTheme
    extends Pallete,
      Shadow,
      Typography,
      Breakpoints,
      Guter {}
}
