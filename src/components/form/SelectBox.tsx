import React from 'react';

import styles from './SelectBox.scss';

export interface SelectBoxProps {
  children: React.ReactNode;
  value: string;
  htmlFor: string;
  // isNotRequired
  className: string;
  onChange: () => any;
  onClick: () => any;
  onBlur: () => any;
}

const SelectBox: React.StatelessComponent<SelectBoxProps> = ({
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

SelectBox.defaultProps = {
  className: '',
  onChange: () => null,
  onClick: () => null,
  onBlur: () => null,
};

export default SelectBox;
