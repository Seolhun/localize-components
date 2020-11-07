import { AlignItemsProperty, FlexDirectionProperty, JustifyContentProperty } from 'csstype';

import { LocalizeSize } from '../../../packages/styled-types';
import { localizeLightTheme } from '../../../packages/styled-types';

export const storiesSizeOptions: LocalizeSize[] = ['xl', 'lg', 'md', 'sm', 'xs'];

export const storiesAlignItemsOptions: AlignItemsProperty[] = [
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

export const storiesJustifyContentOptions: JustifyContentProperty[] = [
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

export const storiesFlexDirectionOptions: FlexDirectionProperty[] = [
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

export const storiesColorOptions = Object.keys(localizeLightTheme.colors).map((key) => key);

export const storiesFontOptions = Object.keys(localizeLightTheme.fonts).map((key) => key);
