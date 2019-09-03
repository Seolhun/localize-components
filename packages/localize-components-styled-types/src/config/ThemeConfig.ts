import { ThemesType, Themes } from '../types/styles/Theme';

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
    color: `${Themes.grey}`,
    radius: '4px',
    shadow: `0px 2px 1px -1px ${Themes.light_grey}, 0px 1px 1px 0px ${Themes.light_grey}, 0px 1px 3px 0px ${Themes.light_grey}`,
  },
  grid: {
    gutter: '0.5rem',
  },
  row: {
    gutter: '-0.525rem',
  },
};
