import React from 'react';

import { localizeLightTheme } from '../../../packages/styled-types/dist';
import { LocalizeThemeProvider } from '../../../packages/localize-components/dist';

interface ThemeProviderProps {}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <LocalizeThemeProvider theme={localizeLightTheme}>{children}</LocalizeThemeProvider>;
};

export { ThemeProvider };
export default ThemeProvider;
