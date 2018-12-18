import {
  Position,
  PositionType,
} from '@airbloc/hermes-types';

const LocalStyles = require('./LocalStyles.css');

export const getPositionStyle = (
  postion: PositionType,
  styles = LocalStyles,
) => {
  switch (postion.toLowerCase()) {
    case Position.TL:
      return styles[Position.TL];
    case Position.TC:
      return styles[Position.TC];
    case Position.TR:
      return styles[Position.TR];
    case Position.LEFT:
      return styles[Position.LEFT];
    case Position.CENTER:
      return styles[Position.CENTER];
    case Position.RIGHT:
      return styles[Position.RIGHT];
    case Position.BL:
      return styles[Position.BL];
    case Position.BC:
      return styles[Position.BC];
    case Position.BR:
      return styles[Position.BR];
    default:
      return styles[Position.CENTER];
  }
};

export const getBottomPositionStyle = (
  postion: PositionType,
  styles = LocalStyles,
) => {
  switch (postion.toLowerCase()) {
    case Position.BL:
      return styles[Position.BL];
    case Position.BC:
      return styles[Position.BC];
    default:
      return styles[Position.BR];
  }
};

export default {
  getPositionStyle,
  getBottomPositionStyle,
};
