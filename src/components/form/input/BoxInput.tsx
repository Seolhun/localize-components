import * as React from 'react';

const styles = require('./BoxInput.css');

export interface BoxInputProps {
  value: string;
  htmlFor: string;
  // isNotRequired
  children?: React.ReactNode;
  className?: string;
  errorMessage?: string;
  hasError?: boolean;
  inputRef?: (event?) => any;
  onBlur?: (event?) => any;
  onChange?: (event?) => any;
  onKeyDown?: (event?) => any;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

const BoxInput: React.StatelessComponent<BoxInputProps> = ({
  value,
  htmlFor,
  // isNotRequired
  children = null,
  className = '',
  errorMessage = '',
  hasError = false,
  inputRef = () => null,
  onBlur = () => null,
  onChange = () => null,
  onKeyDown = () => null,
  placeholder = '',
  required = true,
  type = 'text',
}) => (
  <React.Fragment>
    <label htmlFor={htmlFor}>
      {children}
      <input
        ref={inputRef}
        className={`${styles.inputText} ${className} ${
          hasError ? styles.error : ''
        }`}
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        value={value}
        required={required}
      />
    </label>
    <div className={`${styles.errorDiv} ${hasError ? '' : styles.off}`}>
      {errorMessage}
    </div>
  </React.Fragment>
);

export default BoxInput;
