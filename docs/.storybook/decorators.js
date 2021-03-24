import React from 'react';
import { Global, css } from '@emotion/core';

import { LocalizeThemeProvider } from '../../packages/localize-components';

const globalStyle = (theme) => css`
  html,
  body {
    font-size: 16px;
  }

  h2 {
    color: ${theme.colors.inversed10};
  }
`;

const withThemeProvider = (Story, context) => {
  const [themeKey, setThemeKey] = React.useState(context.globals.theme);

  React.useEffect(() => {
    setThemeKey(context.globals.theme);
  }, [context.globals?.theme]);

  const memoizedTheme = React.useMemo(() => {
    const themeMode = context.parameters.themeMode[themeKey];
    return themeMode;
  }, [themeKey, context]);

  const memoizedContext = React.useMemo(() => {
    const docsTheme = context.parameters.themeDocsMode[themeKey];
    context.parameters.backgrounds.default = themeKey;
    context.parameters.docs.theme = docsTheme;
    return context;
  }, [memoizedTheme, themeKey, context]);

  return (
    <LocalizeThemeProvider theme={memoizedTheme}>
      <Global styles={globalStyle} />
      <Story {...memoizedContext} />
    </LocalizeThemeProvider>
  );
};

export const decorators = [withThemeProvider];
