import * as React from 'react';
import * as classnames from 'classnames';

import { Color, ColorType, Position, PositionType } from '../../types';
import Button from '../button';
import { Input } from '../form';

const styles = require('./Confirm.css');

export interface ConfirmProps {
  htmlFor: string;
  onChange: (...args: any[]) => any;
  onClickClose: (...args: any[]) => any;
  onClickSubmit: (...args: any[]) => any;
  value: string;
  // isNotRequired
  cancelLabel?: string;
  children?: React.ReactNode;
  color?: ColorType;
  errorMessage?: string;
  isShow?: boolean;
  onBlur?: () => any;
  onKeyDown?: () => any;
  placeholder?: string;
  position?: PositionType;
  required?: boolean;
  styleType?: string;
  submitIsDisabled?: boolean;
  submitLabel?: string;
  title?: string;
  inputType?: string;
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
    case Position.TC:
      return styles[Position.TC];
    case Position.TR:
      return styles[Position.TR];
    case Position.L:
      return styles[Position.L];
    case Position.C:
      return styles[Position.C];
    case Position.R:
      return styles[Position.R];
    case Position.BL:
      return styles[Position.BL];
    case Position.BC:
      return styles[Position.BC];
    case Position.BR:
      return styles[Position.BR];
    default:
      return styles[Position.C];
  }
};

const Confirm: React.StatelessComponent<ConfirmProps> = ({
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
  position = Position.C,
  required = true,
  styleType = 'box',
  submitIsDisabled = false,
  submitLabel = 'Complete',
  title = '',
  inputType = 'search',
}) => {
  if (!isShow) {
    return null;
  }

  switch (type) {
    case 'input':
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <div className={styles.coverBackground} />
      <div
        className={classnames(
          `${styles.Confirm}
            ${setColor(color)}
            ${setPosition(position)}
          `
        )}
      >
        <div className={styles.titleDiv}>{title}</div>
        <div className={styles.inputDiv}>
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
            className={`${styles.errorMessageDiv} ${
              submitIsDisabled ? '' : styles.off
            }`}
          >
            {errorMessage}
          </div>
        </div>
        <div className={styles.buttonDiv}>
          {children || (
            <React.Fragment>
              <Button
                className="btn btn-success"
                onClick={(event) => {
                  if (!submitIsDisabled) {
                    onClickSubmit(event);
                  }
                }}
                style={{
                  padding: '10px 50px',
                }}
                disabled={submitIsDisabled}
              >
                {submitLabel}
              </Button>
              <Button
                className="btn btn-warning"
                onClick={onClickClose}
                style={{
                  padding: '10px 50px',
                }}
              >
                {cancelLabel}
              </Button>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Confirm;
