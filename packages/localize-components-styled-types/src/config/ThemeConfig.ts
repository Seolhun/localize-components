import { ThemesType } from '../types/styles/Theme';

export interface IThemeConfig {
  primaryColor: ThemesType;
  secondaryColor: ThemesType;
  background: ThemesType;
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

export const ThemeConfig: IThemeConfig = {
  primaryColor: 'primary',
  secondaryColor: 'white',

  background: 'white',

  border: {
    color: 'darkgrey',
    radius: '4px',
    shadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12)',
  },
  grid: {
    gutter: '0.5rem',
  },
  row: {
    gutter: '-0.525rem',
  },
};
