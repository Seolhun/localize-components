import { LocalizeSize, LocalizeAlign, LocalizePosition } from '../styles';
import {
  fonts,
  lightFontsColors,
  darkFontsColors,
  ThemeFontsProps,
  ThemeFontColorProps,
} from './LocalizeFonts';
import { LocalizeThemeGridProps } from './LocalizeGrid';

interface LocalizeBaseStyledProps {
  /**
   * Set this to change className
   * @default '''
   */
  className?: string;

  /**
   * Set this to change position
   * @default undefined
   */
  position?: LocalizePosition;

  /**
   * Set this to change align
   * @default undefined
   */
  align?: LocalizeAlign;

  /**
   * Set this to change size
   * @default md
   */
  size?: LocalizeSize;

  /**
   * Set this to change subColor
   * @default undefined
   */
  zIndex?: number;
}

enum LocalizeThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface LocalizeThemeProps<T = keyof typeof LocalizeThemeType> {
  type: T;
  colors: {
    primary01: string;
    primary02: string;
    primaryBackground01: string;
    primaryBackground02: string;
    primaryBackground03: string;
    uiColor01: string;
    uiColor02: string;
    uiColor03: string;
    uiColor04: string;
    uiColor05: string;
    uiColor06: string;
    uiColor07: string;
    uiColor08: string;
    uiColor09: string;
    uiColor10: string;
    error: string;
    disabled: string;
  };
  layout: {
    backgroundColor: string;
    fontColor: string;
  };
  fonts: ThemeFontsProps;
  fontColors: ThemeFontColorProps;
  grid: LocalizeThemeGridProps;
}

export const LocalizeLightThemeColors: LocalizeThemeProps['colors'] = {
  primary01: '#0044ff',
  primary02: '#0A32A0',
  primaryBackground01: '#FEFFFF',
  primaryBackground02: '#F0F6F7',
  primaryBackground03: '#68A0E8',
  uiColor01: '#FFFFFF',
  uiColor02: '#F9F9F9',
  uiColor03: '#F0F0F0',
  uiColor04: '#EEEEEE',
  uiColor05: '#DDDDDD',
  uiColor06: '#999999',
  uiColor07: '#E3E3E3', // borderColor
  uiColor08: '#160B0B',
  uiColor09: '#1B2030', // outerColor
  uiColor10: '#FFFFFF', // innerColor

  error: '#FF1C1C',
  disabled: '#DDDDDD',
};

export const LocalizeDarkThemeColors: LocalizeThemeProps['colors'] = {
  primary01: '#0044ff',
  primary02: '#0A32A0',
  primaryBackground01: '#13161F',
  primaryBackground02: '#1C262C',
  primaryBackground03: '#2D3C6B',
  uiColor01: '#101114',
  uiColor02: '#24262A',
  uiColor03: '#34363A',
  uiColor04: '#43454B',
  uiColor05: '#5A5D63',
  uiColor06: '#B2B9C7',
  uiColor07: '#E6E6E6', // borderColor
  uiColor08: '#FFFFFF',
  uiColor09: '#1B2030', // outerColor
  uiColor10: '#FFFFFF', // innerColor
  error: '#FF4444',
  disabled: '#DDDDDD',
};

const LocalizeLightTheme: LocalizeThemeProps = {
  type: 'LIGHT',
  colors: LocalizeLightThemeColors,
  layout: {
    backgroundColor: LocalizeLightThemeColors.uiColor01,
    fontColor: LocalizeLightThemeColors.uiColor08,
  },
  fonts,
  fontColors: lightFontsColors,
  grid: {
    containerGutter: {
      right: '0',
      left: '0',
    },
    rowGutter: {
      top: '1rem',
      right: '0',
      left: '0',
    },
    columnGutter: {
      top: '0.75rem',
      right: '0.75rem',
      left: '0.75rem',
      bottom: '0.75rem',
    },
  },
};

const LocalizeDarkTheme: LocalizeThemeProps = {
  type: 'DARK',
  colors: LocalizeDarkThemeColors,
  layout: {
    backgroundColor: LocalizeDarkThemeColors.uiColor01,
    fontColor: LocalizeDarkThemeColors.uiColor08,
  },
  fonts,
  fontColors: darkFontsColors,
  grid: {
    containerGutter: {
      right: '0',
      left: '0',
    },
    rowGutter: {
      top: '1rem',
      right: '0',
      left: '0',
    },
    columnGutter: {
      top: '0.75rem',
      right: '0.75rem',
      left: '0.75rem',
      bottom: '0.75rem',
    },
  },
};

export {
  LocalizeBaseStyledProps,
  LocalizeLightTheme,
  LocalizeDarkTheme,
  LocalizeThemeProps,
};

export default LocalizeThemeProps;
