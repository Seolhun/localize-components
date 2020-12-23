import { LocalizeIntentThemeType, LocalizeStyleProps, LocalizeThemeProps } from '../LocalizeTheme';

import { getLocalizeColor, LocalizeStyleResponseType } from './getLocalizeColor';

export function getLocalizeIntentColor(
  theme: LocalizeThemeProps,
  intent: LocalizeIntentThemeType,
  localize: LocalizeStyleProps,
): LocalizeStyleResponseType {
  const localizeColor = getLocalizeColor(theme, localize);
  if (intent === 'localize' && localize) {
    return localizeColor;
  }
  const { backgroundColor, borderColor, innerColor, color } = localizeColor;
  switch (intent) {
    case 'primary': {
      return {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.conversion1,
        innerColor: theme.colors.conversion1,
        color: theme.colors.conversion10,
      };
    }
    case 'secondary': {
      return {
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.conversion1,
        innerColor: theme.colors.conversion1,
        color: theme.colors.conversion10,
      };
    }
    case 'info': {
      return {
        backgroundColor: theme.colors.info,
        borderColor: theme.colors.conversion1,
        innerColor: theme.colors.conversion1,
        color: theme.colors.conversion10,
      };
    }
    case 'success': {
      return {
        backgroundColor: theme.colors.success,
        borderColor: theme.colors.conversion1,
        innerColor: theme.colors.conversion1,
        color: theme.colors.conversion10,
      };
    }
    case 'warning': {
      return {
        backgroundColor: theme.colors.warning,
        borderColor: theme.colors.conversion1,
        innerColor: theme.colors.conversion1,
        color: theme.colors.conversion10,
      };
    }
    case 'error': {
      return {
        backgroundColor: theme.colors.error,
        borderColor: theme.colors.conversion1,
        innerColor: theme.colors.conversion1,
        color: theme.colors.conversion10,
      };
    }
    default: {
      return {
        backgroundColor: backgroundColor || theme.colors.default,
        borderColor: borderColor || theme.colors.conversion1,
        innerColor: innerColor || theme.colors.conversion1,
        color: color || theme.colors.conversion10,
      };
    }
  }
}
