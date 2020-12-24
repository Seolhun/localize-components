import { themes } from '@storybook/theming';

import { withThemeProvider } from './decorators';
import { localizeDarkTheme, localizeLightTheme } from '../../packages/styled-types';

/**
 * @see https://storybook.js.org/docs/react/essentials/toolbars-and-globals
 */
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'LIGHT',
    toolbar: {
      items: ['LIGHT', 'DARK'],
    },
  },
};

export const parameters = {
    /**
   * @see https://storybook.js.org/docs/react/essentials/controls
   */
  controls: {
    expanded: true,
  },
  /**
   * @see https://storybook.js.org/docs/react/essentials/backgrounds
   */
  backgrounds: {
    disable: true,
  },
  /**
   * @see https://storybook.js.org/docs/react/essentials/viewport
   */
  viewport: {},
  actions: {
    argTypesRegex: '^on[A-Z].*',
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
  docs: {
    theme: themes.light,
  },
  /**
   * @default padded
   * fullscreen | padded | center
   */
  layout: 'padded',
  /**
   * Custom Configurations
   */
  themeMode: {
    LIGHT: localizeLightTheme,
    DARK: localizeDarkTheme,
  },
};

export const decorators = [withThemeProvider];
