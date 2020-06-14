import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

type LocalizeThemeColor = keyof LocalizeThemeProps['colors'];

type LocalizeThemeColorObject = {
  [key in LocalizeThemeColor]: string;
};

export { LocalizeThemeColor, LocalizeThemeColorObject };
