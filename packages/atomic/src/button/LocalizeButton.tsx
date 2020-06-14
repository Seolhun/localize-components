import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';
import { lighten } from 'polished';

import {
  LocalizeThemeProps,
  LocalizeProps,
  LocalizeSize,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Button';
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

interface LocalizeButtonProps extends LocalizeProps, ButtonProps {
  /**
   * Set this to change LocalizeButton size
   * @default md
   */
  size?: LocalizeSize;
}

const getStyleBySize = (size: LocalizeSize) => {
  switch (size) {
    case 'xl': {
      return '1.2rem 2rem';
    }
    case 'lg': {
      return '1.1rem 1.8rem';
    }
    case 'md': {
      return '1rem 1.6rem';
    }
    case 'sm': {
      return '0.9rem 1.4rem';
    }
    case 'xs': {
      return '0.8rem 1.2rem';
    }
    default: {
      return '1rem 1.6rem';
    }
  }
};

const StyledLocalizeButton = styled.button<
  LocalizeButtonProps,
  LocalizeThemeProps
>(({ theme, fontKey = 'normal', size = 'md', bgColor, fontColor }) => {
  const fonts = theme.fonts[fontKey];
  const mainColor = theme.colors[bgColor || 'primary01'];
  return {
    ...fonts,
    display: 'inline-block',
    padding: getStyleBySize(size),
    backgroundColor: mainColor,
    border: `1px solid transparent`,
    borderRadius: '6px',

    color: theme.colors[fontColor || 'white'],
    textDecoration: 'none',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
    userSelect: 'none',

    '&:hover': {
      border: `1px solid ${mainColor}`,
      backgroundColor: lighten(0.05, mainColor),
    },

    '&:disabled': {
      backgroundColor: theme.colors.disabled,
      color: theme.colors.disabled,
      cursor: 'not-allowed',
    },
  };
});

const LocalizeButton: React.FC<LocalizeButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <StyledLocalizeButton
    {...props}
    type="button"
    className={classnames(DEFAULT_CLASSNAME, className)}
  >
    {children}
  </StyledLocalizeButton>
);

export { LocalizeButton, LocalizeButtonProps };
export default LocalizeButton;
