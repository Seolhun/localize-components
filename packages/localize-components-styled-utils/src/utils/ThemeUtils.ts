import {
  LightenTheme,
  Themes,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

export const getIsLightenTheme = (theme: ThemesType) => {
  const isLightenTheme = Object.keys(LightenTheme).map((key) => {
    return key;
  }).includes(theme);
  return isLightenTheme;
};

export const getValidTheme = (theme: ThemesType) => {
  const isLightenTheme = Object.keys(Themes).map((key) => {
    return key;
  }).includes(theme);
  if (isLightenTheme) {
    return Themes[theme];
  }
  return theme;
};

export default {
  getIsLightenTheme,
  getValidTheme,
};
