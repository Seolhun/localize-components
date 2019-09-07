import { darken, lighten } from 'polished';

import {
  LightenTheme,
  LocalizeThemes,
  LocalizeThemesType,
} from '@seolhun/localize-components-styled-types';

export const getIsLightenTheme = (theme: LocalizeThemesType) => {
  const isLightenTheme = Object.keys(LightenTheme).includes(theme);
  return isLightenTheme;
};

export const getValidTheme = (theme: LocalizeThemesType) => {
  const isValidTheme = Object.keys(Themes).includes(theme);
  if (isValidTheme) {
    return Themes[theme];
  }
  return theme;
};

export const getThemeHoverStyle = (theme: LocalizeThemesType) => {
  if (getIsLightenTheme(theme)) {
    return darken(0.1, getValidTheme(theme));
  }
  return lighten(0.1, getValidTheme(theme));
};

export const getThemeColorStyle = (theme: LocalizeThemesType) => {
  if (getIsLightenTheme(theme)) {
    return LocalizeThemes.dark_grey;
  }
  return LocalizeThemes.white;
};
