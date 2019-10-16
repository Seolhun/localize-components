import React, { FC, ReactNode } from 'react';

import { ThemeProvider } from 'emotion-theming';
import {
  LocalizeTheme,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';

export interface LocalizeThemeProviderProps {
  /**
   * Set this to change LocalizeThemeProvider children
   */
  children: ReactNode,
  /**
   * Set this to change LocalizeThemeProvider theme
   * @default LocalizeTheme
   * @see LocalizeTheme
   */
  theme?: ILocalizeTheme,
}

export const LocalizeThemeProvider: FC<LocalizeThemeProviderProps> = ({
  children,
  theme = LocalizeTheme,
}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default LocalizeThemeProvider;
