import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { lighten } from 'polished';

import {
  getLocalizeIntentAndColor,
  getLocalizeSizeBy,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeSize,
  LocalizeStyleResponseType,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Tag';
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;
type ExtentionProps = LocalizeProps & SpanProps;
type LocalizeButtonVariantType = 'solid' | 'outline';

export interface LocalizeTagProps extends ExtentionProps {
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

const StyledLocalizeTagWrapper = styled.div<LocalizeTagProps, LocalizeThemeProps>(
  ({
    theme,
    size = 'md',
    variant = 'solid',
    intent = 'default',
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
      backgroundColor,
      padding: getLocalizeSizeBy(size),
      borderRadius: '24px',
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

const StyledLocalizeTagContainer = styled.span<LocalizeTagProps, LocalizeThemeProps>(({ size }) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: getLocalizeSizeBy(size),
  };
});

const LocalizeTag: React.FC<LocalizeTagProps> = ({ children, className, size, ...props }) => {
  return (
    <StyledLocalizeTagWrapper {...props} className={classnames(CLASSNAME, className)}>
      <StyledLocalizeTagContainer size={size}>{children}</StyledLocalizeTagContainer>
    </StyledLocalizeTagWrapper>
  );
};

export { LocalizeTag };
export default LocalizeTag;
