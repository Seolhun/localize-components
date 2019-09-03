import { SizeType } from './Size';
import { PositionType } from './Position';

export enum DarkenTheme {
  basic = '#d1d5da',
  black = '#2a2a2a',
  danger = '#E32929',
  dark_grey = '#202021',
  grey = '#323334',
  primary = '#0069d9',
  purple = '#5f42ff',
  royal_blue = '#4169FF',
  success = '#28a745',
  warning = '#ebad1a',
}

export enum LightenTheme {
  info = '#369cc7',
  light_grey = '#cccc',
  sky = '#87CEEB',
  white = '#fff',
  yellow = '#FFFF00',
}

export type ThemesType =
  | 'basic'
  | 'black'
  | 'danger'
  | 'dark_grey'
  | 'grey'
  | 'info'
  | 'light_grey'
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
   * Set this to change Localize Style className
   * @default '''
   */
  className?: string;
  /**
   * Set this to change Localize Style mainColor
   * @default ThemeConfig.primaryColor = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Localize Style subColor
   * @default ThemeConfig.secondaryColor
   */
  subColor?: ThemesType;
  /**
   * Set this to change Localize Style position
   * @default medium
   */
  position?: PositionType;
  /**
   * Set this to change Localize Style size
   * @default medium
   */
  size?: SizeType;
  /**
   * Set this to change Localize Style subColor
   * @default 1000
   */
  zIndex?: number;
  /**
   * Set this to change Localize Style css
   * @default {}
   */
  css?: {};
}
