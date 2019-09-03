import { ThemesType } from '../types/styles/Theme';

export interface IThemeConfig {
  primaryColor: ThemesType;
  secondaryColor: ThemesType;

  background: ThemesType;

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

  grid: {
    gutter: '0.5rem',
  },
  row: {
    gutter: '0 -0.525rem -0.5rem -0.525rem',
  },
};
