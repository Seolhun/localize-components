import React from 'react';
import {
  LocalizeColor,
  LocalizeColorType,
} from '../../types';

const styles = require('./Button.css');

export interface ButtonProps {
  // isRequired
  children: React.ReactNode;
  // isNotRequired
  onClick?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  onFocus?: (...args: any[]) => any;
  onMouseOver?: (...args: any[]) => any;
  onMouseOut?: (...args: any[]) => any;
  className?: string;
  fontSize?: number;
  style?: {};
  disabled?: boolean;
  theme?: LocalizeColorType;
}

const Button: React.SFC<ButtonProps> = ({
  // is Required
  children,
  // is Not Required
  onClick = () => null,
  onMouseOver = () => null,
  onMouseOut = () => null,
  onBlur = () => null,
  onFocus = () => null,
  className = '',
  fontSize = 12,
  style = {},
  disabled = false,
  theme = LocalizeColor.PRIMARY,
}) => (
  <button
    type="button"
    className={`${styles.btn} ${className || `btn-${theme}`}`}
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
