import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeThemeProps,
  LocalizeProps,
  LocalizeSize,
} from '@seolhun/localize-components-styled-types';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

interface LocalizeButtonProps extends LocalizeProps, ButtonProps {
  size?: LocalizeSize;
  /**
   * Set this to change LocalizeButton font-size
   * @default 12
   */
  fontSize?: number;
}

const StyledLocalizeButton = styled.button<
  LocalizeButtonProps,
  LocalizeThemeProps
>(({ fontSize = 12, size = 'md', theme }) => {
  const getStyleBySize = () => {
    switch (size) {
      case 'xl':
        return '1.2rem 2rem';
      case 'lg':
        return '1.1rem 1.8rem';
      case 'md':
        return '1rem 1.6rem';
      case 'sm':
        return '0.9rem 1.4rem';
      default:
        return '0.8rem 1.2rem';
    }
  };

  return {
    display: 'inline-block',
    height: 'auto',
    padding: getStyleBySize(),
    backgroundColor: theme.colors.primary01,
    border: `1px solid transparent`,
    borderRadius: '6px',

    color: theme.fontColors.inner,
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
      color: theme.fontColors.primary,
    },

    '&:disabled': {
      backgroundColor: theme.colors.disabled,
      color: theme.fontColors.disabled,
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
    className={classnames('__Localize__LocalizeButton', className)}
    type="button"
  >
    {children}
  </StyledLocalizeButton>
);

export { LocalizeButton, LocalizeButtonProps };

export default LocalizeButton;
