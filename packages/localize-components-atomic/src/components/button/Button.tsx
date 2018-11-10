import * as React from 'react';

const styles = require('./Button.scss');

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
  style?: {
    color?: string;
    backgroundColor?: string;
    padding?: string;
  };
  disabled?: boolean;
}

const Button: React.StatelessComponent<ButtonProps> = ({
  // is Required
  children,
  // is Not Required
  onClick = () => null,
  onMouseOver = () => null,
  onMouseOut = () => null,
  onBlur = () => null,
  onFocus = () => null,
  className = 'btn-success',
  fontSize = 12,
  style = {
    color: '',
    backgroundColor: '',
  },
  disabled = false,
}) => (
  <button
    type="button"
    className={`${styles.btn} ${className}`}
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
