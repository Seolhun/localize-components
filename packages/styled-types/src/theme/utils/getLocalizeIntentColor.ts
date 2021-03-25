import { LocalizeIntentThemeType, LocalizeStyleProps, LocalizeThemeProps } from '../LocalizeTheme';

import { getLocalizeColor, LocalizeStyleResponseType } from './getLocalizeColor';

export function getLocalizeIntentColor(
  theme: LocalizeThemeProps,
  intent: LocalizeIntentThemeType,
  localize: LocalizeStyleProps,
): LocalizeStyleResponseType {
  const localizedColor = getLocalizeColor(theme, localize);
  if (intent === 'localize' && localize) {
    return localizedColor;
  }

  switch (intent) {
    case 'primary': {
      return {
        primaryColor: theme.colors.primary,
        neutralColor: localizedColor.neutralColor,
        fontColor: localizedColor.fontColor,
        inversedFontColor: localizedColor.inversedFontColor,
      };
    }
    case 'secondary': {
      return {
        primaryColor: theme.colors.secondary,
        neutralColor: localizedColor.neutralColor,
        fontColor: localizedColor.fontColor,
        inversedFontColor: localizedColor.inversedFontColor,
      };
    }
    case 'info': {
      return {
        primaryColor: theme.colors.info,
        neutralColor: localizedColor.neutralColor,
        fontColor: localizedColor.fontColor,
        inversedFontColor: localizedColor.inversedFontColor,
      };
    }
    case 'success': {
      return {
        primaryColor: theme.colors.success,
        neutralColor: localizedColor.neutralColor,
        fontColor: localizedColor.fontColor,
        inversedFontColor: localizedColor.inversedFontColor,
      };
    }
    case 'warning': {
      return {
        primaryColor: theme.colors.warning,
        neutralColor: localizedColor.neutralColor,
        fontColor: localizedColor.fontColor,
        inversedFontColor: localizedColor.inversedFontColor,
      };
    }
    case 'error': {
      return {
        primaryColor: theme.colors.error,
        neutralColor: localizedColor.neutralColor,
        fontColor: localizedColor.fontColor,
        inversedFontColor: localizedColor.inversedFontColor,
      };
    }
    default: {
      return {
        primaryColor: localizedColor.primaryColor,
        neutralColor: localizedColor.neutralColor,
        fontColor: localizedColor.fontColor,
        inversedFontColor: localizedColor.inversedFontColor,
      };
    }
  }
}
