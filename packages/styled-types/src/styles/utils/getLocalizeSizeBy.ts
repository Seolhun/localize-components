import { LocalizeSize } from '../LocalizeSize';

export const getLocalizeSizeBy = (size?: LocalizeSize) => {
  switch (size) {
    case 'xl': {
      return '1.6rem';
    }
    case 'lg': {
      return '1.4rem';
    }
    case 'md': {
      return '1rem';
    }
    case 'sm': {
      return '0.8rem';
    }
    case 'xs': {
      return '0.6rem';
    }
    // MD
    default: {
      return '1rem';
    }
  }
};
