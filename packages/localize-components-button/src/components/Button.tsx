import React, { ReactNode, SFC } from 'react';

import styled from '@emotion/styled';
import { darken, lighten } from 'polished';

import classnames from 'classnames';

import {
  Size,
  SizeType,
  ThemeConfig,
  Themes,
  ThemesType,
} from '@seolhun/localize-components-styled-types';
import {
  getIsLightenTheme,
  getValidTheme,
} from '@seolhun/localize-components-styled-utils';

export interface ButtonProps {
  // isRequired
  /**
   * Set this to change Button rendering children node
   * @default null
   */
  children: ReactNode;

  // isNotRequired
  /**
   * Set this to change Button className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change Button disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Set this to change Button font-size
   * @default 12
   */
  fontSize?: number;
  /**
   * Set this to change Button onBlur
   * @default 'main'
   */
  onBlur?: (...args: any[]) => void;
  /**
   * Set this to change Button onClick
   * @default () => null
   */
  onClick?: (...args: any[]) => void;
  /**
   * Set this to change Button onFocus
   * @default () => null
   */
  onFocus?: (...args: any[]) => void;
  /**
   * Set this to change Button onMouseOut
   * @default () => null
   */
  onMouseOut?: (...args: any[]) => void;
  /**
   * Set this to change Button onMouseOver
   * @default () => null
   */
  onMouseOver?: (...args: any[]) => void;
  /**
   * Set this to change Button style
   * @default medium
   */
  size?: SizeType;
  /**
   * Set this to change Button ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Button ours subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change Button style
   * @default {}
   */
  style?: {};
}


const StyledButton = styled.button<ButtonProps>(({
  fontSize = 12,
  mainColor = ThemeConfig.MAIN_THEME,
  size = Size.MEDIUM,
}) => {
  const styledColor = () => {
    if (getIsLightenTheme(mainColor)) {
      return Themes.dark_gray;
    }
    return Themes.white;
  };

  const styledSize = () => {
    switch (size) {
      case Size.LARGE:
        return '15px 30px';
      case Size.MEDIUM:
        return '10px 25px';
      default:
        return '5px 20px';
    }
  }

  const styledHoverStyle = () => {
    if (getIsLightenTheme(mainColor)) {
      return darken(0.1, getValidTheme(mainColor));
    }
    return lighten(0.1, getValidTheme(mainColor));
  }

  return {
    borderRadius: '6px',
    border: '1px solid transparent',
    backgroundColor: getValidTheme(mainColor),
    color: styledColor(),
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: `${fontSize}px`,
    fontWeight: 500,
    height: 'auto',
    outline: 'none',
    padding: styledSize(),
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background-color 0.3s, border-color 0.3s',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    '&:not(:disabled):not(.disabled)': {
      cursor: 'pointer',
    },

    '&:hover': {
      backgroundColor: styledHoverStyle(),
    },

    '&:disabled': {
      backgroundColor: Themes.light_gray,
      color: Themes.white,
      cursor: 'not-allowed',
    }
  }
})

const Button: SFC<ButtonProps> = ({
  children,

  className = '',
  disabled = false,
  fontSize = 12,
  mainColor = ThemeConfig.MAIN_THEME,
  onBlur = () => null,
  onClick = () => null,
  onFocus = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  size = Size.MEDIUM,
  style = {},
}) => (
  <StyledButton
    className={classnames(
      className,
      '__Localize__',
    )}
    type='button'
    disabled={disabled}
    fontSize={fontSize}
    mainColor={mainColor}
    onBlur={onBlur}
    onClick={onClick}
    onFocus={onFocus}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
    size={size}
    style={style}
  >
    {children}
  </StyledButton>
);

export default Button;
