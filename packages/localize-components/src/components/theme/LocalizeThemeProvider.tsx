import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import { localizeLightTheme, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

export interface LocalizeThemeProviderProps {
  /**
   * Set this to change LocalizeThemeProvider theme
   * @default lightTheme
   */
  theme?: LocalizeThemeProps;
}

const LocalizeThemeProvider: React.FC<LocalizeThemeProviderProps> = ({ children, theme = localizeLightTheme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { LocalizeThemeProvider };
export default LocalizeThemeProvider;
