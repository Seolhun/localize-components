import { darken, lighten } from 'polished';

import {
  LightenTheme,
  Themes,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

export const getIsLightenTheme = (theme: ThemesType) => {
  const isLightenTheme = Object.keys(LightenTheme)
    .map((key) => {
      return key;
    })
    .includes(theme);
  return isLightenTheme;
};

export const getValidTheme = (theme: ThemesType) => {
  const isLightenTheme = Object.keys(Themes)
    .map((key) => {
      return key;
    })
    .includes(theme);
  if (isLightenTheme) {
    return Themes[theme];
  }
  return theme;
};

export const getThemeHoverStyle = (theme: ThemesType) => {
  if (getIsLightenTheme(theme)) {
    return darken(0.1, getValidTheme(theme));
  }
  return lighten(0.1, getValidTheme(theme));
};

export const getThemeColorStyle = (theme: ThemesType) => {
  if (getIsLightenTheme(theme)) {
    return Themes.dark_gray;
  }
  return Themes.white;
};

export default {
  getIsLightenTheme,
  getValidTheme,
  getThemeHoverStyle,
  getThemeColorStyle,
};
