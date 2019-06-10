import { Position, PositionType } from '@seolhun/localize-components-styled-types';

export const getPositionStyle = (position: PositionType) => {
  switch (position) {
    case Position.TC: {
      return {
        top: 0,
        left: 0,
        right: 0,
        margin: '0 auto',
      }
    }
    case Position.TL: {
      return {
        top: 0,
        left: '10px',
        bottom: 'auto',
        right: 'auto',
      }
    }
    case Position.TR: {
      return {
        top: 0,
        right: '10px',
        bottom: 'auto',
        left: 'auto',
      }
    }
    case Position.LEFT: {
      return {
        top: 0,
        bottom: 0,
        left: '10px',
        marginLeft: 0,
      }
    }
    case Position.RIGHT: {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: '10px',
        marginRight: 0,
      }
    }
    case Position.BC: {
      return {
        bottom: '15px',
        left: 0,
        right: 0,
        margin: '0 auto',
      };
    }
    case Position.BL: {
      return {
        top: 'auto',
        bottom: '15px',
        left: '10px',
        right: 'auto',
      }
    }
    case Position.BR: {
      return {
        top: 'auto',
        bottom: '15px',
        left: 'auto',
        right: '10px',
      }
    }
    default: {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
      }
    }
  }
}
