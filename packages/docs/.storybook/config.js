import React from 'react';
import { Global, css } from '@emotion/core';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import { StoriesThemeWrapper } from '../src/_stories';
import storybookTheme from './storybookTheme';

export const globalStyle = `
	html, body {
		height: 100%;
		width: 100%;
		font-size: 14px;
	}

	.__Localize__freezing-scroll {
		overflow: hidden !important;
	}
`;

const req = require.context('../src', true, /\.stories\.(ts|tsx)$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
  addDecorator((story) => (
    <StoriesThemeWrapper>
      <Global
        styles={css`
          ${globalStyle}
        `}
      />
      {story()}
    </StoriesThemeWrapper>
  ));
  addParameters({
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
      },
    },
  });
  addParameters({
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
  });
  addParameters({
    options: {
      name: 'Localize-Conponents UI',
      theme: storybookTheme,
    },
  });
}

configure(loadStories, module);
