import React from 'react';
import { lighten } from 'polished';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps, LocalizeProps, LocalizeSize } from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Button';
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
type ExtentionProps = LocalizeProps & ButtonProps;

export interface LocalizeButtonProps extends ExtentionProps {
  size?: LocalizeSize;

  /**
   * @default undefined
   */
  borderRadius?: string;
}

const getPaddingBySize = (size?: LocalizeSize) => {
  switch (size) {
    case 'xl': {
      return '1.4rem 2rem';
    }
    case 'lg': {
      return '1.2rem 1.8rem';
    }
    case 'md': {
      return '1rem 1.4rem';
    }
    case 'sm': {
      return '0.8rem 1rem';
    }
    default: {
      return '0.6rem 0.8rem';
    }
  }
};

const StyledLocalizeButton = styled.button<LocalizeButtonProps, LocalizeThemeProps>(
  ({ theme, size = 'md', fontColor = 'neutral1', bgColor = 'primary', bdColor, borderRadius }) => {
    const color = theme.colors[fontColor];
    const backgroundColor = theme.colors[bgColor];
    const borderColor = theme.colors[bdColor || bgColor];

    return {
      display: 'flex',
      height: 'auto',
      color,
      backgroundColor,
      padding: getPaddingBySize(size),
      border: `1px solid ${borderColor}`,
      borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
      cursor: 'pointer',

      '&:active, &:hover': {
        backgroundColor: lighten(0.1, backgroundColor),
        borderColor: theme.colors.primary,
      },
      '&:read-only, &:disabled': {
        backgroundColor: theme.colors.neutral4,
        color: theme.colors.neutral1,
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },
    };
  },
);

const LocalizeButton = React.forwardRef<HTMLButtonElement, LocalizeButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <StyledLocalizeButton {...props} ref={ref} className={classnames(DEFAULT_CLASSNAME, className)}>
        {children}
      </StyledLocalizeButton>
    );
  },
);

export { LocalizeButton };
export default LocalizeButton;
