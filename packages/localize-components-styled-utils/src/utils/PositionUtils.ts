import { Position } from '@seolhun/localize-components-styled-types';

export const getPositionStyle = (position: Position) => {
  const DEFAULT_MARGIN = 10;

  switch (position) {
    case 'top-center': {
      return {
        top: `${DEFAULT_MARGIN}px`,
        left: 0,
        right: 0,
        margin: '0 auto',
      };
    }
    case 'top-left': {
      return {
        top: `${DEFAULT_MARGIN}px`,
        left: `${DEFAULT_MARGIN}px`,
        bottom: 'auto',
        right: 'auto',
      };
    }
    case 'top-right': {
      return {
        top: `${DEFAULT_MARGIN}px`,
        right: `${DEFAULT_MARGIN}px`,
        bottom: 'auto',
        left: 'auto',
      };
    }
    case 'left': {
      return {
        top: 0,
        bottom: 0,
        left: `${DEFAULT_MARGIN}px`,
        marginLeft: 0,
      };
    }
    case 'right': {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: `${DEFAULT_MARGIN}px`,
        marginRight: 0,
      };
    }
    case 'bottom-center': {
      return {
        bottom: `${DEFAULT_MARGIN}px`,
        left: 0,
        right: 0,
        margin: '0 auto',
      };
    }
    case 'bottom-left': {
      return {
        top: 'auto',
        bottom: `${DEFAULT_MARGIN}px`,
        left: `${DEFAULT_MARGIN}px`,
        right: 'auto',
      };
    }
    case 'bottom-right': {
      return {
        top: 'auto',
        bottom: `${DEFAULT_MARGIN}px`,
        left: 'auto',
        right: `${DEFAULT_MARGIN}px`,
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
