import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import {
  localizeDarkTheme,
  localizeLightTheme,
} from '../../../packages/styled-types';
import { LocalizeThemeProvider } from '../../../packages/localize-components';

interface StoriesThemeWrapperProps {}

const StoriesThemeWrapper: React.FC<StoriesThemeWrapperProps> = ({
  children,
}) => {
  return (
    <LocalizeThemeProvider
      theme={useDarkMode() ? localizeDarkTheme : localizeLightTheme}
    >
      {children}
    </LocalizeThemeProvider>
  );
};

export { StoriesThemeWrapper };
export default StoriesThemeWrapper;
