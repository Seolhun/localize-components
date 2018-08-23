import * as React from 'react';

import styles from './BoxInput.scss';

export interface BoxInputProps {
  value: string;
  htmlFor: string;
  type: string;
  // isNotRequired
  children?: React.ReactNode;
  className?: string;
  errorMessage?: string;
  hasError?: boolean;
  inputRef?: () => any;
  onBlur?: () => any;
  onChange?: () => any;
  onKeyDown?: () => any;
  placeholder?: string;
  required?: boolean;
}

const BoxInput: React.StatelessComponent<BoxInputProps> = ({
  value,
  htmlFor,
  type,
  // isNotRequired
  children,
  className,
  errorMessage,
  hasError,
  inputRef,
  onBlur,
  onChange,
  onKeyDown,
  placeholder,
  required,
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

BoxInput.defaultProps = {
  children: null,
  className: '',
  errorMessage: '',
  hasError: false,
  inputRef: () => null,
  onBlur: () => null,
  onChange: () => null,
  onKeyDown: () => null,
  placeholder: '',
  required: true,
};

export default BoxInput;
