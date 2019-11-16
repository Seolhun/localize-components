import { darken, lighten } from 'polished';

import {
  LightenThemeEnum,
  LocalizeThemes,
  LocalizeThemesType,
  ILocalizeTheme,
  LocalizeThemeStyledProps,
  LocalizeTheme,
} from '@seolhun/localize-components-styled-types';

interface ValidThemeResponse {
  mainColor: string;
  subColor: string;
  clickableColor: string;
  highlightedFontColor: string;
  primaryFontColor: string;
  secondaryFontColor: string;
  backgroundColor: string;
}

export const getValidThemeObject = ({
  mainColor,
  subColor,
}: LocalizeThemeStyledProps, theme?: ILocalizeTheme): ValidThemeResponse => {
  const primary = mainColor || !!theme && theme.primaryColor || LocalizeTheme.primaryColor;
  const second = subColor || !!theme && theme.secondaryColor || LocalizeTheme.secondaryColor;
  const clickable = mainColor || !!theme && theme.clickableColor || LocalizeTheme.clickableColor;
  const highlightedFont = mainColor || !!theme && theme.fonts.color.highlightColor || LocalizeTheme.fonts.color.highlightColor;
  const primaryFont = mainColor || !!theme && theme.fonts.color.primaryColor || LocalizeTheme.fonts.color.primaryColor;
  const secondaryFont = subColor || !!theme && theme.fonts.color.secondaryColor || LocalizeTheme.fonts.color.secondaryColor;
  const background = !!theme && theme.background || LocalizeTheme.background;

  return {
    mainColor: getValidTheme(primary),
    subColor: getValidTheme(second),
    clickableColor: getValidTheme(clickable),
    highlightedFontColor: getValidTheme(highlightedFont),
    primaryFontColor: getValidTheme(primaryFont),
    secondaryFontColor: getValidTheme(secondaryFont),
    backgroundColor: getValidTheme(background),
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
