import { LocalizeSize } from '@seolhun/localize-components-styled-types';

const getSizePaddingStyles = (size: LocalizeSize) => {
  switch (size) {
    case 'xl': {
      return '1.2rem 2rem';
    }
    case 'lg': {
      return '1.1rem 1.8rem';
    }
    case 'md': {
      return '1rem 1.6rem';
    }
    case 'sm': {
      return '0.9rem 1.4rem';
    }
    case 'xs': {
      return '0.8rem 1.2rem';
    }
    default: {
      return '1rem 1.6rem';
    }
  }
};

export { getSizePaddingStyles };
export default getSizePaddingStyles;
