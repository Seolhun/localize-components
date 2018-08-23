import * as React from 'react';

import Button from '../button';
import { Input } from '../form';

import styles from './InputConfirm.scss';

export interface InputConfirmProps {
  // is Requiredd
  htmlFor: string;
  onChange: () => any;
  onClickClose: () => any;
  onClickSubmit: () => any;
  value: string;
  // isNotRequired
  cancelLabel: string;
  children: React.ReactNode;
  color: string;
  errorMessage: string;
  isShow: boolean;
  onBlur: () => any;
  onKeyDown: () => any;
  placeholder: string;
  position: string;
  required: boolean;
  styleType: string;
  submitDisabled: boolean;
  submitLabel: string;
  title: string;
  type: string;
}

export const COLOR = {
  BASIC: 'basic',
  SUCCESS: 'success',
  PRIMARY: 'primary',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger',
};

export const POSITION = {
  TL: 'top-left',
  TR: 'top-right',
  TC: 'top-center',
  BL: 'bottom-left',
  BR: 'bottom-right',
  BC: 'bottom-center',
  C: 'center',
};

const setColor = color => {
  let styleColor = 'bg-color-';
  switch (color.toLowerCase()) {
    case COLOR.SUCCESS:
      styleColor += COLOR.SUCCESS;
      break;
    case COLOR.PRIMARY:
      styleColor += COLOR.PRIMARY;
      break;
    case COLOR.INFO:
      styleColor += COLOR.INFO;
      break;
    case COLOR.WARNING:
      styleColor += COLOR.WARNING;
      break;
    case COLOR.DANGER:
      styleColor += COLOR.DANGER;
      break;
    default:
      styleColor += COLOR.BASIC;
      break;
  }
  return styles[`${styleColor}`];
};

const setPosition = postion => {
  switch (postion.toLowerCase()) {
    case POSITION.TL:
      return styles[POSITION.TL];
    case POSITION.TR:
      return styles[POSITION.TR];
    case POSITION.BL:
      return styles[POSITION.BL];
    case POSITION.BR:
      return styles[POSITION.BR];
    case POSITION.BC:
      return styles[POSITION.BC];
    case POSITION.C:
      return styles[POSITION.C];
    default:
      return styles[POSITION.TC];
  }
};

const InputConfirm: React.StatelessComponent<InputConfirmProps> = ({
  htmlFor,
  onChange,
  onClickClose,
  onClickSubmit,
  value,
  // isNotRequired
  cancelLabel,
  children,
  color,
  errorMessage,
  isShow,
  onBlur,
  onKeyDown,
  placeholder,
  position,
  required,
  styleType,
  submitDisabled,
  submitLabel,
  title,
  type,
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <React.Fragment>
      <div className={styles.coverBackground} />
      <div
        className={`${styles.InputConfirm} ${setColor(color)} ${setPosition(
          position
        )}`}
      >
        <div className={styles.titleDiv}>{title}</div>
        <div className={styles.inputDiv}>
          <Input
            className={styles.input}
            type={type}
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
            className={`${styles.errorMessageDiv} ${
              submitDisabled ? '' : styles.off
            }`}
          >
            {errorMessage}
          </div>
        </div>
        <div className={styles.buttonDiv}>
          {children || (
            <React.Fragment>
              <Button
                className="btn btn-black-4"
                onClick={onClickClose}
                style={{
                  padding: '10px 50px',
                }}
              >
                {cancelLabel}
              </Button>
              <Button
                className="btn btn-main"
                onClick={() => {
                  if (!submitDisabled) {
                    onClickSubmit();
                  }
                }}
                style={{
                  padding: '10px 50px',
                }}
                disabled={submitDisabled}
              >
                {submitLabel}
              </Button>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

InputConfirm.defaultProps = {
  cancelLabel: 'Cancel',
  children: null,
  color: COLOR.BASIC,
  errorMessage: '',
  isShow: false,
  onBlur: () => null,
  onKeyDown: () => null,
  placeholder: '',
  position: POSITION.TC,
  required: true,
  styleType: 'box',
  submitDisabled: false,
  submitLabel: 'Complete',
  title: '',
  type: 'text',
};

export default InputConfirm;
