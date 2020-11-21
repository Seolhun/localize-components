import React from 'react';
import { lighten } from 'polished';
import styled from '@emotion/styled';
import classnames from 'classnames';

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
  theme: LocalizeThemeProps,
  variant: LocalizeButtonVariantType,
  localizeColors: LocalizeStyleResponseType,
) {
  const { backgroundColor, borderColor, color } = localizeColors;
  switch (variant) {
    case 'outline': {
      return {
        color: theme.colors.conversion10,
        backgroundColor: borderColor,
        border: `1px solid ${backgroundColor}`,
      }
    }
    default: {
      return {
        color,
        backgroundColor,
        border: `1px solid ${borderColor}`,
      }
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
      fontColor: 'conversion10',
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
      padding: getLocalizeSizeBy(size),
      borderRadius: rounded ? '6px' : '0',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
      cursor: 'pointer',

      '&:not(:disabled):not(:read-only):active, &:not(:disabled):not(:read-only):hover': {
        backgroundColor: lighten(0.1, backgroundColor),
        borderColor: lighten(0.1, borderColor),
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
      <StyledLocalizeButton
        {...props}
        ref={ref}
        className={classnames(CLASSNAME, className)}
      >
        {children}
      </StyledLocalizeButton>
    );
  },
);

export { LocalizeButton };
export default LocalizeButton;
