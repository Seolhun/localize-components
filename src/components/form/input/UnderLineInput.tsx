import * as React from 'react';

import styles from './UnderLineInput.css';

export interface UnderLineInputProps {
  value: string;
  htmlFor: string;
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
  type?: string;
}

const UnderLineInput: React.StatelessComponent<UnderLineInputProps> = ({
  // isRequired
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
    <label className={styles.underLineLabel} htmlFor={htmlFor}>
      <input
        ref={inputRef}
        className={`${styles.input} ${className} ${
          hasError ? styles.error : ''
        }`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        value={value}
        id={htmlFor}
        required={required}
      />
      <span className={styles.highlight} />
      <span className={`${styles.bar} ${hasError ? styles.error : ''}`} />
      {children}
    </label>
    <div className={`${styles.errorDiv} ${hasError ? '' : styles.off}`}>
      {errorMessage}
    </div>
  </React.Fragment>
);

export default UnderLineInput;
