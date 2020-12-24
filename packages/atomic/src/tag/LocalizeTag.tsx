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
   * Set this to change intent color
   * @default default
   */
  intent?: LocalizeIntentThemeType;
}

function getLocalizeTagStyle(
  theme: LocalizeThemeProps,
  variant: LocalizeButtonVariantType,
  localizedColor: LocalizeStyleResponseType,
) {
  const { backgroundColor, borderColor, inversedColor } = localizedColor;
  switch (variant) {
    case 'outline': {
      return {
        color: inversedColor,
        backgroundColor: theme.colors.inversed1,
        border: `1px solid ${backgroundColor}`,

        '&:hover, &:active': {
          color: inversedColor,
          backgroundColor,
          border: `1px solid ${borderColor}`,
        },
      };
    }
    default: {
      return {
        color: inversedColor,
        backgroundColor,
        border: `1px solid ${borderColor}`,

        '&:hover, &:active': {
          color: inversedColor,
          backgroundColor: darken(0.1, backgroundColor),
          border: `1px solid ${darken(0.1, borderColor)}`,
        },
      };
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
      bgColor: 'default',
      bdColor: 'transparent',
      fontColor: 'inversed1',
      inversedColor: 'inversed10',
    },
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { backgroundColor, borderColor } = localizedColor;
    return {
      ...getLocalizeTagStyle(theme, variant, localizedColor),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
      padding: getLocalizePaddingSizeBy(size),
      borderRadius: '24px',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
      cursor: 'pointer',

      '&:not(:disabled):not(:read-only):active, &:not(:disabled):not(:read-only):hover': {
        backgroundColor: darken(0.1, backgroundColor),
        borderColor: darken(0.1, borderColor),
      },
    };
  },
);

const StyledLocalizeTagContainer = styled.span<LocalizeTagProps, LocalizeThemeProps>(() => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
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
