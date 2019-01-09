
export enum DarkenTheme {
  basic = '#d1d5da',
  black = '#2a2a2a',
  danger = '#E32929',
  gray = '#323334',
  primary = '#0069d9',
  purple = '#5f42ff',
  royal_blue = '#4169FF',
  success = '#28a745',
  warning = '#ebad1a',
}

export enum LightenTheme {
  info = '#369cc7',
  light_gray = '#979797',
  sky = '#87CEEB',
  white = '#fff',
  yellow = '#FFFF00',
}

export type ThemesType =
  | 'basic'
  | 'black'
  | 'danger'
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
  | LightenTheme;

export const Themes = {
  ...DarkenTheme,
  ...LightenTheme,
};

export default {
  DarkenTheme,
  LightenTheme,
  Themes,
};