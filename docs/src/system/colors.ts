import { LocalizeThemeProps } from '../../../packages/styled-types';

export type LocalizeThemeColors = keyof LocalizeThemeProps['colors'];
export type LocalizeThemeColorsObject = {
  [key in LocalizeThemeColors]: string;
};
