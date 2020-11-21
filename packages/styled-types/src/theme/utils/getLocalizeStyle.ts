import { LocalizeProps, LocalizeThemeProps } from "../LocalizeTheme";

export const getLocalizeStyle = (theme: LocalizeThemeProps, localize: LocalizeProps) => {
  const {
    fontColor = 'conversion10',
    bgColor = 'primary',
    bdColor,
  } = localize;
  const color = theme.colors[fontColor];
  const backgroundColor = theme.colors[bgColor];
  const borderColor = theme.colors[bdColor || bgColor];
  return {
    color,
    backgroundColor,
    borderColor,
  }
};
