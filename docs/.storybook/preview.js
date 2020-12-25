import { localizeLightTheme, localizeDarkTheme } from '../../packages/styled-types';

import { withThemeProvider } from './decorators';
import { createThemeFormLocalizeTheme } from './theme';

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
    default: 'LIGHT',
    values: [
      {
        name: 'LIGHT',
        value: localizeLightTheme.layout.backgroundColor,
      },
      {
        name: 'DARK',
        value: localizeDarkTheme.layout.backgroundColor,
      },
    ],
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
  docsTheme: {
    LIGHT: createThemeFormLocalizeTheme({
      theme: localizeLightTheme,
      asStorybookTheme: false
    }),
    DARK: createThemeFormLocalizeTheme({
      theme: localizeDarkTheme,
      asStorybookTheme: false
    }),
  },
};

export const decorators = [withThemeProvider];
