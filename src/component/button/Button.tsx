import * as React from 'react';

const styles = require('./Button.scss');

interface ButtonProps {
  // isRequired
  children: React.ReactNode;
  // isNotRequired
  className: string;
  onClick: () => void;
  fontSize: number;
  padding: string;
  style: {
    color: string;
    backgroundColor: string;
  };
  disabled: boolean;
}

const Button: React.SFC<ButtonProps> = ({
  className = '',
  onClick = () => null,
  children = null,
  fontSize = 12,
  padding = '',
  style = '',
  disabled = false,
}) => (
  <button
    type="button"
    className={`${styles.btn} ${className || 'not-custom'}`}
    onClick={onClick}
    style={{
      ...style,
      fontSize: `${fontSize}px`,
      padding,
    }}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
