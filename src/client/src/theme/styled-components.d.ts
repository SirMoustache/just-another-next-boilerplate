import 'styled-components';

interface Color {
  main: string;
  dark: string;
  light: string;
}

type ColorVariant =
  | 'bg'
  | 'bgSecondary'
  | 'error'
  | 'active'
  | 'textPrimary'
  | 'textSecondary';

interface Pallete {
  pallete: Record<ColorVariant, Color>;
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

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Breakpoints {
  breakpoints: Record<Breakpoint, number>;
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
