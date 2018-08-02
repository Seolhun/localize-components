import React from 'react';
import PropTypes from 'prop-types';

import styles from './CheckBox.scss';

const CheckBox = ({
  // isRequired
  children,
  value,
  htmlFor,
  // isNotRequired
  className,
  onChange,
  onClick,
  onBlur,
}) => (
  <div className={`${styles.checkBox} ${className}`}>
    <label htmlFor={htmlFor}>
      <input
        type="checkbox"
        id={htmlFor}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
      />
      <span>
        {children}
      </span>
    </label>
  </div>
);

CheckBox.propTypes = {
  // isRequired
  children: PropTypes.node.isRequired,
  value: PropTypes.bool.isRequired,
  htmlFor: PropTypes.string.isRequired,
  // isNotRequired
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
};

CheckBox.defaultProps = {
  className: '',
  onChange: () => null,
  onClick: () => null,
  onBlur: () => null,
};


export default CheckBox;
