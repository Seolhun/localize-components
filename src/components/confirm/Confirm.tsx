import * as React from 'react';
import * as classnames from 'classnames';

import { Color, ColorType, Position, PositionType } from '../../types';
import Button from '../button';

import { BasicConfirm, InputConfirm } from './child';

const styles = require('./Confirm.css');

export interface ConfirmProps {
  htmlFor: string;
  onClickClose: (...args: any[]) => any;
  onClickSubmit: (...args: any[]) => any;
  value: string;
  // isNotRequired
  cancelLabel?: string;
  children?: React.ReactNode;
  color?: ColorType;
  errorMessage?: string;
  inputType?: string;
  isShow?: boolean;
  message?: string;
  onBlur?: (...args: any[]) => any;
  onChange: (...args: any[]) => any;
  onKeyDown?: (...args: any[]) => any;
  placeholder?: string;
  position?: PositionType;
  required?: boolean;
  styleType?: string;
  submitIsDisabled?: boolean;
  submitLabel?: string;
  title?: string;
  type?: ConfirmType;
}

export type ConfirmType = 'basic' | 'input' | 'select' | 'checkbox';
const ConfirmTypes = {
  BASIC: 'basic',
  INPUT: 'input',
  SELECT: 'select',
  CHECKBOX: 'checkbox',
};

const setColor = (color: string) => {
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

const setPosition = (postion: string) => {
  switch (postion.toLowerCase()) {
    case Position.TL:
      return styles[Position.TL];
    case Position.TC:
      return styles[Position.TC];
    case Position.TR:
      return styles[Position.TR];
    case Position.LEFT:
      return styles[Position.LEFT];
    case Position.CENTER:
      return styles[Position.CENTER];
    case Position.RIGHT:
      return styles[Position.RIGHT];
    case Position.BL:
      return styles[Position.BL];
    case Position.BC:
      return styles[Position.BC];
    case Position.BR:
      return styles[Position.BR];
    default:
      return styles[Position.CENTER];
  }
};

const setRenderType = (props) => {
  switch (props.type) {
    case ConfirmTypes.INPUT:
      return <InputConfirm {...props} />;
    default:
      return <BasicConfirm {...props} />;
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
  inputType = 'search',
  isShow = false,
  message = '',
  onBlur = () => null,
  onKeyDown = () => null,
  placeholder = '',
  position = Position.CENTER,
  required = true,
  styleType = 'box',
  submitIsDisabled = false,
  submitLabel = 'Complete',
  title = '',
  type = 'basic',
}) => {
  if (!isShow) {
    return null;
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
        <div className={styles.headerDiv}>{title}</div>
        <div className={styles.bodyDiv}>
          {children ||
            setRenderType({
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
              inputType,
              isShow,
              message,
              onBlur,
              onKeyDown,
              placeholder,
              position,
              required,
              styleType,
              submitIsDisabled,
              submitLabel,
              title,
              type,
            })}
        </div>
        <div className={styles.footerDiv}>
          <Button
            className="btn btn-success"
            onClick={(event) => {
              if (!submitIsDisabled) {
                onClickSubmit(event);
              }
            }}
            disabled={submitIsDisabled}
          >
            {submitLabel}
          </Button>
          <Button className="btn btn-warning" onClick={onClickClose}>
            {cancelLabel}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Confirm;
