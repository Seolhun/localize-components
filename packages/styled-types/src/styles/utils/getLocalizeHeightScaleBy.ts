import { LocalizeScale } from '../LocalizeScale';

export const getLocalizeHeightScaleBy = (scale?: LocalizeScale): number => {
  switch (scale) {
    case 'xl': {
      return 3;
    }
    case 'lg': {
      return 2.75;
    }
    case 'md': {
      return 2.5;
    }
    case 'sm': {
      return 2.25;
    }
    case 'xs': {
      return 2;
    }
    // MD
    default: {
      return 2.5;
    }
  }
};
