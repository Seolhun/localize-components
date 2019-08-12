import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  ThemesType,
  ThemeConfig,
  Themes,
} from '@seolhun/localize-components-styled-types';
import {
  getValidTheme,
  getThemeHoverStyle,
  getThemeColorStyle,
} from '@seolhun/localize-components-styled-utils';

export interface CircleProps {
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
   * Set this to change Circle mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Circle subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change Circle style
   * @default 50
   */
  size?: number;
  /**
   * Set this to change Circle style
   * @default {}
   */
  style?: {};
}

const StyledCircle = styled.span<CircleProps>(({
  isClickable,
  mainColor = ThemeConfig.MAIN_THEME,
  subColor = ThemeConfig.SUB_THEME,
  size = 50,
  fontSize = 12,
  style = {},
}) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${size}px`,
    height: `${size}px`,

    borderRadius: '50%',
    border: `1px solid ${getValidTheme(mainColor)}`,
    backgroundColor: getValidTheme(subColor),

    color: getThemeColorStyle(subColor),
    fontSize: `${fontSize}px`,
    fontWeight: 500,
    textDecoration: 'none',
    whiteSpace: 'nowrap',

    cursor: isClickable ? 'pointer' : 'auto',
    outline: 'none',
    transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
    userSelect: 'none',

    '&:hover': {
      backgroundColor: getThemeHoverStyle(mainColor),
      color: getThemeColorStyle(mainColor),
    },

    '&:disabled': {
      backgroundColor: Themes.light_gray,
      color: Themes.white,
      cursor: 'not-allowed',
    },
    ...style,
  }
});

export const Circle: FunctionComponent<CircleProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <StyledCircle
      className={classnames(className)}
      {...props}
    >
      {children}
    </StyledCircle>
  )
}

export default Circle;
