import {
  Position,
  PositionType,
} from '@seolhun/localize-components-styled-types';

export const getPositionStyle = (position: PositionType) => {
  const DEFAULT_MARGIN = 10;

  switch (position) {
    case Position.TC: {
      return {
        top: `${DEFAULT_MARGIN}px`,
        left: 0,
        right: 0,
        margin: '0 auto',
      };
    }
    case Position.TL: {
      return {
        top: `${DEFAULT_MARGIN}px`,
        left: `${DEFAULT_MARGIN}px`,
        bottom: 'auto',
        right: 'auto',
      };
    }
    case Position.TR: {
      return {
        top: `${DEFAULT_MARGIN}px`,
        right: `${DEFAULT_MARGIN}px`,
        bottom: 'auto',
        left: 'auto',
      };
    }
    case Position.LEFT: {
      return {
        top: 0,
        bottom: 0,
        left: `${DEFAULT_MARGIN}px`,
        marginLeft: 0,
      };
    }
    case Position.RIGHT: {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: `${DEFAULT_MARGIN}px`,
        marginRight: 0,
      };
    }
    case Position.BC: {
      return {
        bottom: `${DEFAULT_MARGIN}px`,
        left: 0,
        right: 0,
        margin: '0 auto',
      };
    }
    case Position.BL: {
      return {
        top: 'auto',
        bottom: `${DEFAULT_MARGIN}px`,
        left: `${DEFAULT_MARGIN}px`,
        right: 'auto',
      };
    }
    case Position.BR: {
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
