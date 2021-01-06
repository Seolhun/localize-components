import { Property } from 'csstype';

import { LocalizeIntentThemeType, LocalizeSize } from '../../../packages/styled-types';
import { localizeLightTheme } from '../../../packages/styled-types';

export const storiesSizeOptions: LocalizeSize[] = ['xl', 'lg', 'md', 'sm', 'xs'];

export const storiesIntentOptions: LocalizeIntentThemeType[] = [
  'localize',
  'default',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
];

export const storiesColorOptions = Object.keys(localizeLightTheme.colors).map((key) => key);

export const storiesFontOptions = Object.keys(localizeLightTheme.fonts).map((key) => key);

export const storiesAlignItemsOptions: Property.AlignItems[] = [
  '-moz-initial',
  'inherit',
  'initial',
  'revert',
  'unset',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'self-end',
  'self-start',
  'start',
  'baseline',
  'normal',
  'stretch',
];

export const storiesJustifyContentOptions: Property.JustifyContent[] = [
  '-moz-initial',
  'inherit',
  'initial',
  'revert',
  'unset',
  'space-around',
  'space-between',
  'space-evenly',
  'stretch',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'start',
  'left',
  'normal',
  'right',
];

export const storiesFlexDirectionOptions: Property.FlexDirection[] = [
  '-moz-initial',
  'inherit',
  'initial',
  'revert',
  'unset',
  'column',
  'column-reverse',
  'row',
  'row-reverse',
];
