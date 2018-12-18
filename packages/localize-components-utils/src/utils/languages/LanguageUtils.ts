import { Locale, LocaleType } from '@seolhun/localize-components-types';

import en from './en';
import ko from './ko';

export interface Languages {
  ko: any;
  en: any;
}

export const LANGUAGES: Languages = {
  ko,
  en,
};

const getForceMatchedLocaleValue = (locale: LocaleType) => {
  if (locale.startsWith(Locale.KO)) {
    return Locale.KO;
  }
  if (locale.startsWith(Locale.EN)) {
    return Locale.EN;
  }
  return Locale.KO;
};

// eslint-disable-next-line no-underscore-dangle
const getValueFromObject = (locale: LocaleType, keyName: string) => {
  const convertedLocale = getForceMatchedLocaleValue(locale);
  const LANGUAGE = LANGUAGES[convertedLocale];
  const keys = keyName.split('.');
  const value = keys.reduce((acc, key, idx) => {
    if (idx === 0) {
      return LANGUAGE[key];
    }
    if (!acc) {
      return LANGUAGE.UNKNOWN;
    }
    return acc[key];
  }, {});
  if (!value) {
    return LANGUAGE.UNKNOWN;
  }
  return value;
};

export const getLanguageByLocale = (locale: LocaleType) => (keyName) => getValueFromObject(locale, keyName);
