import * as React from 'react';

const styles = require('./Button.scss');

export interface ButtonProps {
  // isRequired
  children: React.ReactNode;
  onClick: () => any;
  // isNotRequired
  className?: string;
  fontSize?: number;
  style?: {
    color?: string;
    backgroundColor?: string;
    padding?: string;
  };
  disabled?: boolean;
}

const Button: React.SFC<ButtonProps> = ({
  // is Required
  onClick = () => null,
  children = null,
  // is Not Required
  className = 'btn-success',
  fontSize = 12,
  style = {
    color: '',
    backgroundColor: '',
    padding: '10px 20px',
  },
  disabled,
}) => (
  <button
    type="button"
    className={`${styles.btn} ${className}`}
    onClick={onClick}
    style={{
      ...style,
      fontSize: `${fontSize}px`,
    }}
    disabled={disabled}>
    {children}
  </button>
);

export default Button;
