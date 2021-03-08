import { themes } from '@storybook/theming';
import { localizeLightTheme, localizeDarkTheme } from '../../packages/styled-types';

import { createThemeFormLocalizeTheme } from './theme';
import logo from './logo.png';

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
    // disable: true,
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
    current: 'LIGHT',
    LIGHT: localizeLightTheme,
    DARK: localizeDarkTheme,
  },
  docsTheme: {
    LIGHT: createThemeFormLocalizeTheme({
      theme: localizeLightTheme,
      options: {
        ...themes.light,
        brandTitle: 'Localize-Components',
        brandUrl: 'http://localize-components-docs.surge.sh/#/',
        brandImage: logo,
      },
      asStorybookTheme: false
    }),
    DARK: createThemeFormLocalizeTheme({
      theme: localizeDarkTheme,
      options: {
        ...themes.dark,
        brandTitle: 'Localize-Components',
        brandUrl: 'http://localize-components-docs.surge.sh/#/',
        brandImage: logo,
      },
      asStorybookTheme: false,
    }),
  },
};
