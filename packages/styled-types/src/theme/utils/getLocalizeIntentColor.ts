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
  const { backgroundColor, borderColor, color, inversedColor } = localizeColor;
  switch (intent) {
    case 'primary': {
      return {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.transparent,
        color: theme.colors.inversed1,
        inversedColor: theme.colors.inversed10,
      };
    }
    case 'secondary': {
      return {
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.transparent,
        color: theme.colors.inversed1,
        inversedColor: theme.colors.inversed10,
      };
    }
    case 'info': {
      return {
        backgroundColor: theme.colors.info,
        borderColor: theme.colors.transparent,
        color: theme.colors.inversed1,
        inversedColor: theme.colors.inversed10,
      };
    }
    case 'success': {
      return {
        backgroundColor: theme.colors.success,
        borderColor: theme.colors.transparent,
        color: theme.colors.inversed1,
        inversedColor: theme.colors.inversed10,
      };
    }
    case 'warning': {
      return {
        backgroundColor: theme.colors.warning,
        borderColor: theme.colors.transparent,
        color: theme.colors.inversed1,
        inversedColor: theme.colors.inversed10,
      };
    }
    case 'error': {
      return {
        backgroundColor: theme.colors.error,
        borderColor: theme.colors.transparent,
        color: theme.colors.inversed1,
        inversedColor: theme.colors.inversed10,
      };
    }
    default: {
      return {
        backgroundColor,
        borderColor,
        color,
        inversedColor,
      };
    }
  }
}
