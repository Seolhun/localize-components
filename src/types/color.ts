const DarkenColor = {};

const LightenColor = {};

export const Color = {
  BASIC: 'basic',
  DANGER: 'danger',
  INFO: 'info',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DARKEN: {
    ...DarkenColor,
  },
  LIGHTEN: {
    ...LightenColor,
  },
};

export type ColorType =
  | 'basic'
  | 'danger'
  | 'info'
  | 'primary'
  | 'success'
  | 'warning';

export default Color;
