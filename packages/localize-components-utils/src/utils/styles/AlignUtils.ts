import {
  Align,
  AlignType,
} from '@seolhun/localize-components-types';

const LocalStyles = require('./LocalStyles.css');

export const getAlignStyle = (
  align: AlignType,
  isFlex = true,
  styles = LocalStyles,
) => {
  switch (align.toLowerCase()) {
    case Align.CENTER: {
      if (isFlex) {
        return styles[`flex-align-${Align.CENTER}`];
      }
      return styles[`align-${Align.CENTER}`];
    }
    case Align.RIGHT: {
      if (isFlex) {
        return styles[`flex-align-${Align.RIGHT}`];
      }
      return styles[`align-${Align.RIGHT}`];
    }
    default: {
      if (isFlex) {
        return styles[`flex-align-${Align.LEFT}`];
      }
      return styles[`align-${Align.LEFT}`];
    }
  }
};

export default {
  getAlignStyle,
};
