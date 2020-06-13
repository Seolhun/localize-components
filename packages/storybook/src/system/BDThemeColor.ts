import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

type BDThemeColor = keyof LocalizeThemeProps['colors'];

type BDThemeColorObject = {
  [key in BDThemeColor]: string;
};

export { BDThemeColor, BDThemeColorObject };
