import { LocalizeSize } from '../LocalizeSize';

export const getLocalizeSizeBy = (size?: LocalizeSize) => {
  switch (size) {
    case 'xl': {
      return '1.8rem';
    }
    case 'lg': {
      return '1.6rem';
    }
    case 'md': {
      return '1.2rem';
    }
    case 'sm': {
      return '1rem';
    }
    case 'xs': {
      return '0.8rem';
    }
    // MD
    default: {
      return '1.2rem';
    }
  }
};
