// .storybook/preview.js
import React from 'react';
import { Global, css } from '@emotion/core';

import { LocalizeThemeProvider } from '../../packages/localize-components';

const globalStyle = `
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
  return (
    <LocalizeThemeProvider>
      <Global
        styles={css`
          ${globalStyle}
        `}
      />
      <Story {...context} />
    </LocalizeThemeProvider>
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
        value: '#ffffff',
      },
      {
        name: 'Dark',
        value: '#13161F',
      },
    ],
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
};
