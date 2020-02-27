import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeThemeProps,
  LocalizeStyledProps,
} from '@seolhun/localize-components-styled-types';

export interface LocalizeButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    LocalizeStyledProps {
  /**
   * Set this to change LocalizeButton font-size
   * @default 12
   */
  fontSize?: number;
}

const StyledLocalizeButton = styled.button<
  LocalizeButtonProps,
  LocalizeThemeProps
>(({ fontSize = 12, size = 'medium', theme }) => {
  const getStyleBySize = () => {
    switch (size) {
      case 'large':
        return '15px 30px';
      case 'medium':
        return '10px 25px';
      default:
        return '5px 20px';
    }
  };

  return {
    display: 'inline-block',
    borderRadius: '6px',
    border: '1px solid transparent',
    backgroundColor: theme.colors.primary01,
    height: 'auto',
    padding: getStyleBySize(),

    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s, border-color 0.3s',
    userSelect: 'none',

    color: theme.colors.uiColor08,
    fontSize: `${fontSize}px`,
    fontWeight: 500,
    textDecoration: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    '&:hover': {
      backgroundColor: theme.colors.primary02,
    },

    '&:disabled': {
      backgroundColor: theme.colors.uiColor07,
      color: theme.colors.uiColor08,
      cursor: 'not-allowed',
    },
  };
});

export const LocalizeButton: React.FC<LocalizeButtonProps> = ({
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

export default LocalizeButton;
