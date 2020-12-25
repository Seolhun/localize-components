import React from 'react';
import { Global, css } from '@emotion/core';

import {
  LocalizeContainer,
  LocalizeRow,
  LocalizeCol,
} from '../../packages/grid';
import {
  LocalizeThemeProvider,
} from '../../packages/localize-components';

const globalStyle = (theme) => css`
	html, body {
		font-size: 14px;
  }

	.__Localize__Window__LockScroll {
		overflow: hidden !important;
  }

  .__Localize__Container {
    h2 {
      color: ${theme.colors.inversed10}
    }
  }
`;

export const withThemeProvider = (Story, context) => {
  const themeKey = context.globals.theme;

  const memoizedTheme = React.useMemo(() => {
    const theme = context.parameters.themeMode[themeKey];;
    return theme;
  }, [context, themeKey])

  const memoizedContext = React.useMemo(() => {
    const docsTheme = context.parameters.docsTheme[themeKey];
    const newContext = {
      ...context,
    }
    newContext.parameters.docs.theme = docsTheme;
    newContext.globals.backgrounds = {
      value: memoizedTheme.layout.backgroundColor,
    }
    return newContext;
  }, [context, themeKey])

  return (
    <LocalizeThemeProvider theme={memoizedTheme}>
      <Global styles={globalStyle} />
      <LocalizeContainer isFull>
        <LocalizeRow>
          <LocalizeCol>
            <Story {...memoizedContext} />
          </LocalizeCol>
        </LocalizeRow>
      </LocalizeContainer>
    </LocalizeThemeProvider>
  );
};

