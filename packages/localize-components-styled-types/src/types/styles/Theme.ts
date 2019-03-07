import { SizeType } from './Size';

export enum DarkenTheme {
  basic = '#d1d5da',
  black = '#2a2a2a',
  danger = '#E32929',
  dark_gray = '#202021',
  gray = '#323334',
  primary = '#0069d9',
  purple = '#5f42ff',
  royal_blue = '#4169FF',
  success = '#28a745',
  warning = '#ebad1a',
}

export enum LightenTheme {
  info = '#369cc7',
  light_gray = '#cccc',
  sky = '#87CEEB',
  white = '#fff',
  yellow = '#FFFF00',
}

export type ThemesType =
  | 'basic'
  | 'black'
  | 'danger'
  | 'dark_gray'
  | 'gray'
  | 'info'
  | 'light_gray'
  | 'primary'
  | 'purple'
  | 'royal_blue'
  | 'sky'
  | 'success'
  | 'warning'
  | 'white'
  | 'yellow'
  | DarkenTheme
  | LightenTheme
  | string;

export const Themes = {
  ...DarkenTheme,
  ...LightenTheme,
};

export interface StyledProps {
  /**
   * Set this to change Localize Style ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Localize Style ours subColor
   * @default ThemeConfig.SUB_THEME
   */
  subColor?: ThemesType;
  /**
   * Set this to change Localize Style ours size
   * @default medium
   */
  size?: SizeType;
  /**
   * Set this to change Localize Style ours subColor
   * @default 1000
   */
  zIndex?: number;
}

export default {
  DarkenTheme,
  LightenTheme,
  Themes,
};
