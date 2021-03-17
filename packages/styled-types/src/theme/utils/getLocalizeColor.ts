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
    primaryColor = 'default',
    neutralColor = 'transparent',
    fontColor = 'inversed1',
    inversedColor = 'inversed10',
  } = localize;
  return {
    primaryColor: theme.colors[primaryColor],
    neutralColor: theme.colors[neutralColor || neutralColor],
    fontColor: isLightMode ? theme.colors[fontColor] : theme.colors[inversedColor],
    inversedFontColor: isLightMode ? theme.colors[inversedColor] : theme.colors[fontColor],
  };
};
