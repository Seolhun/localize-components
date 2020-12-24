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
  const { primaryColor, neutralColor, fontColor, inversedFontColor } = localizeColor;
  switch (intent) {
    case 'primary': {
      return {
        primaryColor: theme.colors.primary,
        neutralColor: theme.colors.transparent,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    case 'secondary': {
      return {
        primaryColor: theme.colors.secondary,
        neutralColor: theme.colors.transparent,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    case 'info': {
      return {
        primaryColor: theme.colors.info,
        neutralColor: theme.colors.transparent,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    case 'success': {
      return {
        primaryColor: theme.colors.success,
        neutralColor: theme.colors.transparent,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    case 'warning': {
      return {
        primaryColor: theme.colors.warning,
        neutralColor: theme.colors.transparent,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    case 'error': {
      return {
        primaryColor: theme.colors.error,
        neutralColor: theme.colors.transparent,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    default: {
      return {
        primaryColor,
        neutralColor,
        fontColor,
        inversedFontColor,
      };
    }
  }
}
