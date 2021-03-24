import { LocalizeScale } from '../LocalizeScale';

export const getLocalizePaddingScaleBy = (scale?: LocalizeScale) => {
  switch (scale) {
    case 'xl': {
      return '1.4rem 1.6rem';
    }
    case 'lg': {
      return '1.2rem 1.4rem';
    }
    case 'sm': {
      return '0.6rem 0.8rem';
    }
    case 'xs': {
      return '0.5rem 0.6rem';
    }
    // MD
    default: {
      return '0.8rem 1rem';
    }
  }
};
