import { LocalizeScale } from '../LocalizeScale';

export const getLocalizeScaleBy = (scale?: LocalizeScale): number => {
  switch (scale) {
    case 'xl': {
      return 1.8;
    }
    case 'lg': {
      return 1.6;
    }
    case 'md': {
      return 1.2;
    }
    case 'sm': {
      return 1;
    }
    case 'xs': {
      return 0.8;
    }
    // MD
    default: {
      return 1.2;
    }
  }
};
