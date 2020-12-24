import { LocalizeStyleProps, LocalizeThemeProps } from '../LocalizeTheme';

export type LocalizeStyleResponseType = {
  backgroundColor: string;
  borderColor: string;
  color: string;
  inversedColor: string;
};

export const getLocalizeColor = (
  theme: LocalizeThemeProps,
  localize: LocalizeStyleProps,
): LocalizeStyleResponseType => {
  const {
    bgColor = 'default',
    bdColor = 'transparent',
    fontColor = 'inversed1',
    inversedColor = 'inversed10',
  } = localize;
  return {
    backgroundColor: theme.colors[bgColor],
    borderColor: theme.colors[bdColor || bgColor],
    color: theme.colors[fontColor],
    inversedColor: theme.colors[inversedColor],
  };
};
