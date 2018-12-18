import React from 'react';

import classnames from 'classnames';

import {
  Input,
} from '@seolhun/localize-components-form';

const styles = require('./InputConfirm.scss');

export interface InputConfirmProps {
  htmlFor: string;
  onChange: (...args: any[]) => void;
  value: string;
  // isNotRequired
  errorMessage?: string;
  inputStyleType?: string;
  onBlur?: (...args: any[]) => void;
  onKeyDown?: (...args: any[]) => void;
  placeholder?: string;
  required?: boolean;
  submitIsDisabled?: boolean;
  type?: string;
}

const InputConfirm: React.SFC<InputConfirmProps> = ({
  htmlFor,
  onChange,
  value,
  // isNotRequired
  errorMessage = '',
  onBlur = () => null,
  onKeyDown = () => null,
  placeholder = '',
  required = true,
  submitIsDisabled = false,
  type = 'search',
}) => {
  return (
    <div className={styles.InputConfirm}>
      <Input
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
      <div
        className={classnames(
          styles.errorMessageBox,
          submitIsDisabled ? '' : styles.off,
        )}
      >
        {errorMessage}
      </div>
    </div>
  );
};

export default InputConfirm;
