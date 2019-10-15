import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  ILocalizeTheme,
  LocalizeThemes,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';
import {
  getThemeHoverStyle,
  getThemeColorStyle,
  getValidThemeObject,
} from '@seolhun/localize-components-styled-utils';

export interface CircleProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change Circle children
   */
  children: ReactNode;

  /**
   * Set this to change Circle className
   * @default 'main'
   */
  className?: string;
  /**
   * Set this to change Circle onBlur
   * @default false
   */
  isClickable?: boolean;
  /**
   * Set this to change Circle disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Set this to change Button font-size
   * @default 12
   */
  fontSize?: number;
  /**
   * Set this to change Circle onBlur
   * @default 'main'
   */
  onBlur?: (...args: any[]) => void;
  /**
   * Set this to change Circle onClick
   * @default () => null
   */
  onClick?: (...args: any[]) => void;
  /**
   * Set this to change Circle onFocus
   * @default () => null
   */
  onFocus?: (...args: any[]) => void;
  /**
   * Set this to change Circle onMouseOut
   * @default () => null
   */
  onMouseOut?: (...args: any[]) => void;
  /**
   * Set this to change Circle onMouseOver
   * @default () => null
   */
  onMouseOver?: (...args: any[]) => void;
  /**
   * Set this to change Circle size
   * @default 50
   */
  size?: number;
}

const StyledCircle = styled.span<CircleProps, ILocalizeTheme>(({
    isClickable,
    size = 50,
    fontSize = 12,
    theme,
    ...props
  }) => {
    const validTheme = getValidThemeObject(props, theme);

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: `${size}px`,
      height: `${size}px`,

      borderRadius: '50%',
      border: `1px solid ${validTheme.mainColor}`,
      backgroundColor: validTheme.subColor,

      color: getThemeColorStyle(validTheme.subColor),
      fontSize: `${fontSize}px`,
      fontWeight: 500,
      textDecoration: 'none',
      whiteSpace: 'nowrap',

      cursor: isClickable ? 'pointer' : 'auto',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',

      '&:hover': {
        backgroundColor: getThemeHoverStyle(validTheme.mainColor),
        color: getThemeColorStyle(validTheme.mainColor),
      },

      '&:disabled': {
        backgroundColor: LocalizeThemes.light_grey,
        color: LocalizeThemes.white,
        cursor: 'not-allowed',
      },
    };
  }
);

export const Circle: FunctionComponent<CircleProps> = ({
  className,
  children,
  css = {},
  ...props
}) => {
  return (
    <StyledCircle className={classnames(className)} css={css} {...props}>
      {children}
    </StyledCircle>
  );
};

export default Circle;
