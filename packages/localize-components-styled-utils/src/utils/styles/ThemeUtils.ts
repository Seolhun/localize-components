import {
  LightenTheme,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

export const getIsLightenTheme = (theme: ThemesType) => {
  const isLightenTheme = Object.keys(LightenTheme).map((key) => {
    return key;
  }).includes(theme);
  return isLightenTheme;
};

export default {
  getIsLightenTheme,
};
