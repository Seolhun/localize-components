import { fonts, ThemeFontsProps } from './LocalizeFonts';
import { LocalizeThemeGridProps } from './LocalizeGrid';

enum LocalizeThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface LocalizeProps {
  /**
   * Set this to change className
   * @default '''
   */
  className?: string;

  /**
   * Set this to change zIndex
   * @default undefined
   */
  zIndex?: number;
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
  uiColor09: '#1B2030', // outerColor
  uiColor10: '#FFFFFF', // innerColor
  error: '#FF1C1C',
  disabled: '#DDDDDD',
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
  uiColor09: '#1B2030', // outerColor
  uiColor10: '#FFFFFF', // innerColor
  error: '#FF4444',
  disabled: '#DDDDDD',
};

const localizeLightTheme: LocalizeThemeProps = {
  type: 'LIGHT',
  colors: localizeLightThemeColors,
  layout: {
    backgroundColor: localizeLightThemeColors.uiColor01,
    fontColor: localizeLightThemeColors.uiColor08,
  },
  fonts,
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

const localizeDarkTheme: LocalizeThemeProps = {
  type: 'DARK',
  colors: localizeDarkThemeColors,
  layout: {
    backgroundColor: localizeDarkThemeColors.uiColor01,
    fontColor: localizeDarkThemeColors.uiColor08,
  },
  fonts,
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
  LocalizeProps,
  localizeDarkThemeColors,
  localizeLightThemeColors,
  localizeLightTheme,
  localizeDarkTheme,
  LocalizeThemeProps,
};
