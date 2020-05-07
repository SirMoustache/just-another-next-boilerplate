/**
 * Absolute imports
 */
import { DefaultTheme, BaseThemedCssFunction, css } from 'styled-components';

export type PropMap<T extends string> = Record<T, string | number>;

/**
 * A function that receives a theme object and returns an object
 * where the key is property variant and value is corresponding theme value
 *
 * @example
 * export type ButtonColor = 'primary' | 'secondary' | 'dark' | 'light';
 * const createButtonColorMap: PropMapCreator<ButtonColor> = theme => {
 *  const colorMap = {
 *    primary: theme.colors.corporate,
 *    dark: theme.colors.dark,
 *    light: theme.colors['light-grey'],
 *    secondary: theme.colors['medium-grey'],
 *  };
 *
 *  return colorMap;
 * };
 */
export type PropMapCreator<T extends string> = (
  theme: DefaultTheme,
) => PropMap<T>;

/**
 *
 * @example
 * export const Section = styled.section<SectionProps>`
 *  padding-top: ${({ theme, gutterTop = 'md' }) =>
 *    getPropFromMap(theme, gutterTop, createGutterMap)};
 *  padding-bottom: ${({ theme, gutterBottom = 'md' }) =>
 *    getPropFromMap(theme, gutterBottom, createGutterMap(theme))};
 *`;
 */
export const getPropFromMap = <T extends string>(
  theme: DefaultTheme,
  prop: T,
  map: PropMapCreator<T> | PropMap<T>,
) => {
  if (typeof map === 'function') {
    const propMap = map(theme);
    return propMap[prop];
  }

  return map[prop];
};

type MediaCSS = (
  breakpoint: keyof DefaultTheme['breakpoints'],
) => BaseThemedCssFunction<DefaultTheme>;

/**
 * WARNING: work in propress
 * Media Query CSS helper function
 *
 * @example
 * const Box = styled.div`
 *   ${minMedia('lg')`
 *     background: red;
 *   `}
 * `
 */
//@ts-ignore
export const minMediaCss: MediaCSS = (breakpoint) => <P extends object>(
  first: any,
  ...interpolations: any
) => {
  const mediaCss = css<P>`
    @media (min-width: ${({ theme }) => theme.breakpoints[breakpoint]}) {
      ${css<P>(first, ...interpolations)}
    }
  `;

  return mediaCss;
};

type Breakpoint = keyof DefaultTheme['breakpoints'];
type StyledParams = {
  theme: DefaultTheme;
};

/**
 * Min Media helper
 *
 * @example
 * export const SectionSearch = styled.div`
 *  margin: 0 auto;
 *  margin-bottom: 60px;
 *
 *  ${getMinMedia('md')} {
 *    margin-bottom: 80px;
 *    max-width: 400px;
 *  }
 *`;
 */
export const getMinMedia = (breakpoint: Breakpoint) => ({
  theme,
}: StyledParams) => {
  const mediaString = `@media (min-width: ${theme.breakpoints[breakpoint]}px)`;

  return mediaString;
};

// export const minMediaTwo = (breakpoint: keyof DefaultTheme['breakpoints']) => <
//   P extends object
// >(
//   first:
//     | TemplateStringsArray
//     | CSSObject
//     | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
//   ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
// ) => {
//   return css<P>`
//     @media (min-width: ${({ theme }) => theme.breakpoints[breakpoint]}) {
//       ${css<P>(first, ...interpolations)}
//     }
//   `;
// };
