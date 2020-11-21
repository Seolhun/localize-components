import { LocalizeIntentThemeType, LocalizeStyleProps, LocalizeThemeProps } from '../LocalizeTheme';

export type LocalizeStyleResponseType = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

export const getLocalizeColor = (
  theme: LocalizeThemeProps,
  localize: LocalizeStyleProps,
): LocalizeStyleResponseType => {
  const { fontColor = 'conversion1', bgColor = 'primary', bdColor = 'transparent' } = localize;
  const color = theme.colors[fontColor];
  const backgroundColor = theme.colors[bgColor];
  const borderColor = theme.colors[bdColor || bgColor];
  return {
    color,
    backgroundColor,
    borderColor,
  };
};

export function getLocalizeIntentAndColor(
  theme: LocalizeThemeProps,
  intent: LocalizeIntentThemeType,
  localize?: LocalizeStyleProps,
): LocalizeStyleResponseType {
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
