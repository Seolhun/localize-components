import { darken, lighten } from 'polished';

import {
  LightenThemeEnum,
  LocalizeThemes,
  LocalizeThemesType,
  ILocalizeTheme,
  LocalizeThemeStyledProps,
  LocalizeTheme,
} from '@seolhun/localize-components-styled-types';

export const getThemeObject = ({
  mainColor,
  subColor,
}: LocalizeThemeStyledProps, theme?: ILocalizeTheme) => {
  const primary = mainColor || !!theme && theme.primaryColor || LocalizeTheme.primaryColor;
  const second = subColor || !!theme && theme.secondaryColor || LocalizeTheme.secondaryColor;

  return {
    mainColor: getValidTheme(primary),
    subColor: getValidTheme(second),
  };
};

export const getIsLightenTheme = (theme: LocalizeThemesType) => {
  const lightenKeys = Object.keys(LightenThemeEnum);
  const lightenValues = lightenKeys.map((key) => LightenThemeEnum[key])
  const isLightenKeys = lightenKeys.includes(theme);
  const isLightenValues = lightenValues.includes(theme);
  return isLightenKeys || isLightenValues;
};

export const getValidTheme = (theme: LocalizeThemesType) => {
  const isValidTheme = Object.keys(LocalizeThemes).includes(`${theme}`);
  if (isValidTheme) {
    return LocalizeThemes[theme];
  }
  return theme;
};

export const getThemeHoverStyle = (theme: string) => {
  if (getIsLightenTheme(theme)) {
    return darken(0.1, getValidTheme(theme));
  }
  return lighten(0.1, getValidTheme(theme));
};

export const getThemeColorStyle = (theme: string) => {
  if (getIsLightenTheme(theme)) {
    return LocalizeThemes.dark_grey;
  }
  return LocalizeThemes.white;
};
