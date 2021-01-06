import { LocalizeStyleProps, LocalizeThemeProps } from '../LocalizeTheme';

export type LocalizeStyleResponseType = {
  backgroundColor: string;
  borderColor: string;
  innerColor: string;
  color: string;
};

export const getLocalizeColor = (
  theme: LocalizeThemeProps,
  localize: LocalizeStyleProps,
): LocalizeStyleResponseType => {
  const {
    bgColor = 'default',
    bdColor = 'conversion1',
    innerFontColor = 'conversion1',
    fontColor = 'conversion10',
  } = localize;
  const backgroundColor = theme.colors[bgColor];
  const borderColor = theme.colors[bdColor || bgColor];
  const innerColor = theme.colors[innerFontColor];
  const color = theme.colors[fontColor];
  return {
    backgroundColor,
    borderColor,
    innerColor,
    color,
  };
};
