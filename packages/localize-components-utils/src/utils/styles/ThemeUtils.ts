import {
  LightenTheme,
  ThemeStyle,
  ThemeType,
} from '@airbloc/hermes-types';
import { ThemeStyleOptions } from '@airbloc/hermes-types';

const LocalStyles = require('./LocalStyles.css');

const getIsLightenTheme = (theme: ThemeType) => {
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
  options: ThemeStyleOptions,
  styles = LocalStyles,
) => {
  const {
    themeType = ThemeStyle.Background,
    useHover = false,
  } = options;
  const themeKey = getThemeStyleKey(theme, { themeType, useHover });
  return styles[themeKey];
};

export default {
  getThemeStyle,
  getThemeStyleKey,
};
