import { LocalizeThemesType, LocalizeThemes } from "../types/styles";

export interface ILocalizeTheme {
  primaryColor: LocalizeThemesType;
  secondaryColor: LocalizeThemesType;
  background: LocalizeThemesType;
  border: {
    color: string;
    radius: string;
    shadow: string;
  },
  grid: {
    gutter: string;
  };
  row: {
    gutter: string;
  };
}

export const LocalizeTheme: ILocalizeTheme = {
  primaryColor: 'primary',
  secondaryColor: 'white',

  background: 'white',

  border: {
    color: `${LocalizeThemes.grey}`,
    radius: '4px',
    shadow: `0px 2px 1px -1px ${LocalizeThemes.light_grey}, 0px 1px 1px 0px ${LocalizeThemes.light_grey}, 0px 1px 3px 0px ${LocalizeThemes.light_grey}`,
  },
  grid: {
    gutter: '0.5rem',
  },
  row: {
    gutter: '-0.525rem',
  },
};
