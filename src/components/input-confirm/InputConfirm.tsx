import * as React from 'react';

import Button from '../button';
import { Input } from '../form';

import { Color, Position } from '../../types';

const styles = require('./InputConfirm.css');

export interface InputConfirmProps {
  htmlFor: string;
  onChange: (event?) => any;
  onClickClose: (event?) => any;
  onClickSubmit: (event?) => any;
  value: string;
  // isNotRequired
  cancelLabel?: string;
  children?: React.ReactNode;
  color?: string;
  errorMessage?: string;
  isShow?: boolean;
  onBlur?: () => any;
  onKeyDown?: () => any;
  placeholder?: string;
  position?: string;
  required?: boolean;
  styleType?: string;
  submitDisabled?: boolean;
  submitLabel?: string;
  title?: string;
  type?: string;
}

const setColor = (color) => {
  let styleColor = 'bg-color-';
  switch (color.toLowerCase()) {
    case Color.SUCCESS:
      styleColor += Color.SUCCESS;
      break;
    case Color.PRIMARY:
      styleColor += Color.PRIMARY;
      break;
    case Color.INFO:
      styleColor += Color.INFO;
      break;
    case Color.WARNING:
      styleColor += Color.WARNING;
      break;
    case Color.DANGER:
      styleColor += Color.DANGER;
      break;
    default:
      styleColor += Color.BASIC;
      break;
  }
  return styles[`${styleColor}`];
};

const setPosition = (postion) => {
  switch (postion.toLowerCase()) {
    case Position.TL:
      return styles[Position.TL];
    case Position.TR:
      return styles[Position.TR];
    case Position.BL:
      return styles[Position.BL];
    case Position.BR:
      return styles[Position.BR];
    case Position.BC:
      return styles[Position.BC];
    case Position.C:
      return styles[Position.C];
    default:
      return styles[Position.TC];
  }
};

const InputConfirm: React.StatelessComponent<InputConfirmProps> = ({
  htmlFor,
  onChange,
  onClickClose,
  onClickSubmit,
  value,
  // isNotRequired
  cancelLabel = 'Cancel',
  children = null,
  color = Color.BASIC,
  errorMessage = '',
  isShow = false,
  onBlur = () => null,
  onKeyDown = () => null,
  placeholder = '',
  position = Position.TC,
  required = true,
  styleType = 'box',
  submitDisabled = false,
  submitLabel = 'Complete',
  title = '',
  type = 'text',
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

export default InputConfirm;
