import { LocalizeScale } from '../LocalizeScale';

export const getLocalizeFontScaleBy = (scale?: LocalizeScale): number => {
  switch (scale) {
    case 'xl': {
      return 1.1;
    }
    case 'lg': {
      return 1;
    }
    case 'sm': {
      return 0.8;
    }
    case 'xs': {
      return 0.7;
    }
    // MD
    default: {
      return 0.9;
    }
  }
};
