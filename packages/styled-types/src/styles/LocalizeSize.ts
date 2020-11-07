export type LocalizeSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export const getLocalizeSizeBy = (size?: LocalizeSize) => {
  switch (size) {
    case 'xl': {
      return '1.4rem 2rem';
    }
    case 'lg': {
      return '1.2rem 1.8rem';
    }
    case 'md': {
      return '1rem 1.4rem';
    }
    case 'sm': {
      return '0.8rem 1rem';
    }
    default: {
      return '0.6rem 0.8rem';
    }
  }
};
