import { LocalizeSize } from '../../../packages/styled-types';
import { localizeLightTheme } from '../../../packages/styled-types';

export const storiesSizeOptions: LocalizeSize[] = ['xl', 'lg', 'md', 'sm', 'xs'];

export const storiesColorOptions = Object.keys(localizeLightTheme.colors).map((key) => key);

export const storiesFontOptions = Object.keys(localizeLightTheme.fonts).map((key) => key);
