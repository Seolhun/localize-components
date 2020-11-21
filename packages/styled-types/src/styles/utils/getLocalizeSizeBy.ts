import { LocalizeSize } from '../LocalizeSize';

export const getLocalizeSizeBy = (size?: LocalizeSize) => {
  switch (size) {
    case 'xl': {
      return '1.4rem 1.6rem';
    }
    case 'lg': {
      return '1.2rem 1.4rem';
    }
    case 'md': {
      return '0.8rem 1rem';
    }
    case 'sm': {
      return '0.6rem 0.8rem';
    }
    case 'xs': {
      return '0.6rem 0.8rem';
    }
    // MD
    default: {
      return '0.8rem 1rem';
    }
  }
};
