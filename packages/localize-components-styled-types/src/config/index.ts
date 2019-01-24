import { ThemesType } from '../types/styles/Theme';

export interface ThemeConfigProps {
  MAIN_THEME: ThemesType;
  SUB_THEME: ThemesType;
}

const ThemeConfig: ThemeConfigProps = {
  MAIN_THEME: 'royal_blue',
  SUB_THEME: 'white',
};

export {
  ThemeConfig,
};

export default {
  ThemeConfig,
};
