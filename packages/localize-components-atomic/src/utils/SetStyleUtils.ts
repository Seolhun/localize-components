import {
  LocalizeColor,
  LocalizePosition,
} from '../types';

const setColor = (styles, color: string, prefix = 'bg-color-') => {
  let styleColor = prefix;
  switch (color.toLowerCase()) {
    case LocalizeColor.SUCCESS:
      styleColor += LocalizeColor.SUCCESS;
      break;
    case LocalizeColor.PRIMARY:
      styleColor += LocalizeColor.PRIMARY;
      break;
    case LocalizeColor.INFO:
      styleColor += LocalizeColor.INFO;
      break;
    case LocalizeColor.WARNING:
      styleColor += LocalizeColor.WARNING;
      break;
    case LocalizeColor.DANGER:
      styleColor += LocalizeColor.DANGER;
      break;
    default:
      styleColor += LocalizeColor.BASIC;
      break;
  }
  return styles[`${styleColor}`];
};

const setPosition = (styles, postion: string) => {
  switch (postion.toLowerCase()) {
    case LocalizePosition.TL:
      return styles[LocalizePosition.TL];
    case LocalizePosition.TC:
      return styles[LocalizePosition.TC];
    case LocalizePosition.TR:
      return styles[LocalizePosition.TR];
    case LocalizePosition.LEFT:
      return styles[LocalizePosition.LEFT];
    case LocalizePosition.CENTER:
      return styles[LocalizePosition.CENTER];
    case LocalizePosition.RIGHT:
      return styles[LocalizePosition.RIGHT];
    case LocalizePosition.BL:
      return styles[LocalizePosition.BL];
    case LocalizePosition.BC:
      return styles[LocalizePosition.BC];
    case LocalizePosition.BR:
      return styles[LocalizePosition.BR];
    default:
      return styles[LocalizePosition.CENTER];
  }
};

export { setColor, setPosition };

export default {
  setColor,
  setPosition,
};
