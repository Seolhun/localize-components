import { Size, Position } from '../styles';
import {
  fonts,
  lightFontsColors,
  darkFontsColors,
  ThemeFontsProps,
  ThemeFontColorProps,
} from './LocalizeFonts';
import { LocalizeThemeGridProps } from './LocalizeGrid';

export interface LocalizeBaseStyledProps {
  /**
   * Set this to change LocalizeBaseStyledProps className
   * @default '''
   */
  className?: string;

  /**
   * Set this to change LocalizeStyledProps backgroundColor
   */
  bgColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change LocalizeStyledProps color
   */
  fontColor?: keyof ThemeFontColorProps;

  /**
   * Set this to change LocalizeStyledProps subColor
   * @default undefined
   */
  zIndex?: number;
}

export interface LocalizeStyledProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change LocalizeStyledProps position
   * @default 'center'
   */
  position?: Position;
  /**
   * Set this to change LocalizeStyledProps size
   * @default medium
   */
  size?: Size;
}

export interface LocalizeThemeProps {
  type: 'light' | 'dark';
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

export const lightThemeColors: LocalizeThemeProps['colors'] = {
  primary01: '#1247D7',
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
  disabled: '#DDDDDD',
};

export const darkThemeColors: LocalizeThemeProps['colors'] = {
  primary01: '#3160DE',
  primary02: '#0A32A0',
  primaryBackground01: '#1B2030',
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
  disabled: '#DDDDDD',
};

export const lightTheme: LocalizeThemeProps = {
  type: 'light',
  colors: lightThemeColors,
  layout: {
    backgroundColor: lightThemeColors.uiColor01,
    fontColor: lightThemeColors.uiColor08,
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

export const darkTheme: LocalizeThemeProps = {
  type: 'dark',
  colors: darkThemeColors,
  layout: {
    backgroundColor: darkThemeColors.uiColor01,
    fontColor: darkThemeColors.uiColor08,
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
