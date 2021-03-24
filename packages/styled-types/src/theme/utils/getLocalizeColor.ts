import { LocalizeStyleProps, LocalizeThemeProps } from '../LocalizeTheme';

export type LocalizeStyleResponseType = {
  primaryColor: string;
  neutralColor: string;
  fontColor: string;
  inversedFontColor: string;
};

export const getLocalizeColor = (
  theme: LocalizeThemeProps,
  localize: LocalizeStyleProps,
): LocalizeStyleResponseType => {
  const isLightMode = theme.type === 'LIGHT';
  const {
    primaryColor = 'primary',
    neutralColor = 'transparent',
    fontColor = 'inversed1',
    inversedFontColor = 'inversed10',
  } = localize;
  return {
    primaryColor: theme.colors[primaryColor],
    neutralColor: theme.colors[neutralColor],
    fontColor: isLightMode ? theme.colors[fontColor] : theme.colors[inversedFontColor],
    inversedFontColor: isLightMode ? theme.colors[inversedFontColor] : theme.colors[fontColor],
  };
};
