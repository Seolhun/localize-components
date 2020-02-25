import { fonts, ThemeFontsProps } from './fonts';

export interface LocalizeThemeProps {
  type: 'light' | 'dark';
  colors: {
    primary01: string;
    primary02: string;
    primaryBackground01: string;
    primaryBackground02: string;
    primaryBackground03: string;
    uiColor01: string; // === Background Color
    uiColor02: string;
    uiColor03: string;
    uiColor04: string;
    uiColor05: string;
    uiColor06: string;
    uiColor07: string;
    uiColor08: string; // === Text Color
    error: string;
  };
  fonts: ThemeFontsProps;
  layout: {
    backgroundColor: string;
    textColor: string;
  };
  input: {
    border: string;
    activeBorder: string;
    background: string;
  };
}

export const lightColorScheme: LocalizeThemeProps['colors'] = {
  primary01: '#3A6FFE',
  primary02: '#74A3FC',
  primaryBackground01: '#F3F6FF',
  primaryBackground02: '#F0F6F7',
  primaryBackground03: '#CCD9FF',
  uiColor01: '#FFFFFF',
  uiColor02: '#F9F9F9',
  uiColor03: '#F0F0F0',
  uiColor04: '#EEEEEE',
  uiColor05: '#DDDDDD',
  uiColor06: '#999999',
  uiColor07: '#5A5A5A',
  uiColor08: '#000000',
  error: '#FF1C1C',
};

export const darkColorScheme: LocalizeThemeProps['colors'] = {
  primary01: '#386BF8',
  primary02: '#5B87FF',
  primaryBackground01: '#1B2030',
  primaryBackground02: '#1C262C',
  primaryBackground03: '#2D3C6B',
  uiColor01: '#101114',
  uiColor02: '#24262A',
  uiColor03: '#34363A',
  uiColor04: '#43454B',
  uiColor05: '#5A5D63',
  uiColor06: '#B2B9C7',
  uiColor07: '#D3D6DB',
  uiColor08: '#FFFFFF',
  error: '#FF4444',
};

export const lightTheme: LocalizeThemeProps = {
  type: 'light',
  colors: lightColorScheme,
  layout: {
    backgroundColor: lightColorScheme.uiColor01,
    textColor: lightColorScheme.uiColor08,
  },
  fonts,
  input: {
    border: lightColorScheme.uiColor03,
    activeBorder: lightColorScheme.primary02,
    background: lightColorScheme.uiColor02,
  },
};

export const darkTheme: LocalizeThemeProps = {
  type: 'dark',
  colors: darkColorScheme,
  layout: {
    backgroundColor: darkColorScheme.uiColor01,
    textColor: darkColorScheme.uiColor08,
  },
  fonts,
  input: {
    border: darkColorScheme.uiColor03,
    activeBorder: darkColorScheme.primary02,
    background: darkColorScheme.uiColor02,
  },
};
