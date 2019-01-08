import {
  LightenTheme,
  ThemeStyle,
  ThemeType,
} from '@seolhun/localize-components-types';
import { ThemeStyleOptions } from '@seolhun/localize-components-types';

const LocalStyles = require('./LocalStyles.css');

export const getIsLightenTheme = (theme: ThemeType) => {
  const isLightenTheme = Object.keys(LightenTheme).map((key) => {
    return LightenTheme[key];
  }).includes(theme);
  return isLightenTheme;
};

export const getThemeStyleKey = (
  theme: ThemeType,
  options: ThemeStyleOptions = {
    themeType: ThemeStyle.Background,
    useHover: false,
  },
) => {
  const { themeType, useHover } = options;
  if (
    themeType === ThemeStyle.Background ||
    themeType === ThemeStyle.Gradient
  ) {
    const isLighten = getIsLightenTheme(theme);
    const suffix = isLighten
      ? 'lighten'
      : 'darken';
    if (themeType === ThemeStyle.Background) {
      const hoverStyle = useHover
      ? '-hover'
      : '';
      return `${themeType}-${suffix}-${theme}${hoverStyle}`;
    }
    return `${themeType}-${suffix}-${theme}`;
  }
  return `${themeType}-${theme}`;
};

export const getThemeStyle = (
  theme: ThemeType,
  options: ThemeStyleOptions = {
    themeType: ThemeStyle.Background,
  },
  styles = LocalStyles,
) => {
  const themeKey = getThemeStyleKey(theme, options);
  return styles[themeKey];
};

export default {
  getIsLightenTheme,
  getThemeStyle,
  getThemeStyleKey,
};
