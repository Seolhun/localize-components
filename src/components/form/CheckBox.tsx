import React from 'react';

import styles from './CheckBox.css';

export interface CheckBoxProps {
  children: React.ReactNode;
  value: string;
  htmlFor: string;
  // isNotRequired
  className: string;
  onChange: () => any;
  onClick: () => any;
  onBlur: () => any;
}

const CheckBox: React.StatelessComponent<CheckBoxProps> = ({
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
      <span>{children}</span>
    </label>
  </div>
);

CheckBox.defaultProps = {
  className: '',
  onChange: () => null,
  onClick: () => null,
  onBlur: () => null,
};

export default CheckBox;
