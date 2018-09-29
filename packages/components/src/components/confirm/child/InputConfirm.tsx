import * as React from 'react';
import * as classnames from 'classnames';

import { Input } from '../../form';

const styles = require('./InputConfirm.css');

export interface InputConfirmProps {
  htmlFor: string;
  onChange: (...args: any[]) => any;
  value: string;
  // isNotRequired
  errorMessage?: string;
  onBlur?: () => any;
  onKeyDown?: () => any;
  placeholder?: string;
  required?: boolean;
  styleType?: string;
  submitIsDisabled?: boolean;
  inputType?: string;
}

const InputConfirm: React.StatelessComponent<InputConfirmProps> = ({
  htmlFor,
  onChange,
  value,
  // isNotRequired
  errorMessage = '',
  onBlur = () => null,
  onKeyDown = () => null,
  placeholder = '',
  required = true,
  styleType = 'box',
  submitIsDisabled = false,
  inputType = 'search',
}) => {
  return (
    <div className={styles.InputConfirm}>
      <Input
        className={styles.input}
        type={inputType}
        styleType={styleType}
        htmlFor={htmlFor}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        required={required}
      />
      <div
        className={classnames(`
          ${styles.errorMessageBox}
          ${submitIsDisabled ? '' : styles.off}
        `)}
      >
        {errorMessage}
      </div>
    </div>
  );
};

export default InputConfirm;
