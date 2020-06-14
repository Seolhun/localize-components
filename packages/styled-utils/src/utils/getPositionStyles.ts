import { LocalizePosition } from '@seolhun/localize-components-styled-types';

export const getPositionStyles = (position: LocalizePosition) => {
  const DEFAULT_GAP = 10;

  switch (position) {
    case 'top-center': {
      return {
        top: `${DEFAULT_GAP}px`,
        left: 0,
        right: 0,
        margin: '0 auto',
      };
    }
    case 'top-left': {
      return {
        top: `${DEFAULT_GAP}px`,
        left: `${DEFAULT_GAP}px`,
        bottom: 'auto',
        right: 'auto',
      };
    }
    case 'top-right': {
      return {
        top: `${DEFAULT_GAP}px`,
        right: `${DEFAULT_GAP}px`,
        bottom: 'auto',
        left: 'auto',
      };
    }
    case 'left': {
      return {
        top: 0,
        bottom: 0,
        left: `${DEFAULT_GAP}px`,
        marginLeft: 0,
      };
    }
    case 'right': {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: `${DEFAULT_GAP}px`,
        marginRight: 0,
      };
    }
    case 'bottom-center': {
      return {
        bottom: `${DEFAULT_GAP}px`,
        left: 0,
        right: 0,
        margin: '0 auto',
      };
    }
    case 'bottom-left': {
      return {
        top: 'auto',
        bottom: `${DEFAULT_GAP}px`,
        left: `${DEFAULT_GAP}px`,
        right: 'auto',
      };
    }
    case 'bottom-right': {
      return {
        top: 'auto',
        bottom: `${DEFAULT_GAP}px`,
        left: 'auto',
        right: `${DEFAULT_GAP}px`,
      };
    }

    default: {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
      };
    }
  }
};
