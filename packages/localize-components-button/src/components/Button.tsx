import React, { ReactNode, SFC } from 'react';

import classnames from 'classnames';

import {
  BrandTheme,
  ThemeStyle,
  ThemeStyleType,
  ThemeType,
} from '@seolhun/localize-components-types';
import {
  getThemeStyleKey,
} from '@seolhun/localize-components-utils';

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
   * Set this to change Button ours theme
   * @default 'main'
   */
  theme?: ThemeType;
  /**
   * Set this to change Button ours theme type
   * @default 'background'
   */
  themeType?: ThemeStyleType;
}

const Button: SFC<ButtonProps> = ({
  // is Required
  children,
  // is Not Required
  className = '',
  disabled = false,
  fontSize = 12,
  onBlur = () => null,
  onClick = () => null,
  onFocus = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  style = {},
  themeType = ThemeStyle.Background,
  theme = BrandTheme.BRAND_MAIN,
}: ButtonProps) => (
  <button
    type='button'
    className={classnames(
      className,
      '__LocalizeHermes Button',
      `Button-${getThemeStyleKey(theme, { themeType })}`,
    )}
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onBlur={onBlur}
    onFocus={onFocus}
    style={{
      ...style,
      fontSize: `${fontSize}px`,
    }}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
