/**
 * Absolute imports
 */
import React, { FC, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

/**
 * Theme
 */
import lightTheme from '../../theme/light';

export type StyledThemeProviderProps = {
  theme?: 'light';
};

const themes = {
  light: lightTheme,
};

const StyledThemeProvider: FC<StyledThemeProviderProps> = ({
  children,
  theme = 'light',
}) => {
  const activeTheme = themes[theme];
  return (
    <ThemeProvider theme={activeTheme}>
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  );
};

export default StyledThemeProvider;
