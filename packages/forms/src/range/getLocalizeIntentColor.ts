import {
  LocalizeIntentThemeType,
  LocalizeStyleProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

export function getLocalizeIntentColor(
  theme: LocalizeThemeProps,
  intent: LocalizeIntentThemeType,
  localize?: LocalizeStyleProps,
) {
  if (intent === 'localize' && localize) {
    const {
      primaryColor = 'primary',
      neutralColor = 'inversed4',
      fontColor = 'inversed1',
      inversedFontColor = 'inversed10',
    } = localize;
    return {
      primaryColor: theme.colors[primaryColor],
      neutralColor: theme.colors[neutralColor],
      fontColor: theme.colors[fontColor],
      inversedFontColor: theme.colors[inversedFontColor],
    };
  }

  switch (intent) {
    case 'primary': {
      return {
        primaryColor: theme.colors.primary,
        neutralColor: theme.colors.inversed4,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    case 'secondary': {
      return {
        primaryColor: theme.colors.secondary,
        neutralColor: theme.colors.inversed4,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    case 'info': {
      return {
        primaryColor: theme.colors.info,
        neutralColor: theme.colors.inversed4,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    case 'success': {
      return {
        primaryColor: theme.colors.success,
        neutralColor: theme.colors.inversed4,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    case 'warning': {
      return {
        primaryColor: theme.colors.warning,
        neutralColor: theme.colors.inversed4,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    case 'error': {
      return {
        primaryColor: theme.colors.error,
        neutralColor: theme.colors.inversed4,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
    default: {
      return {
        primaryColor: theme.colors.primary,
        neutralColor: theme.colors.inversed4,
        fontColor: theme.colors.inversed1,
        inversedFontColor: theme.colors.inversed10,
      };
    }
  }
}
