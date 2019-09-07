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

export const LocalizeThemes = {
  ...DarkenTheme,
  ...LightenTheme,
};

export type LocalizeThemesType =
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

export interface LocalizeBaseStyledProps {
  /**
   * Set this to change Localize Style className
   * @default '''
   */
  className?: string;
  /**
   * Set this to change Localize Style mainColor
   * @default LocalizeTheme.primaryColor = royal_blue
   */
  mainColor?: LocalizeThemesType;
  /**
   * Set this to change Localize Style subColor
   * @default LocalizeTheme.secondaryColor
   */
  subColor?: LocalizeThemesType;
  /**
   * Set this to change Localize Style css
   * @default {}
   */
  css?: {};
}

export interface LocalizeStyledProps extends LocalizeBaseStyledProps {
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
}
