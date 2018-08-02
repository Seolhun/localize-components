import React from 'react';
import PropTypes from 'prop-types';

import styles from './BoxInput.scss';

const BoxInput = ({
  // isRequiredd
  value,
  htmlFor,
  placeholder,
  // isNotrequiredd
  children,
  type,
  className,
  onChange,
  onKeyDown,
  onBlur,
  required,
  hasError,
}) => (
  <label
    htmlFor={htmlFor}
  >
    {children}
    <input
      className={`${styles.inputText} ${className} ${hasError ? styles.error : ''}`}
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
);

BoxInput.propTypes = {
  // isrequiredd
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
};

BoxInput.defaultProps = {
  children: null,
  placeholder: '',
  className: '',
  onChange: () => null,
  onKeyDown: () => null,
  onBlur: () => null,
  hasError: false,
};

export default BoxInput;
