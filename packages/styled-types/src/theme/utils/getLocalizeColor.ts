import { LocalizeStyleProps, LocalizeThemeProps } from '../LocalizeTheme';

export type LocalizeStyleResponseType = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

export const getLocalizeColor = (
  theme: LocalizeThemeProps,
  localize: LocalizeStyleProps,
): LocalizeStyleResponseType => {
  const { fontColor = 'conversion1', bgColor = 'primary', bdColor = 'transparent' } = localize;
  const color = theme.colors[fontColor];
  const backgroundColor = theme.colors[bgColor];
  const borderColor = theme.colors[bdColor || bgColor];
  return {
    color,
    backgroundColor,
    borderColor,
  };
};
