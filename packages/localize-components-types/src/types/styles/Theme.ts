export enum BrandTheme {
  // Brand Main
  BRAND_MAIN = 'main',
  BRAND_MAIN1 = 'main-1',
  BRAND_MAIN2 = 'main-2',
  // Brand Gray
  BRAND_GRAY = 'gray',
  BRAND_GRAY1 = 'gray-1',
  BRAND_GRAY2 = 'gray-2',
  BRAND_GRAY3 = 'gray-3',
  BRAND_GRAY4 = 'gray-4',
  BRAND_GRAY5 = 'gray-5',
  BRAND_GRAY6 = 'gray-6',
}

export enum DarkenTheme {
  BLACK = 'black',
  GRAY = 'gray',
  PURPLE = 'purple',
  ROYAL_BLUE = 'royalblue',
  // Theme
  BASIC = 'basic',
  DANGER = 'danger',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export enum LightenTheme {
  WHITE = 'white',
  YELLOW = 'yellow',
  SKY = 'sky',
  // Theme
  INFO = 'info',
}

export const Themes = {
  ...BrandTheme,
  ...DarkenTheme,
  ...LightenTheme,
};

export type ThemeType =
  | BrandTheme
  | DarkenTheme
  | LightenTheme
  | string;

export enum ThemeStyle {
  Background = 'background',
  Gradient = 'gradient',
  Outline = 'outline',
  Text = 'text',
}

export type ThemeStyleType =
  | ThemeStyle.Background
  | ThemeStyle.Gradient
  | ThemeStyle.Outline
  | ThemeStyle.Text;

export interface ThemeStyleOptions {
  themeType?: ThemeStyleType;
  useHover?: boolean;
}

export default {
  BrandTheme,
  DarkenTheme,
  LightenTheme,
  Themes,
  ThemeStyle,
};
