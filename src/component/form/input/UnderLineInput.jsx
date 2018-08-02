import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './UnderLineInput.scss';

const UnderLineInput = ({
  // isRequired
  value,
  htmlFor,
  placeholder,
  // isNotRequired
  children,
  type,
  className,
  onChange,
  onKeyDown,
  onBlur,
  required,
  hasError,
  errorMessage,
}) => (
  <Fragment>
    <label
      className={styles.underLineLabel}
      htmlFor={htmlFor}
    >
      <input
        className={`${styles.input} ${className} ${hasError ? styles.error : ''}`}
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
  </Fragment>
);

UnderLineInput.propTypes = {
  // isRequired
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,

  // isNotRequired
  children: PropTypes.node,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

UnderLineInput.defaultProps = {
  children: null,
  placeholder: '',
  className: '',
  onChange: () => null,
  onKeyDown: () => null,
  onBlur: () => null,
  hasError: false,
  errorMessage: '',
};

export default UnderLineInput;
