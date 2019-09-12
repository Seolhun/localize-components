import { SizeType } from './Size';
import { PositionType } from './Position';

export enum DarkenThemeEnum {
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

export enum LightenThemeEnum {
  info = '#369cc7',
  light_grey = '#cccc',
  sky = '#87CEEB',
  white = '#fff',
  yellow = '#FFFF00',
  transparent = 'transparent',
}

export const LocalizeThemes = {
  ...DarkenThemeEnum,
  ...LightenThemeEnum,
};

export type LocalizeThemesType =
  | keyof typeof LightenThemeEnum
  | keyof typeof DarkenThemeEnum
  | DarkenThemeEnum
  | LightenThemeEnum
  | string;

export interface LocalizeThemeStyledProps {
  /**
   * Set this to change LocalizeThemeStyledProps mainColor
   * @default LocalizeTheme.primaryColor = royal_blue
   */
  mainColor?: LocalizeThemesType;
  /**
   * Set this to change LocalizeThemeStyledProps subColor
   * @default LocalizeTheme.secondaryColor
   */
  subColor?: LocalizeThemesType;

  /**
   * Set this to change LocalizeThemeStyledProps clickableColor
   * @default LocalizeTheme.clickableColor
   */
  clickableColor?: LocalizeThemesType;
}

export interface LocalizeBaseStyledProps extends LocalizeThemeStyledProps {
  /**
   * Set this to change LocalizeBaseStyledProps className
   * @default '''
   */
  className?: string;
  /**
   * Set this to change LocalizeStyledProps subColor
   * @default undefined
   */
  zIndex?: number;
  /**
   * Set this to change LocalizeBaseStyledProps css
   * @default {}
   */
  css?: {};
}

export interface LocalizeStyledProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change LocalizeStyledProps position
   * @default 'center'
   */
  position?: PositionType;
  /**
   * Set this to change LocalizeStyledProps size
   * @default medium
   */
  size?: SizeType;
}
