import { LocalizeThemeProps } from '../../../packages/styled-types';

type LocalizeThemeColor = keyof LocalizeThemeProps['colors'];

type BDThemeColorObject = {
  [key in LocalizeThemeColor]: string;
};

export { LocalizeThemeColor, BDThemeColorObject };
