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
  className?: string | undefined;
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

class Confirm extends React.PureComponent<ConfirmProps> {
  renderByType(type) {
    switch (type) {
      case ConfirmTypes.INPUT:
        return <InputConfirm {...this.props} />;
      default:
        return <BasicConfirm {...this.props} />;
    }
  }

  render() {
    const {
      onClickClose,
      onClickSubmit,
      // isNotRequired
      cancelLabel = 'Cancel',
      children = null,
      className = null,
      color = Color.BASIC,
      isShow = false,
      position = Position.CENTER,
      submitIsDisabled = false,
      submitLabel = 'Complete',
      title = '',
      type = Color.BASIC,
    } = this.props;
    if (!isShow) {
      return null;
    }
    return (
      <React.Fragment>
        <div className={styles.coverBackground} />
        <div
          className={classnames(`
          ${styles.Confirm}
          ${className}
          ${SetStyleUtils.setColor(styles, color)}
          ${SetStyleUtils.setPosition(styles, position)}
        `)}
        >
          <div className={styles.headerDiv}>{title}</div>
          <div className={styles.bodyDiv}>
            {children || this.renderByType(type)}
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
  }
}

export default Confirm;
