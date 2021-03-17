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
type LocalizeTagVariantType = 'solid' | 'outline';

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
  variant?: LocalizeTagVariantType;

  /**
   * Set this to change intent color
   * @default default
   */
  intent?: LocalizeIntentThemeType;
}

type ExtentionProps = SpanProps & LocalizeLocalProps;

export interface LocalizeTagProps extends ExtentionProps {
  /**
   * Set this to change rounded border-radius
   * @default true
   */
  rounded?: boolean;
}

function getLocalizeTagStyle(
  theme: LocalizeThemeProps,
  variant: LocalizeTagVariantType,
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

const StyledLocalizeTagWrapper = styled.div<LocalizeTagProps, LocalizeThemeProps>(
  ({
    theme,
    size = 'md',
    variant = 'solid',
    intent = 'primary',
    localize = {
      primaryColor: 'primary',
      neutralColor: 'transparent',
      fontColor: 'inversed1',
      inversedColor: 'inversed10',
    },
    rounded = true,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor } = localizedColor;
    return {
      ...getLocalizeTagStyle(theme, variant, localizedColor),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: theme.rtl ? 'row-reverse' : 'row',

      padding: getLocalizePaddingSizeBy(size),
      borderRadius: rounded ? '24px' : '0',
      textDecoration: 'none',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
      cursor: 'pointer',
      wordBreak: 'break-word',
      whiteSpace: 'nowrap',

      '&:not(:disabled):not(:read-only):active, &:not(:disabled):not(:read-only):hover': {
        backgroundColor: darken(0.1, primaryColor),
        borderColor: darken(0.1, neutralColor),
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
