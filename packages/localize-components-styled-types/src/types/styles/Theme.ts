
export enum DarkenTheme {
  BASIC = '#d1d5da',
  BLACK = '#2a2a2a',
  DANGER = '#E32929',
  GRAY = '#323334',
  PRIMARY = '#0069d9',
  PURPLE = '#5f42ff',
  ROYAL_BLUE = '#4169FF',
  SUCCESS = '#28a745',
  WARNING = '#ebad1a',
}

export enum LightenTheme {
  INFO = '#369cc7',
  LIGHT_GRAY = '#979797',
  SKY = '#87CEEB',
  WHITE = '#fff',
  YELLOW = '#FFFF00',
}

export type ThemesType =
  | 'BASIC'
  | 'BLACK'
  | 'DANGER'
  | 'GRAY'
  | 'INFO'
  | 'LIGHT_GRAY'
  | 'PRIMARY'
  | 'PURPLE'
  | 'ROYAL_BLUE'
  | 'SKY'
  | 'SUCCESS'
  | 'WARNING'
  | 'WHITE'
  | 'YELLOW'
  | DarkenTheme
  | LightenTheme;

export const Themes = {
  ...DarkenTheme,
  ...LightenTheme,
};

export enum ThemeStyle {
  Background = 'background',
  Gradient = 'gradient',
  Outline = 'outline',
  Text = 'text',
}

export type ThemeStyleType =
  | ThemeStyle.Background
  | ThemeStyle.Gradient
  | ThemeStyle.Outline
  | ThemeStyle.Text;

export interface ThemeStyleOptions {
  themeType?: ThemeStyleType;
  useHover?: boolean;
}

export default {
  DarkenTheme,
  LightenTheme,
  Themes,
  ThemeStyle,
};
