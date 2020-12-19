import { LocalizeIntentThemeType, LocalizeStyleProps, LocalizeThemeProps } from '../LocalizeTheme';
import { getLocalizeColor } from './getLocalizeColor';

export type GetLocalizeIntentAndColorResponseType = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

export function getLocalizeIntentColor(
  theme: LocalizeThemeProps,
  intent: LocalizeIntentThemeType,
  localize?: LocalizeStyleProps,
): GetLocalizeIntentAndColorResponseType {
  if (intent === 'localize' && localize) {
    return getLocalizeColor(theme, localize);
  }
  switch (intent) {
    case 'primary': {
      return {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.transparent,
        color: theme.colors.conversion1,
      };
    }
    case 'secondary': {
      return {
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.transparent,
        color: theme.colors.conversion1,
      };
    }
    case 'info': {
      return {
        backgroundColor: theme.colors.info,
        borderColor: theme.colors.transparent,
        color: theme.colors.conversion1,
      };
    }
    case 'success': {
      return {
        backgroundColor: theme.colors.success,
        borderColor: theme.colors.transparent,
        color: theme.colors.conversion1,
      };
    }
    case 'warning': {
      return {
        backgroundColor: theme.colors.warning,
        borderColor: theme.colors.transparent,
        color: theme.colors.conversion1,
      };
    }
    case 'error': {
      return {
        backgroundColor: theme.colors.error,
        borderColor: theme.colors.transparent,
        color: theme.colors.conversion1,
      };
    }
    default: {
      return {
        backgroundColor: theme.colors.default,
        borderColor: theme.colors.transparent,
        color: theme.colors.conversion1,
      };
    }
  }
}
