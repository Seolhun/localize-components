import { ThemesType } from '../types/styles/Theme';

export interface ThemeConfigProps {
  MAIN_THEME: ThemesType;
  SUB_THEME: ThemesType;
}

const ThemeConfig: ThemeConfigProps = {
  MAIN_THEME: 'ROYAL_BLUE',
  SUB_THEME: 'GRAY',
};

export {
  ThemeConfig,
};

export default {
  ThemeConfig,
};
