// .storybook/preview.js
import React from 'react';
import { Global, css } from '@emotion/core';

import { ThemeProvider } from '../src/theme';

const globalStyle = `
	html, body {
		height: 100%;
		width: 100%;
		font-size: 14px;
	}

	.__Localize__Freezing__Scroll {
		overflow: hidden !important;
	}
`;

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider>
      <Global
        styles={css`
          ${globalStyle}
        `}
      />
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];

export const parameters = {
  /**
   * @see https://storybook.js.org/docs/react/essentials/toolbars-and-globals
   */
  theme: {
    name: 'Localize-Conponents',
    description: 'Localize-Conponents UI',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
  /**
   * @see https://storybook.js.org/docs/react/essentials/backgrounds
   */
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        value: '#F5F5F5',
      },
      {
        name: 'Dark',
        value: '#141414',
      },
    ],
  },
  /**
   * @see https://storybook.js.org/docs/react/essentials/viewport
   */
  viewport: {
    defaultViewport: 'responsive',
  },
  /**
   * @see https://storybook.js.org/docs/react/essentials/controls
   */
  controls: {
    expanded: true
  },
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
};
