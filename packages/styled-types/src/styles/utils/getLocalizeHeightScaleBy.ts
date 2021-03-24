import { LocalizeScale } from '../LocalizeScale';

export const getLocalizeHeightScaleBy = (scale?: LocalizeScale): number => {
  switch (scale) {
    case 'xl': {
      return 2.75;
    }
    case 'lg': {
      return 2.5;
    }
    case 'md': {
      return 2.25;
    }
    case 'sm': {
      return 2;
    }
    case 'xs': {
      return 1.75;
    }
    // MD
    default: {
      return 2.25;
    }
  }
};
