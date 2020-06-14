import { localizeFonts, LocalizeFontsProps } from './LocalizeFonts';
import { LocalizeThemeGridProps } from './LocalizeGrid';

enum LocalizeThemeEnum {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface LocalizeProps {
  /**
   * Set this to change className
   * @default undefined
   */
  className?: string;

  /**
   * Set this to change font color in theme
   * @default undefined
   */
  fontKey?: keyof LocalizeFontsProps;

  /**
   * Set this to change font color in theme
   * @default undefined
   */
  fontColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change background color in theme
   * @default undefined
   */
  bgColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change zIndex
   * @default undefined
   */
  zIndex?: number;
}

interface LocalizeThemeProps<T = keyof typeof LocalizeThemeEnum> {
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
    error: string;
    lightenError: string;
    success: string;
    disabled: string;
    white: string;
    black: string;
  };
  fonts: LocalizeFontsProps;
  grid: LocalizeThemeGridProps;
}

const localizeLightThemeColors: LocalizeThemeProps['colors'] = {
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
  error: '#FF1C1C',
  lightenError: '#FFE8E7',
  success: '#23BF7B',
  disabled: '#DDDDDD',
  white: '#FFFFFF',
  black: '#000000',
};

const localizeDarkThemeColors: LocalizeThemeProps['colors'] = {
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
  error: '#FF4444',
  lightenError: '#3E1B1E',
  success: '#12C979',
  disabled: '#DDDDDD',
  white: '#FFFFFF',
  black: '#000000',
};

const localizeLightTheme: LocalizeThemeProps = {
  type: 'LIGHT',
  colors: localizeLightThemeColors,
  fonts: localizeFonts,
  grid: {
    containerGutter: {
      right: '0',
      left: '0',
    },
    rowGutter: {
      top: '0',
      right: '0',
      left: '0',
    },
    columnGutter: {
      top: '0',
      right: '0.8rem',
      left: '0.8rem',
      bottom: '1rem',
    },
  },
};

const localizeDarkTheme: LocalizeThemeProps = {
  type: 'DARK',
  colors: localizeDarkThemeColors,
  fonts: localizeFonts,
  grid: {
    containerGutter: {
      right: '0',
      left: '0',
    },
    rowGutter: {
      top: '0',
      right: '0',
      left: '0',
    },
    columnGutter: {
      top: '0',
      right: '0.8rem',
      left: '0.8rem',
      bottom: '1rem',
    },
  },
};

export {
  LocalizeProps,
  localizeDarkThemeColors,
  localizeLightThemeColors,
  localizeLightTheme,
  localizeDarkTheme,
  LocalizeThemeProps,
};
