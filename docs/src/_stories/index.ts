import { LocalizeSizeObject } from '../system';
import { StoriesThemeWrapper } from './StoriesThemeWrapper';
import { localizeLightTheme } from '../../../packages/styled-types';

const storiesSizeOption: LocalizeSizeObject = {
  xl: 'xl',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs',
};

const storiesColorOption = Object.keys(localizeLightTheme.colors).reduce(
  (acc, key) => ({
    ...acc,
    [key]: key,
  }),
  {},
);

const storiesFontOption = Object.keys(localizeLightTheme.fonts).reduce(
  (acc, key) => ({
    ...acc,
    [key]: key,
  }),
  {},
);

export {
  storiesSizeOption,
  storiesColorOption,
  storiesFontOption,
  StoriesThemeWrapper,
};
