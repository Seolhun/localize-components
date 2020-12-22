import { localizeFonts, LocalizeThemeFontsProps } from './LocalizeFonts';

export type LocalizeIntentThemeType =
  | 'localize'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error';

export enum LocalizeThemeEnum {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export interface LocalizeStyleProps {
  /**
   * Set this to change font color
   * @default conversion1
   */
  fontColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change background color
   * @default primary
   */
  bgColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change border color
   * @default transparent
   */
  bdColor?: keyof LocalizeThemeProps['colors'];
}

export interface LocalizeProps {
  /**
   * Set this to change localie styles
   */
  localize?: LocalizeStyleProps;

  /**
   * Set this to change className
   * @default ''
   */
  className?: string;

  /**
   * Set this to change zIndex
   * @default undefined
   */
  zIndex?: number;
}

export interface LocalizeThemeProps<K = keyof typeof LocalizeThemeEnum> {
  type: K;
  rtl: boolean;
  fonts: LocalizeThemeFontsProps;
  colors: {
    /**
     * @name Transparent
     */
    transparent: string;
    /**
     * @name Conversion
     * To change color based on theme type
     */
    conversion1: string;
    conversion2: string;
    conversion3: string;
    conversion4: string;
    conversion5: string;
    conversion6: string;
    conversion7: string;
    conversion8: string;
    conversion9: string;
    conversion10: string;
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
     * @name Secondary
     */
    secondary1: string;
    secondary2: string;
    secondary3: string;
    secondary4: string;
    secondary5: string;
    secondary6: string;
    secondary7: string;
    secondary8: string;
    secondary9: string;
    secondary10: string;
    /**
     * @name Success
     */
    success1: string;
    success2: string;
    success3: string;
    success4: string;
    success5: string;
    success6: string;
    success7: string;
    success8: string;
    success9: string;
    success10: string;
    /**
     * @name Info
     */
    info1: string;
    info2: string;
    info3: string;
    info4: string;
    info5: string;
    info6: string;
    info7: string;
    info8: string;
    info9: string;
    info10: string;
    /**
     * @name Warning
     */
    warning1: string;
    warning2: string;
    warning3: string;
    warning4: string;
    warning5: string;
    warning6: string;
    warning7: string;
    warning8: string;
    warning9: string;
    warning10: string;
    /**
     * @name Error
     */
    error1: string;
    error2: string;
    error3: string;
    error4: string;
    error5: string;
    error6: string;
    error7: string;
    error8: string;
    error9: string;
    error10: string;
    /**
     * @name Theme
     */
    default: string;
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    error: string;
    /**
     * @name State
     */
    readonly: string;
    disabled: string;
    /**
     * @name Socials
     */
    twitch: string;
    youtube: string;
    twitter: string;
    line: string;
    facebook: string;
    kakao: string;
    discord: string;
  };
  layout: {
    backgroundColor: string;
    textColor: string;
  };
}

const localizeLightThemeColors: LocalizeThemeProps['colors'] = {
  /**
   * @name Transparent
   */
  transparent: 'transparent',
  /**
   * @name Conversion
   * To change color based on theme type
   */
  conversion1: '#FFFFFF',
  conversion2: '#F5F5F5',
  conversion3: '#D9D9D9',
  conversion4: '#BFBFBF',
  conversion5: '#595959',
  conversion6: '#434343',
  conversion7: '#262626',
  conversion8: '#1F1F1F',
  conversion9: '#141414',
  conversion10: '#000000',
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
   * @name Primary
   */
  primary1: '#f0f5ff',
  primary2: '#d6e4ff',
  primary3: '#adc6ff',
  primary4: '#85a5ff',
  primary5: '#597ef7',
  primary6: '#2f54eb',
  primary7: '#1d39c4',
  primary8: '#10239e',
  primary9: '#061178',
  primary10: '#030852',
  /**
   * @name Secondary
   */
  secondary1: '#E4E6EC',
  secondary2: '#BCC2D3',
  secondary3: '#919AB5',
  secondary4: '#697598',
  secondary5: '#495885',
  secondary6: '#2A3E73',
  secondary7: '#24386C',
  secondary8: '#1C2F61',
  secondary9: '#142656',
  secondary10: '#09183F',
  /**
   * @name Success
   */
  success1: '#f6ffed',
  success2: '#d9f7be',
  success3: '#b7eb8f',
  success4: '#95de64',
  success5: '#73d13d',
  success6: '#52c41a',
  success7: '#389e0d',
  success8: '#237804',
  success9: '#135200',
  success10: '#092b00',
  /**
   * @name Info
   */
  info1: '#e6f7ff',
  info2: '#bae7ff',
  info3: '#91d5ff',
  info4: '#69c0ff',
  info5: '#40a9ff',
  info6: '#1890ff',
  info7: '#096dd9',
  info8: '#0050b3',
  info9: '#003a8c',
  info10: '#002766',
  /**
   * @name Warning
   */
  warning1: '#fff2e8',
  warning2: '#ffd8bf',
  warning3: '#ffbb96',
  warning4: '#ff9c6e',
  warning5: '#ff7a45',
  warning6: '#fa541c',
  warning7: '#d4380d',
  warning8: '#ad2102',
  warning9: '#871400',
  warning10: '#610b00',
  /**
   * @name Error
   */
  error1: '#fff1f0',
  error2: '#ffccc7',
  error3: '#ffa39e',
  error4: '#ff7875',
  error5: '#ff4d4f',
  error6: '#f5222d',
  error7: '#cf1322',
  error8: '#a8071a',
  error9: '#820014',
  error10: '#5c0011',
  /**
   * @name Theme
   */
  default: '#262626',
  primary: '#2f54eb',
  secondary: '#2A3E73',
  success: '#52c41a',
  info: '#1890ff',
  warning: '#fa541c',
  error: '#f5222d',
  /**
   * @name State
   */
  readonly: '#F5F5F5',
  disabled: '#F0F0F0',
  /**
   * @name Socials
   */
  twitch: '#9146ff',
  youtube: '#E62117',
  twitter: '#1da1f2',
  line: '#00b900',
  facebook: '#1877f2',
  kakao: '#3C1F1E',
  discord: '#8C9EFF',
};

const localizeDarkThemeColors: LocalizeThemeProps['colors'] = {
  /**
   * @name Transparent
   */
  transparent: 'transparent',
  /**
   * @name Conversion
   * To change color based on theme type
   */
  conversion1: '#FFFFFF',
  conversion2: '#F5F5F5',
  conversion3: '#D9D9D9',
  conversion4: '#BFBFBF',
  conversion5: '#595959',
  conversion6: '#434343',
  conversion7: '#262626',
  conversion8: '#1F1F1F',
  conversion9: '#141414',
  conversion10: '#000000',
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
   * @name Primary
   */
  primary1: '#f0f5ff',
  primary2: '#d6e4ff',
  primary3: '#adc6ff',
  primary4: '#85a5ff',
  primary5: '#597ef7',
  primary6: '#2f54eb',
  primary7: '#1d39c4',
  primary8: '#10239e',
  primary9: '#061178',
  primary10: '#030852',
  /**
   * @name Secondary
   */
  secondary1: '#E4E6EC',
  secondary2: '#BCC2D3',
  secondary3: '#919AB5',
  secondary4: '#697598',
  secondary5: '#495885',
  secondary6: '#2A3E73',
  secondary7: '#24386C',
  secondary8: '#1C2F61',
  secondary9: '#142656',
  secondary10: '#09183F',
  /**
   * @name Success
   */
  success1: '#f6ffed',
  success2: '#d9f7be',
  success3: '#b7eb8f',
  success4: '#95de64',
  success5: '#73d13d',
  success6: '#52c41a',
  success7: '#389e0d',
  success8: '#237804',
  success9: '#135200',
  success10: '#092b00',
  /**
   * @name Info
   */
  info1: '#e6f7ff',
  info2: '#bae7ff',
  info3: '#91d5ff',
  info4: '#69c0ff',
  info5: '#40a9ff',
  info6: '#1890ff',
  info7: '#096dd9',
  info8: '#0050b3',
  info9: '#003a8c',
  info10: '#002766',
  /**
   * @name Warning
   */
  warning1: '#fff2e8',
  warning2: '#ffd8bf',
  warning3: '#ffbb96',
  warning4: '#ff9c6e',
  warning5: '#ff7a45',
  warning6: '#fa541c',
  warning7: '#d4380d',
  warning8: '#ad2102',
  warning9: '#871400',
  warning10: '#610b00',
  /**
   * @name Error
   */
  error1: '#fff1f0',
  error2: '#ffccc7',
  error3: '#ffa39e',
  error4: '#ff7875',
  error5: '#ff4d4f',
  error6: '#f5222d',
  error7: '#cf1322',
  error8: '#a8071a',
  error9: '#820014',
  error10: '#5c0011',
  /**
   * @name Theme
   */
  default: '#262626',
  primary: '#2f54eb',
  secondary: '#2A3E73',
  success: '#52c41a',
  info: '#1890ff',
  warning: '#fa541c',
  error: '#f5222d',
  /**
   * @name State
   */
  readonly: '#F5F5F5',
  disabled: '#F0F0F0',
  /**
   * @name Socials
   */
  twitch: '#9146ff',
  youtube: '#E62117',
  twitter: '#1da1f2',
  line: '#00b900',
  facebook: '#1877f2',
  kakao: '#3C1F1E',
  discord: '#8C9EFF',
};

export const localizeLightTheme: LocalizeThemeProps = {
  type: 'LIGHT',
  rtl: true,
  fonts: localizeFonts,
  colors: localizeLightThemeColors,
  layout: {
    backgroundColor: '#ffffff',
    textColor: localizeDarkThemeColors.neutral1,
  },
};

export const localizeDarkTheme: LocalizeThemeProps = {
  type: 'DARK',
  rtl: true,
  fonts: localizeFonts,
  colors: localizeDarkThemeColors,
  layout: {
    backgroundColor: '#13161F',
    textColor: localizeDarkThemeColors.neutral12,
  },
};
