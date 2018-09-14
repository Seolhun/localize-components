const WHITE = '#fff';
const DARK_GRAY = 'darkgray';

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

export const DarkenColor = {
  black: { main: 'black', sub: WHITE },
  gray: { main: 'gray,', sub: WHITE },
  purple: { main: 'purple', sub: WHITE },
};

export const LightenColor = {
  white: { main: 'white', sub: WHITE },
  yellow: { main: 'yellow,', sub: WHITE },
  sky: { main: 'sky', sub: WHITE },
};

export const Color = {
  transparent: { main: 'transparent', sub: DARK_GRAY },
  basic: { main: 'basic', sub: WHITE },
  danger: { main: 'danger', sub: WHITE },
  info: { main: 'info', sub: WHITE },
  primary: { main: 'primary', sub: WHITE },
  success: { main: 'success', sub: WHITE },
  warning: { main: 'warning', sub: WHITE },
  ...DarkenColor,
  ...LightenColor,
};

export default Color;
