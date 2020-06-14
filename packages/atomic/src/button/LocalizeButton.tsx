import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

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

  /**
   * Set this to change LocalizeButton font-size
   * @default 12
   */
  fontSize?: number;
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
>(({ fontSize = 12, size = 'md', theme }) => {
  return {
    display: 'inline-block',
    height: 'auto',
    padding: getStyleBySize(size),
    backgroundColor: theme.colors.primary01,
    border: `1px solid transparent`,
    borderRadius: '6px',

    color: theme.colors.uiColor10,
    fontSize: `${fontSize}px`,
    fontWeight: 500,
    textDecoration: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
    userSelect: 'none',

    '&:hover': {
      border: `1px solid ${theme.colors.primary01}`,
      backgroundColor: theme.colors.uiColor10,
      color: theme.colors.primary01,
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
