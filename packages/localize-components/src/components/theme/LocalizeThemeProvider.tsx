import React from 'react';

import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { localizeLightTheme, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

const globalStyle = (_theme: LocalizeThemeProps) => css`
  .__Localize__Window__LockScroll {
    overflow: hidden !important;
  }
`;

export interface LocalizeThemeProviderProps {
  /**
   * Set this to change LocalizeThemeProvider theme
   * @default lightTheme
   */
  theme?: LocalizeThemeProps;
}

const LocalizeThemeProvider: React.FC<LocalizeThemeProviderProps> = ({
  children,
  theme = localizeLightTheme,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
};

export { LocalizeThemeProvider };
export default LocalizeThemeProvider;
