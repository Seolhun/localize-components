import { create } from '@storybook/theming/create';

import { LocalizeThemeProps, localizeLightTheme } from '../../packages/styled-types';

interface Props {
  theme: LocalizeThemeProps;
  options?: any;
  isStorybookTheme?: boolean;
}

const getStorybookThemeFromLocalize = (theme: LocalizeThemeProps) => {
  return {
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

export const createThemeFormLocalizeTheme = ({
  theme,
  options = {},
  isStorybookTheme = true,
}: Props) => {
  const docsTheme = getStorybookThemeFromLocalize(theme);
  const themeObject = {
    ...options,
    ...docsTheme,
  }
  return isStorybookTheme ? create(themeObject) : themeObject
}
