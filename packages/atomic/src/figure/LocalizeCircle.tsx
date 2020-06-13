import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeThemeProps,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';

export interface LocalizeCircleProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    LocalizeProps {
  /**
   * Set this to change LocalizeCircle onBlur
   * @default false
   */
  isClickable?: boolean;

  /**
   * Set this to change LocalizeCircle disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Set this to change Button font-size
   * @default 12
   */
  fontSize?: number;

  /**
   * Set this to change LocalizeCircle size
   * @default 50
   */
  size?: number;
}

const StyledLocalizeCircle = styled.span<
  LocalizeCircleProps,
  LocalizeThemeProps
>(({ isClickable, size = 50, fontSize = 12, theme }) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${size}px`,
    height: `${size}px`,

    borderRadius: '50%',
    border: `1px solid ${theme.colors.primary01}`,
    backgroundColor: theme.colors.primaryBackground01,

    color: theme.colors.uiColor06,
    fontSize: `${fontSize}px`,
    fontWeight: 500,
    textDecoration: 'none',
    whiteSpace: 'nowrap',

    cursor: isClickable ? 'pointer' : 'auto',
    outline: 'none',
    transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
    userSelect: 'none',

    '&:hover': {
      backgroundColor: theme.colors.primary01,
      color: theme.colors.uiColor08,
    },

    '&:disabled': {
      backgroundColor: theme.colors.uiColor07,
      color: theme.colors.uiColor08,
      cursor: 'not-allowed',
    },
  };
});

export const LocalizeCircle: React.FC<LocalizeCircleProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <StyledLocalizeCircle {...props} className={classnames(className)}>
      {children}
    </StyledLocalizeCircle>
  );
};

export default LocalizeCircle;
