import { LocalizeThemeFontsProps } from '../../../packages/styled-types';

export type LocalizeFonts = keyof LocalizeThemeFontsProps;
export type LocalizeFontsObject = {
  [key in LocalizeFonts]: string;
};
