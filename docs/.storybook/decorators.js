import React from 'react';
import { Global, css } from '@emotion/core';
import { themes } from '@storybook/theming';

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
    return context.parameters.themeMode[themeKey];
  }, [themeKey])

  return (
    <LocalizeThemeProvider theme={memoizedTheme}>
      <Global styles={globalStyle} />
      <LocalizeContainer isFull>
        <LocalizeRow>
          <LocalizeCol>
            <Story {...context} />
          </LocalizeCol>
        </LocalizeRow>
      </LocalizeContainer>
    </LocalizeThemeProvider>
  );
};


export const withStorybookTheme = (theme) => {
  const isLightMode = theme.type === 'LIGHT';
  return {
    ...(isLightMode ? themes.light : themes.dark),
    colorPrimary: theme.colors.primary,
    colorSecondary: theme.colors.secondary,
    appBg: theme.layout.backgroundColor,
    appContentBg: theme.layout.backgroundColor,
    textColor: theme.layout.textColor,
    textInverseColor: theme.colors.primary,
    barTextColor: theme.layout.textColor,
    barSelectedColor: theme.colors.primary,
    barBg: theme.layout.backgroundColor,
    inputBg: theme.layout.backgroundColor,
    inputTextColor: theme.layout.textColor,
  };
};
