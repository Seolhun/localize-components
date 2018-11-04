export const LocalizeDarkenColor = {
  BLACK: 'black',
  GRAY: 'gray,',
  PURPLE: 'purple',
};

export const LocalizeLightenColor = {
  WHITE: 'white',
  YELLOW: 'yellow,',
  SKY: 'sky',
};

export const LocalizeColor = {
  BASIC: 'basic',
  DANGER: 'danger',
  INFO: 'info',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  TRANSPARENT: 'transparent',
  ...LocalizeDarkenColor,
  ...LocalizeLightenColor,
};

export type LocalizeColorType =
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

export default LocalizeColor;
