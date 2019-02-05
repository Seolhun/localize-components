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
   * @default {}
   */
  style?: {};
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
}

const Button: SFC<ButtonProps> = ({
  className,
  onBlur = () => null,
  onClick = () => null,
  onFocus = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  disabled,
  children,
  style,
}: ButtonProps) => (
  <button
    className={classnames(
      className,
      '__Localize__',
    )}
    type='button'
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onBlur={onBlur}
    onFocus={onFocus}
    disabled={disabled}
    style={style}
  >
    {children}
  </button>
);

const StyledButton = styled(Button)<ButtonProps>`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({
    mainColor = ThemeConfig.MAIN_THEME,
  }) => {
    return getValidTheme(mainColor);
  }};
  color: ${({
    mainColor = ThemeConfig.MAIN_THEME,
  }) => {
    if (getIsLightenTheme(mainColor)) {
      return Themes.dark_gray;
    }
    return Themes.white;
  }};
  cursor: pointer;
  display: inline-block;
  font-size: ${({ fontSize = 12 }) => `${fontSize}px`};
  font-weight: 500;
  height: auto;
  line-height: 1.5;
  margin: 5px;
  outline: none;
  padding: ${({ size }) => {
    switch (size) {
      case Size.LARGE:
        return '15px 30px';
      case Size.MEDIUM:
        return '10px 25px';
      default:
        return '5px 20px';
    }
  }};
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, border-color 0.3s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:hover {
    background-color: ${({
      mainColor = ThemeConfig.MAIN_THEME,
    }) => {
      if (getIsLightenTheme(mainColor)) {
        return darken(0.1, getValidTheme(mainColor));
      }
      return lighten(0.1, getValidTheme(mainColor));
    }};
  }


  &:disabled {
    background-color: ${Themes.light_gray};
    color: ${Themes.white};
    cursor: not-allowed;
  }
`;

export default StyledButton;
