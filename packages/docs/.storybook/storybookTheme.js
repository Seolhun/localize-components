import { create } from '@storybook/theming';

import { useDarkMode } from 'storybook-dark-mode';
import {
  localizeDarkTheme,
  localizeLightTheme,
} from '@seolhun/localize-components-styled-types';

import favicon from './favicon.ico';

/**
 * @see https://storybook.js.org/docs/configurations/theming/
 */
export default create({
  brandTitle: 'Localize-Components UI',
  brandUrl: 'http://localize-components-docs.surge.sh',
  brandImage: favicon,

  colorPrimary: useDarkMode()
    ? localizeDarkTheme.colors.primary01
    : localizeLightTheme.colors.primary01,
  colorSecondary: 'deepskyblue',

  // UI
  appBg: useDarkMode()
    ? localizeDarkTheme.colors.primaryBackground01
    : localizeLightTheme.colors.primaryBackground01,
  appContentBg: useDarkMode()
    ? localizeDarkTheme.colors.primaryBackground01
    : localizeLightTheme.colors.primaryBackground01,
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: useDarkMode()
    ? localizeDarkTheme.colors.uiColor08
    : localizeLightTheme.colors.uiColor01,

  // Toolbar default and active colors
  barTextColor: useDarkMode()
    ? localizeDarkTheme.colors.uiColor08
    : localizeLightTheme.colors.uiColor01,
  barSelectedColor: useDarkMode()
    ? localizeDarkTheme.colors.primary01
    : localizeLightTheme.colors.primary01,
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});
