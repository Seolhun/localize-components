import * as React from 'react';

const styles = require('./Button.css');

export interface ButtonProps {
  // isRequired
  children: React.ReactNode;
  onClick: () => any;
  // isNotRequired
  onMouseOver?: () => any;
  onMouseOut?: () => any;
  onBlur?: () => any;
  onFocus?: () => any;
  className?: string;
  fontSize?: number;
  style?: {
    color?: string,
    backgroundColor?: string,
    padding?: string,
  };
  disabled?: boolean;
}

const Button: React.SFC<ButtonProps> = ({
  // is Required
  children,
  onClick,
  // is Not Required
  onMouseOver = () => null,
  onMouseOut = () => null,
  onBlur = () => null,
  onFocus = () => null,
  className = 'btn-success',
  fontSize = 12,
  style = {
    color: '',
    backgroundColor: '',
    padding: '10px 20px',
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
