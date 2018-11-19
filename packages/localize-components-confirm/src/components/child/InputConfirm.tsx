import React from 'react';
import classnames from 'classnames';

import {
  Input,
  INPUT_TYPE,
  INPUT_STYLE_TYPE,
} from '@seolhun/localize-components-form';

import styles from './InputConfirm.scss';

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
  inputStyleType?: string;
  submitIsDisabled?: boolean;
  inputType?: string;
}

const InputConfirm: React.SFC<InputConfirmProps> = ({
  htmlFor,
  onChange,
  value,
  // isNotRequired
  errorMessage = '',
  inputStyleType = INPUT_STYLE_TYPE.BOX,
  inputType = INPUT_TYPE.SEARCH,
  onBlur = () => null,
  onKeyDown = () => null,
  placeholder = '',
  required = true,
  submitIsDisabled = false,
}) => {
  return (
    <div className={styles.InputConfirm}>
      <Input
        className={styles.input}
        type={inputType}
        inputStyleType={inputStyleType}
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
