import * as React from 'react';
const styles = require('./CheckBox.css');

export interface CheckBoxProps {
  children: React.ReactNode;
  value: string;
  htmlFor: string;
  // isNotRequired
  className: string;
  onChange: (...args: any[]) => any;
  onClick: (...args: any[]) => any;
  onBlur: (...args: any[]) => any;
}

const CheckBox: React.SFC<CheckBoxProps> = ({
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
