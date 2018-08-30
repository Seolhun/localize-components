import { Color, Position } from '../types';

const setColor = (styles, color: string, prefix = 'bg-color-') => {
  let styleColor = prefix;
  switch (color.toLowerCase()) {
    case Color.SUCCESS:
      styleColor += Color.SUCCESS;
      break;
    case Color.PRIMARY:
      styleColor += Color.PRIMARY;
      break;
    case Color.INFO:
      styleColor += Color.INFO;
      break;
    case Color.WARNING:
      styleColor += Color.WARNING;
      break;
    case Color.DANGER:
      styleColor += Color.DANGER;
      break;
    default:
      styleColor += Color.BASIC;
      break;
  }
  return styles[`${styleColor}`];
};

const setPosition = (styles, postion: string) => {
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

export { setColor, setPosition };

export default {
  setColor,
  setPosition,
};
