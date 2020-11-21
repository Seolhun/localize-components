import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { darken } from 'polished';

import {
  getLocalizeIntentAndColor,
  getLocalizeSizeBy,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeSize,
  LocalizeStyleResponseType,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Button';
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
type ExtentionProps = LocalizeProps & ButtonProps;
type LocalizeButtonVariantType = 'solid' | 'outline';

export interface LocalizeButtonProps extends ExtentionProps {
  /**
   * Set this to change font color
   * @default md
   */
  size?: LocalizeSize;

  /**
   * Set this to change variant
   * @default solid
   */
  variant?: LocalizeButtonVariantType;

  /**
   * Set this to change variant
   * @default default
   */
  intent?: LocalizeIntentThemeType;

  /**
   * Set this to change rounded border-radius
   */
  rounded?: boolean;
}

function getLocalizeButtonStyle(
  _theme: LocalizeThemeProps,
  variant: LocalizeButtonVariantType,
  localizeColors: LocalizeStyleResponseType,
) {
  const { backgroundColor, borderColor, color } = localizeColors;
  switch (variant) {
    case 'outline': {
      return {
        color: backgroundColor,
        backgroundColor: borderColor,
        border: `1px solid ${backgroundColor}`,

        '&:hover, &:active': {
          color: darken(0.1, backgroundColor),
          backgroundColor: borderColor,
          border: `1px solid ${darken(0.1, backgroundColor)}`,
        },
      };
    }
    default: {
      return {
        color,
        backgroundColor,
        border: `1px solid ${borderColor}`,

        '&:hover, &:active': {
          color,
          backgroundColor: darken(0.1, backgroundColor),
          border: `1px solid ${darken(0.1, borderColor)}`,
        },
      };
    }
  }
}

const StyledLocalizeButton = styled.button<LocalizeButtonProps, LocalizeThemeProps>(
  ({
    theme,
    size = 'md',
    variant = 'solid',
    intent = 'default',
    rounded,
    localize = {
      bgColor: 'primary',
      bdColor: 'transparent',
      fontColor: 'conversion1',
    },
  }) => {
    const localizeColor = getLocalizeIntentAndColor(theme, intent, localize);
    const { backgroundColor, borderColor } = localizeColor;
    return {
      ...getLocalizeButtonStyle(theme, variant, localizeColor),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      maxWidth: '150px',
      padding: getLocalizeSizeBy(size),
      borderRadius: rounded ? '6px' : '0',
      textDecoration: 'none',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
      cursor: 'pointer',
      wordBreak: 'break-word',

      '&:not(:disabled):not(:read-only):active, &:not(:disabled):not(:read-only):hover': {
        backgroundColor: darken(0.1, backgroundColor),
        borderColor: darken(0.1, borderColor),
      },
      '&:disabled': {
        backgroundColor: theme.colors.neutral4,
        borderColor: theme.colors.neutral5,
        color: theme.colors.neutral8,
        cursor: 'not-allowed',
      },
    };
  },
);

const LocalizeButton = React.forwardRef<HTMLButtonElement, LocalizeButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <StyledLocalizeButton {...props} ref={ref} className={classnames(CLASSNAME, className)}>
        {children}
      </StyledLocalizeButton>
    );
  },
);

export { LocalizeButton };
export default LocalizeButton;
