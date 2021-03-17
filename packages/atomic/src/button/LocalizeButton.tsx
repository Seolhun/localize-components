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
type LocalizeButtonVariantType = 'solid' | 'outline';
interface LocalizeLocalProps extends LocalizeProps {
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
}

type ExtentionProps = ButtonProps & LocalizeLocalProps;

export interface LocalizeButtonProps extends ExtentionProps {
  /**
   * Set this to change rounded border-radius
   * @default true
   */
  rounded?: boolean;
}

function getLocalizeButtonVariantStyle(
  theme: LocalizeThemeProps,
  variant: LocalizeButtonVariantType,
  localizedColor: LocalizeStyleResponseType,
) {
  const { primaryColor, neutralColor, fontColor } = localizedColor;
  switch (variant) {
    case 'outline': {
      return {
        color: primaryColor,
        backgroundColor: theme.colors.transparent,
        border: `1px solid ${primaryColor}`,

        '&:hover, &:active': {
          color: fontColor,
          backgroundColor: primaryColor,
          border: `1px solid ${neutralColor}`,
        },
      };
    }
    default: {
      return {
        color: fontColor,
        backgroundColor: primaryColor,
        border: `1px solid ${neutralColor}`,

        '&:hover, &:active': {
          color: fontColor,
          backgroundColor: darken(0.1, primaryColor),
          border: `1px solid ${darken(0.1, neutralColor)}`,
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
      primaryColor: 'default',
      neutralColor: 'transparent',
      fontColor: 'inversed1',
      inversedColor: 'inversed10',
    },
    rounded = true,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor } = localizedColor;
    return {
      ...getLocalizeButtonVariantStyle(theme, variant, localizedColor),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: theme.rtl ? 'row-reverse' : 'row',

      padding: getLocalizePaddingSizeBy(size),
      borderRadius: rounded ? '6px' : '0',
      textDecoration: 'none',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
      cursor: 'pointer',
      wordBreak: 'break-word',

      '&:not(:disabled):not(:read-only):active, &:not(:disabled):not(:read-only):hover': {
        backgroundColor: darken(0.1, primaryColor),
        borderColor: darken(0.1, neutralColor),
      },
      '&:disabled': {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,
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
