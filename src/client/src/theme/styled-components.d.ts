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
      s: string;
      default: string;
      m: string;
      ml: string;
      l: string;
      xl: string;
    };
  };
}

// TypeScript definitions for styled-components
// extended by using declaration merging
declare module 'styled-components' {
  export interface DefaultTheme extends Pallete, Shadow, Typography {
    gutter: number;
  }
}
