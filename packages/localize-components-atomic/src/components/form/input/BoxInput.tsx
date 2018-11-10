import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./BoxInput.css');

export interface BoxInputProps {
  value: string;
  htmlFor: string;
  // isNotRequired
  children?: React.ReactNode;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  errorMessage?: string;
  hasError?: boolean;
  inputRef?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  onChange?: (...args: any[]) => any;
  onKeyDown?: (...args: any[]) => any;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

const BoxInput: React.SFC<BoxInputProps> = ({
  value,
  htmlFor,
  // isNotRequired
  children = null,
  inputClassName = '',
  labelClassName = '',
  errorClassName = '',
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
    <label
      className={classnames(`
        ${styles.label}
        ${labelClassName}
        ${hasError ? styles.error : ''}
      `)}
      htmlFor={htmlFor}
    >
      {children}
      <input
        ref={inputRef}
        className={classnames(`
          ${styles.input}
          ${inputClassName}
          ${hasError ? styles.error : ''}`)}
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
    <div
      className={classnames(`
      ${styles.errorDiv}
      ${errorClassName}
      ${hasError ? '' : styles.off}`)}
    >
      {errorMessage}
    </div>
  </React.Fragment>
);

export default BoxInput;
