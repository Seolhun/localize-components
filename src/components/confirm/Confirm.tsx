import * as React from 'react';
import * as classnames from 'classnames';

import Button from '../button';
import { BasicConfirm, InputConfirm } from './child';

import { Color, ColorType, Position, PositionType } from '../../types';
import { SetStyleUtils } from '../../utils';

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
        className={classnames(`
          ${styles.Confirm}
          ${SetStyleUtils.setColor(styles, color)}
          ${SetStyleUtils.setPosition(styles, position)}
        `)}
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
