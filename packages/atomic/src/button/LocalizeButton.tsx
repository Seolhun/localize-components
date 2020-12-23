import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { darken } from 'polished';

import {
  getLocalizeIntentColor,
  getLocalizePaddingSizeBy,
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
   * Set this to change intent color
   * @default default
   */
  intent?: LocalizeIntentThemeType;

  /**
   * Set this to change rounded border-radius
   */
  rounded?: boolean;
}

function getLocalizeButtonVariantStyle(
  _theme: LocalizeThemeProps,
  variant: LocalizeButtonVariantType,
  localizedColor: LocalizeStyleResponseType,
) {
  const { backgroundColor, borderColor, innerColor } = localizedColor;
  switch (variant) {
    case 'outline': {
      return {
        color: backgroundColor,
        backgroundColor: borderColor,
        border: `1px solid ${backgroundColor}`,

        '&:hover, &:active': {
          color: innerColor,
          backgroundColor,
          border: `1px solid ${borderColor}`,
        },
      };
    }
    default: {
      return {
        color: innerColor,
        backgroundColor,
        border: `1px solid ${borderColor}`,

        '&:hover, &:active': {
          color: innerColor,
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
    localize = {
      bgColor: 'default',
      bdColor: 'conversion1',
      innerFontColor: 'conversion1',
      fontColor: 'conversion10',
    },
    rounded,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { backgroundColor, borderColor } = localizedColor;
    return {
      ...getLocalizeButtonVariantStyle(theme, variant, localizedColor),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: theme.rtl ? 'row' : 'row-reverse',
      height: 'auto',
      maxWidth: '12rem',
      minWidth: '5rem',
      padding: getLocalizePaddingSizeBy(size),
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
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.disabled,
        color: theme.colors.neutral8,
        cursor: 'auto',
      },
    };
  },
);

const LocalizeButton = React.forwardRef<HTMLButtonElement, LocalizeButtonProps>(
  ({ children, className, size = 'md', variant = 'solid', intent = 'default', ...props }, ref) => {
    return (
      <StyledLocalizeButton
        {...props}
        ref={ref}
        className={classnames(CLASSNAME, className)}
        size={size}
        variant={variant}
        intent={intent}
      >
        {children}
      </StyledLocalizeButton>
    );
  },
);

export { LocalizeButton };
export default LocalizeButton;
