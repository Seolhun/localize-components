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

  const isLightMode = theme.type === 'LIGHT';
  const fontColor = isLightMode ? theme.colors.inversed1 : theme.colors.inversed10;
  const inversedColor = isLightMode ? theme.colors.inversed10 : theme.colors.inversed1;

  switch (intent) {
    case 'primary': {
      return {
        primaryColor: theme.colors.primary,
        neutralColor: theme.colors.transparent,
        fontColor: fontColor,
        inversedFontColor: inversedColor,
      };
    }
    case 'secondary': {
      return {
        primaryColor: theme.colors.secondary,
        neutralColor: theme.colors.transparent,
        fontColor: fontColor,
        inversedFontColor: inversedColor,
      };
    }
    case 'info': {
      return {
        primaryColor: theme.colors.info,
        neutralColor: theme.colors.transparent,
        fontColor: fontColor,
        inversedFontColor: inversedColor,
      };
    }
    case 'success': {
      return {
        primaryColor: theme.colors.success,
        neutralColor: theme.colors.transparent,
        fontColor: fontColor,
        inversedFontColor: inversedColor,
      };
    }
    case 'warning': {
      return {
        primaryColor: theme.colors.warning,
        neutralColor: theme.colors.transparent,
        fontColor: fontColor,
        inversedFontColor: inversedColor,
      };
    }
    case 'error': {
      return {
        primaryColor: theme.colors.error,
        neutralColor: theme.colors.transparent,
        fontColor: fontColor,
        inversedFontColor: inversedColor,
      };
    }
    default: {
      return {
        primaryColor: localizedColor.primaryColor,
        neutralColor: theme.colors.transparent,
        fontColor: fontColor,
        inversedFontColor: inversedColor,
      };
    }
  }
}
