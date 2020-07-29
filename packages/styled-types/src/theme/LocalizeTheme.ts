import { LocalizeThemeFontsProps, localizeFonts } from './LocalizeFonts';
import { LocalizeThemeGridProps, localizeGrid } from './LocalizeGrid';

enum LocalizeThemeEnum {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface LocalizeProps {
  /**
   * Set this to change className
   * @default '''
   */
  className?: string;

  /**
   * Set this to change font color in theme
   * @default undefined
   */
  fontColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change background color in theme
   * @default undefined
   */
  bgColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change zIndex
   * @default undefined
   */
  zIndex?: number;
}

interface LocalizeThemeProps<K = keyof typeof LocalizeThemeEnum> {
  type: K;
  fonts: LocalizeThemeFontsProps;
  grid: LocalizeThemeGridProps;
  layout: {
    backgroundColor: string;
    fontColor: string;
  };
  colors: {
    /**
    * @name Primary
    */
    primary1: string;
    primary2: string;
    primary3: string;
    primary4: string;
    primary5: string;
    primary6: string;
    primary7: string;
    primary8: string;
    primary9: string;
    primary10: string;
    /**
    * @name Neutral
    */
    neutral1: string;
    neutral2: string;
    neutral3: string;
    neutral4: string;
    neutral5: string;
    neutral6: string;
    neutral7: string;
    neutral8: string;
    neutral9: string;
    neutral10: string;
    neutral11: string;
    neutral12: string;
    /**
     * @name Theme
     */
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    error: string;
  };
}

const localizeLightThemeColors: LocalizeThemeProps['colors'] = {
  primary1: '#e6f7ff',
  primary2: '#bae7ff',
  primary3: '#91d5ff',
  primary4: '#69c0ff',
  primary5: '#40a9ff',
  primary6: '#1890ff',
  primary7: '#096dd9',
  primary8: '#0050b3',
  primary9: '#003a8c',
  primary10: '#002766',
  /**
 * @name Neutral
 */
  neutral1: '#FFFFFF',
  neutral2: '#FAFAFA',
  neutral3: '#F5F5F5',
  neutral4: '#F0F0F0',
  neutral5: '#D9D9D9',
  neutral6: '#BFBFBF',
  neutral7: '#595959',
  neutral8: '#434343',
  neutral9: '#262626',
  neutral10: '#1F1F1F',
  neutral11: '#141414',
  neutral12: '#000000',
  /**
  * @name Theme
  */
  primary: '#1890ff',
  secondary: '#002766',
  success: '#52C41A',
  info: '#91D5FF',
  warning: '#FAAD14',
  error: '#F5222D',
};

const localizeDarkThemeColors: LocalizeThemeProps['colors'] = {
  primary1: '#e6f7ff',
  primary2: '#bae7ff',
  primary3: '#91d5ff',
  primary4: '#69c0ff',
  primary5: '#40a9ff',
  primary6: '#1890ff',
  primary7: '#096dd9',
  primary8: '#0050b3',
  primary9: '#003a8c',
  primary10: '#002766',
  /**
 * @name Neutral
 */
  neutral1: '#FFFFFF',
  neutral2: '#FAFAFA',
  neutral3: '#F5F5F5',
  neutral4: '#F0F0F0',
  neutral5: '#D9D9D9',
  neutral6: '#BFBFBF',
  neutral7: '#595959',
  neutral8: '#434343',
  neutral9: '#262626',
  neutral10: '#1F1F1F',
  neutral11: '#141414',
  neutral12: '#000000',
  /**
  * @name Theme
  */
  primary: '#177ddc',
  secondary: '#b7e3fa',
  success: '#52C41A',
  info: '#91D5FF',
  warning: '#FAAD14',
  error: '#F5222D',
};

const localizeLightTheme: LocalizeThemeProps = {
  type: 'LIGHT',
  fonts: localizeFonts,
  grid: localizeGrid,
  colors: localizeLightThemeColors,
  layout: {
    backgroundColor: '#FFFFFF',
    fontColor: localizeDarkThemeColors.neutral1,
  },
};

const localizeDarkTheme: LocalizeThemeProps = {
  type: 'DARK',
  fonts: localizeFonts,
  grid: localizeGrid,
  colors: localizeDarkThemeColors,
  layout: {
    backgroundColor: '#13161F',
    fontColor: localizeDarkThemeColors.neutral12,
  },
};

export {
  LocalizeProps,
  localizeDarkThemeColors,
  localizeLightThemeColors,
  localizeLightTheme,
  localizeDarkTheme,
  LocalizeThemeProps,
};
