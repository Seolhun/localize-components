export type ColorType =
  | 'basic'
  | 'danger'
  | 'info'
  | 'primary'
  | 'success'
  | 'warning'
  // Darken
  | 'black'
  | 'gray,'
  | 'purple'
  // Lighten
  | 'white'
  | 'yellow,'
  | 'sky';

const COLOR_LIST = {
  basic: '#d1d5da',
  danger: '#dc3545',
  info: '#369cc7',
  primary: '#0069d9',
  success: '#28a745',
  warning: '#ebad1a',
  transparent: 'transparent',
  // Darken
  black: '#2a2a2a',
  gray: '#e1e4e8',
  purple: '#5f42ff',
  // Lighten
  white: '#fff',
  yellow: 'yellow',
  sky: 'skyblue',
};

export const DarkenColor = {
  black: { main: COLOR_LIST.black, sub: COLOR_LIST.white },
  gray: { main: COLOR_LIST.gray, sub: COLOR_LIST.white },
  purple: { main: COLOR_LIST.purple, sub: COLOR_LIST.white },
};

export const LightenColor = {
  white: { main: COLOR_LIST.white, sub: COLOR_LIST.black },
  yellow: { main: COLOR_LIST.yellow, sub: COLOR_LIST.black },
  sky: { main: COLOR_LIST.sky, sub: COLOR_LIST.black },
};

export const Color = {
  transparent: { main: COLOR_LIST.transparent, sub: COLOR_LIST.black },
  basic: { main: COLOR_LIST.basic, sub: COLOR_LIST.white },
  danger: { main: COLOR_LIST.danger, sub: COLOR_LIST.white },
  info: { main: COLOR_LIST.info, sub: COLOR_LIST.white },
  primary: { main: COLOR_LIST.primary, sub: COLOR_LIST.white },
  success: { main: COLOR_LIST.success, sub: COLOR_LIST.white },
  warning: { main: COLOR_LIST.warning, sub: COLOR_LIST.white },
  ...DarkenColor,
  ...LightenColor,
};

export default Color;
