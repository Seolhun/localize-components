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
   * Set this to change background color
   * @default primary
   */
  bgColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change border color
   * @default transparent
   */
  bdColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change font color in theme
   * @default conversion1
   */
  fontColor?: keyof LocalizeThemeProps['colors'];
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
     * @name Red
     */
    red1: string;
    red2: string;
    red3: string;
    red4: string;
    red5: string;
    red6: string;
    red7: string;
    red8: string;
    red9: string;
    red10: string;
    /**
     * @name Volcano
     */
    volcano1: string;
    volcano2: string;
    volcano3: string;
    volcano4: string;
    volcano5: string;
    volcano6: string;
    volcano7: string;
    volcano8: string;
    volcano9: string;
    volcano10: string;
    /**
     * @name Orange
     */
    orange1: string;
    orange2: string;
    orange3: string;
    orange4: string;
    orange5: string;
    orange6: string;
    orange7: string;
    orange8: string;
    orange9: string;
    orange10: string;
    /**
     * @name Purple
     */
    purple1: string;
    purple2: string;
    purple3: string;
    purple4: string;
    purple5: string;
    purple6: string;
    purple7: string;
    purple8: string;
    purple9: string;
    purple10: string;
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
   * @name Red
   */
  red1: '#fff1f0',
  red2: '#ffccc7',
  red3: '#ffa39e',
  red4: '#ff7875',
  red5: '#ff4d4f',
  red6: '#f5222d',
  red7: '#cf1322',
  red8: '#a8071a',
  red9: '#820014',
  red10: '#5c0011',
  /**
   * @name Volcano
   */
  volcano1: '#fff2e8',
  volcano2: '#ffd8bf',
  volcano3: '#ffbb96',
  volcano4: '#ff9c6e',
  volcano5: '#ff7a45',
  volcano6: '#fa541c',
  volcano7: '#d4380d',
  volcano8: '#ad2102',
  volcano9: '#871400',
  volcano10: '#610b00',
  /**
   * @name Orange
   */
  orange1: '#fff7e6',
  orange2: '#ffe7ba',
  orange3: '#ffd591',
  orange4: '#ffc069',
  orange5: '#ffa940',
  orange6: '#fa8c16',
  orange7: '#d46b08',
  orange8: '#ad4e00',
  orange9: '#873800',
  orange10: '#612500',
  /**
   * @name Purple
   */
  purple1: '#f9f0ff',
  purple2: '#efdbff',
  purple3: '#d3adf7',
  purple4: '#b37feb',
  purple5: '#9254de',
  purple6: '#722ed1',
  purple7: '#531dab',
  purple8: '#391085',
  purple9: '#22075e',
  purple10: '#120338',
  /**
   * @name Theme
   */
  default: '#BFBFBF',
  primary: '#2f54eb',
  secondary: '#002766',
  success: '#6AB95C',
  info: '#1890FF',
  warning: '#FAAD14',
  error: '#F5862E',
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
   * @name Red
   */
  red1: '#fff1f0',
  red2: '#ffccc7',
  red3: '#ffa39e',
  red4: '#ff7875',
  red5: '#ff4d4f',
  red6: '#f5222d',
  red7: '#cf1322',
  red8: '#a8071a',
  red9: '#820014',
  red10: '#5c0011',
  /**
   * @name Volcano
   */
  volcano1: '#fff2e8',
  volcano2: '#ffd8bf',
  volcano3: '#ffbb96',
  volcano4: '#ff9c6e',
  volcano5: '#ff7a45',
  volcano6: '#fa541c',
  volcano7: '#d4380d',
  volcano8: '#ad2102',
  volcano9: '#871400',
  volcano10: '#610b00',
  /**
   * @name Orange
   */
  orange1: '#fff7e6',
  orange2: '#ffe7ba',
  orange3: '#ffd591',
  orange4: '#ffc069',
  orange5: '#ffa940',
  orange6: '#fa8c16',
  orange7: '#d46b08',
  orange8: '#ad4e00',
  orange9: '#873800',
  orange10: '#612500',
  /**
   * @name Purple
   */
  purple1: '#f9f0ff',
  purple2: '#efdbff',
  purple3: '#d3adf7',
  purple4: '#b37feb',
  purple5: '#9254de',
  purple6: '#722ed1',
  purple7: '#531dab',
  purple8: '#391085',
  purple9: '#22075e',
  purple10: '#120338',
  /**
   * @name Theme
   */
  default: '#BFBFBF',
  primary: '#2f54eb',
  secondary: '#002766',
  success: '#6AB95C',
  info: '#1890FF',
  warning: '#FAAD14',
  error: '#F5862E',
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
  fonts: localizeFonts,
  colors: localizeLightThemeColors,
  layout: {
    backgroundColor: '#ffffff',
    textColor: localizeDarkThemeColors.neutral1,
  },
};

export const localizeDarkTheme: LocalizeThemeProps = {
  type: 'DARK',
  fonts: localizeFonts,
  colors: localizeDarkThemeColors,
  layout: {
    backgroundColor: '#13161F',
    textColor: localizeDarkThemeColors.neutral12,
  },
};
