import { ThemesType } from '../types/styles/Theme';

export interface ThemeConfigProps {
  MAIN_THEME: ThemesType;
  SUB_THEME: ThemesType;
}

const ThemeConfig: ThemeConfigProps = {
  MAIN_THEME: 'primary',
  SUB_THEME: 'white',
};

export {
  ThemeConfig,
};

export default {
  ThemeConfig,
};
