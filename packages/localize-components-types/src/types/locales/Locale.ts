export enum Locale {
  KO = 'ko',
  KO_KR = 'ko-KR', // safari, firefox
  EN = 'en',
  EN_US = 'en-US',
}

export type LocaleType = string | Locale | 'ko' | 'ko-KR' | 'en' | 'en-US';

export default Locale;
