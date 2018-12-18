/**
 * Language Utils
 */
import {
  getLanguageByLocale,
} from './utils/languages/LanguageUtils';

/**
 * Navigator Utils
 */
import {
  BROWSERS,
  detectBrowser,
} from './utils/navigators/BrowserUtils';

/**
 * Styles Utils
 */
// Align
import {
  getAlignStyle,
} from './utils/styles/AlignUtils';
// InlineStyle
import {
  buildAndGetInlineStyle,
  getLightenDarkenColor,
  hexToRgba,
} from './utils/styles/InlineStyleUtils';
// Position
import {
  getBottomPositionStyle,
  getPositionStyle,
} from './utils/styles/PositionUtils';

// Theme
import {
  getThemeStyle,
  getThemeStyleKey,
} from './utils/styles/ThemeUtils';

export {
  // Languages
  getLanguageByLocale,
  // Navigators
  BROWSERS,
  detectBrowser,
  // Styles
  getAlignStyle,
  hexToRgba,
  getLightenDarkenColor,
  buildAndGetInlineStyle,
  getPositionStyle,
  getBottomPositionStyle,
  getThemeStyle,
  getThemeStyleKey,
};

export default {
  // Languages
  getLanguageByLocale,
  // Navigators
  BROWSERS,
  detectBrowser,
  // Styles
  getAlignStyle,
  buildAndGetInlineStyle,
  getPositionStyle,
  getBottomPositionStyle,
  getThemeStyle,
  getThemeStyleKey,
};
