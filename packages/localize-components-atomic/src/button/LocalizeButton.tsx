import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeThemeProps,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
type LocalizeProps = LocalizeProps & ButtonProps;

interface LocalizeButtonProps extends LocalizeProps {
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
      case '':
        return '15px 30px';
      case 'medium':
        return '10px 25px';
      default:
        return '5px 20px';
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
