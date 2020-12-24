// .storybook/preview.js
import React from 'react';
import { Global, css } from '@emotion/core';

import { LocalizeThemeProvider } from '../../packages/localize-components';
import { localizeDarkTheme, localizeLightTheme } from '../../packages/styled-types';

export const globalTypes = {
  /**
   * @see https://storybook.js.org/docs/react/essentials/toolbars-and-globals
   */
  theme: {
    name: 'Localize-Components UI',
    description: 'To describe Localize-Components UI',
    defaultValue: 'LIGHT',
    toolbar: {
      icon: 'circlehollow',
      items: ['LIGHT', 'DARK'],
    },
  },
};

export const parameters = {
  /**
   * @see https://storybook.js.org/docs/react/essentials/backgrounds
   */
  backgrounds: {
    disable: true,
  },
  /**
   * @see https://storybook.js.org/docs/react/essentials/toolbars-and-globals#advanced-usage
   */
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'kr', right: '🇰🇷', title: '한국어' },
      ],
    },
  },
  /**
   * @see https://storybook.js.org/docs/react/essentials/viewport
   */
  viewport: {},
  /**
   * @see https://storybook.js.org/docs/react/essentials/controls
   */
  controls: {
    expanded: true,
  },
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  themeMode: {
    LIGHT: localizeLightTheme,
    DARK: localizeDarkTheme,
  },
};

const globalStyle = css`
	html, body {
		height: 100%;
		width: 100%;
		font-size: 14px;
	}
	.__Localize__Window__LockScroll {
		overflow: hidden !important;
	}
`;

const withThemeProvider = (Story, context) => {
  const [themeKey] = React.useState(context.globals.theme);

  const memoizedTheme = React.useMemo(() => {
    return context.parameters.themeMode[themeKey];
  }, [themeKey])

  const memoizedStorybookTheme = React.useMemo(() => {
    Object.assign(context.parameters.docs.theme || {}, {
      colorPrimary: memoizedTheme.colors.primary,
      colorSecondary: memoizedTheme.colors.secondary,
      appBg: memoizedTheme.layout.backgroundColor,
      appContentBg: memoizedTheme.layout.backgroundColor,
      textColor: memoizedTheme.layout.textColor,
      textInverseColor: memoizedTheme.colors.primary,
      barTextColor: memoizedTheme.layout.textColor,
      barSelectedColor: memoizedTheme.colors.primary,
      barBg: memoizedTheme.layout.backgroundColor,
      inputBg: memoizedTheme.layout.backgroundColor,
      inputTextColor: memoizedTheme.layout.textColor,
    })
  }, [memoizedTheme])

  React.useEffect(() => {
    Object.assign(context.parameters.docs.theme || {}, memoizedStorybookTheme)
  }, [memoizedStorybookTheme])

  return (
    <LocalizeThemeProvider theme={memoizedTheme}>
      <Global styles={globalStyle} />
      <Story {...context} />
    </LocalizeThemeProvider>
  );
};
export const decorators = [withThemeProvider];
