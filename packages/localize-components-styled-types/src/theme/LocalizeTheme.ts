import { LocalizeThemesType, LocalizeThemes } from '../types';
import { LocalizeThemeProps, lightTheme } from './theme';

export interface ILocalizeThemeGridGutter {
  top?: string;
  right: string;
  left: string;
  bottom?: string;
}

export interface ILocalizeTheme {
  localized: LocalizeThemeProps;
  primaryColor: LocalizeThemesType;
  secondaryColor: LocalizeThemesType;
  clickableColor: LocalizeThemesType;
  background: LocalizeThemesType;
  border: {
    color: LocalizeThemesType;
    radius: string;
    shadow: string;
  };
  grid: {
    containerGutter: {
      right: string;
      left: string;
    };
    rowGutter: {
      top: string;
      right: string;
      left: string;
    };
    columnGutter: {
      top: string;
      right: string;
      left: string;
      bottom: string;
    };
  };
  fonts: {
    color: {
      highlightColor: LocalizeThemesType;
      primaryColor: LocalizeThemesType;
      secondaryColor: LocalizeThemesType;
    };
    size: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      p: string;
      big: string;
      medium: string;
      small: string;
    };
  };
}

export const LocalizeTheme: ILocalizeTheme = {
  localized: lightTheme,
  primaryColor: 'royalblue',
  secondaryColor: 'white',
  clickableColor: 'info',
  background: 'white',
  border: {
    color: `${LocalizeThemes.grey}`,
    radius: '6px',
    shadow: `0px 2px 1px -1px ${LocalizeThemes.lightgrey}, 0px 1px 1px 0px ${LocalizeThemes.lightgrey}, 0px 1px 3px 0px ${LocalizeThemes.lightgrey}`,
  },
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
  fonts: {
    color: {
      highlightColor: 'royalblue',
      primaryColor: '#282c35',
      secondaryColor: '#282c35',
    },
    size: {
      h1: '2.4rem',
      h2: '2.2rem',
      h3: '2.0rem',
      h4: '1.8rem',
      h5: '1.6rem',
      h6: '1.4rem',
      p: '1.2rem',
      big: '2.7rem',
      medium: '1.5rem',
      small: '1.0rem',
    },
  },
};
