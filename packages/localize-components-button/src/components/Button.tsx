import React, { ReactNode, SFC } from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  Size,
  SizeType,
  ThemeConfig,
  Themes,
  ThemeStyleType,
  ThemesType,
} from '@seolhun/localize-components-styled-types';
import {
  getIsLightenTheme,
  getLightenDarkenColor,
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
   * @default ThemeConfiguration.MAIN_THEME
   * @see https://emotion.sh/docs/theming
   * @description Naming is Because of emotion default props 'theme'
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Button ours subColor
   * @default ThemeConfiguration.SUB_THEME
   */
  subColor?: ThemesType;
  /**
   * Set this to change Button ours theme type
   * @default 'background'
   */
  themeType?: ThemeStyleType;
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
      'Localize__Button',
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
  border-radius: 3px;
  border: 1px solid transparent;
  background-color: ${({
    mainColor = ThemeConfig.MAIN_THEME,
  }: ButtonProps) => {
    return Themes[mainColor];
  }};
  color: ${({
    mainColor = ThemeConfig.MAIN_THEME,
  }: ButtonProps) => {
    if (getIsLightenTheme(mainColor)) {
      return Themes.BLACK;
    }
    return Themes.WHITE;
  }};
  cursor: pointer;
  display: inline-block;
  font-size: ${({ fontSize = 12 }: ButtonProps) => `${fontSize}px`};
  font-weight: 600;
  height: auto;
  line-height: 1.5;
  margin: 5px;
  outline: none;
  padding: ${({ size }: ButtonProps) => {
    switch (size) {
      case Size.LARGE:
        return '15px 30px';
      case Size.SMALL:
        return '5px 20px';
      default:
        return '10px 25px';
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
    }: ButtonProps) => {
      return getLightenDarkenColor(Themes[mainColor], 20);
    }};
  }

  &:disabled {
    background-color: ${Themes.LIGHT_GRAY};
    color: ${Themes.WHITE};
    cursor: not-allowed;

    &:hover {
      background-color: ${getLightenDarkenColor(Themes.GRAY, 20)};
    }
  }
`;

export default StyledButton;
