export const DarkenColor = {
  BLACK: 'black',
  GRAY: 'gray,',
  PURPLE: 'purple',
};

export const LightenColor = {
  WHITE: 'white',
  YELLOW: 'yellow,',
  SKY: 'sky',
};

export const Color = {
  BASIC: 'basic',
  DANGER: 'danger',
  INFO: 'info',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  TRANSPARENT: 'transparent',
  ...DarkenColor,
  ...LightenColor,
};

export type ColorType =
  | 'basic'
  | 'danger'
  | 'info'
  | 'primary'
  | 'success'
  | 'warning'
  | 'black'
  | 'gray,'
  | 'purple'
  | 'white'
  | 'yellow,'
  | 'sky';

export default Color;
