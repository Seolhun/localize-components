import {
  InlineStyleHandler,
  InlineStyleState,
} from '@airbloc/hermes-types';

export const hexToRgba = (hex: string) => {
  if (hex[0] === '#') {
    const replacedHex = hex.replace('#', '');
    if (replacedHex.length === 6) {
      const r = parseInt(replacedHex.substring(0, 2), 16);
      const g = parseInt(replacedHex.substring(2, 4), 16);
      const b = parseInt(replacedHex.substring(4, 6), 16);
      return `rgb(${r}, ${g}, ${b})`;
    }
    const rd = replacedHex.substring(0, 1) + replacedHex.substring(0, 1);
    const gd = replacedHex.substring(1, 2) + replacedHex.substring(1, 2);
    const bd = replacedHex.substring(2, 3) + replacedHex.substring(2, 3);
    const r = parseInt(rd, 16);
    const g = parseInt(gd, 16);
    const b = parseInt(bd, 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return hex;
};

export const getLightenDarkenColor: (
  color: string,
  amount: number,
) => string = (color, amount) => {
  let usePound = false;
  if (color[0] === '#') {
      color = color.slice(1);
      usePound = true;
  }
  const num = parseInt(color, 16);

  let r = (num >> 16) + amount;
  if (r > 255) {
    r = 255;
  } else if  (r < 0) {
    r = 0;
  }

  let b = ((num >> 8) & 0x00FF) + amount;
  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  let g = (num & 0x0000FF) + amount;
  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

export const buildAndGetInlineStyle = (
  state: InlineStyleState,
  handler: InlineStyleHandler,
) => {
  if (handler) {
    return handler(state);
  }
  return {};
};
