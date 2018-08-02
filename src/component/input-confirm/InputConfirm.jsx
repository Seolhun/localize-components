import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import styles from './InputConfirm.scss';
import Button from '../button';
import { Input } from '../form';

const COLOR = {
  BASIC: 'basic',
  SUCCESS: 'success',
  PRIMARY: 'primary',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger',
};

const POSITION = {
  TL: 'top-left',
  TR: 'top-right',
  TC: 'top-center',
  BL: 'bottom-left',
  BR: 'bottom-right',
  BC: 'bottom-center',
  C: 'center',
};

const setColor = (color) => {
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

const setPosition = (postion) => {
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

const InputConfirm = ({
  // is Requiredd
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
  submitLabel,
  submitDisabled,
  title,
  type,
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <Fragment>
      <div className={styles.coverBackground} />
      <div className={`${styles.InputConfirm} ${setColor(color)} ${setPosition(position)}`}>
        <div className={styles.titleDiv}>
          {title}
        </div>
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
          <div className={`${styles.errorMessageDiv} ${submitDisabled ? '' : styles.off}`}>
            {errorMessage}
          </div>
        </div>
        <div className={styles.buttonDiv}>
          {
            children || (
              <Fragment>
                <Button
                  padding="10px 50px"
                  className="btn btn-black-4"
                  onClick={onClickClose}
                >
                  {cancelLabel}
                </Button>
                <Button
                  padding="10px 50px"
                  className="btn btn-main"
                  onClick={() => {
                    if (!submitDisabled) {
                      onClickSubmit();
                    }
                  }}
                  disabled={submitDisabled}
                >
                  {submitLabel}
                </Button>
              </Fragment>
            )
          }
        </div>
      </div>
    </Fragment>
  );
};

  // Will be Updated with Button, It has a dependency Button Compoennt or global button css
InputConfirm.propTypes = {
  // is Requiredd
  htmlFor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickClose: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,

  // isNotRequired
  cancelLabel: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  errorMessage: PropTypes.string,
  isShow: PropTypes.bool,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  position: PropTypes.string,
  required: PropTypes.bool,
  styleType: PropTypes.string,
  submitLabel: PropTypes.string,
  submitDisabled: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};

InputConfirm.defaultProps = {
  cancelLabel: 'Cancel',
  children: null,
  color: 'basic',
  errorMessage: '',
  isShow: false,
  onBlur: () => null,
  onKeyDown: () => null,
  onValidation: () => null,
  placeholder: '',
  position: 'top-center',
  required: true,
  styleType: 'box',
  submitLabel: 'Complete',
  submitDisabled: false,
  title: '',
  type: 'text',
};

export default InputConfirm;
