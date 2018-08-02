import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import styles from './Alert.scss';
import Button from '../button';

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

const Alert = ({
  onClickClose,

  isShow,
  title,
  message,
  buttonLabel,
  color,
  position,
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <Fragment>
      <div className={styles.coverBackground} />
      <div className={`${styles.alert} ${setColor(color)} ${setPosition(position)}`}>
        <div className={styles.titleDiv}>
          {title}
        </div>
        <div className={styles.messageDiv}>
          {message}
        </div>
        <div className={styles.buttonDiv}>
          <Button
            padding="10px 50px"
            className={`btn btn-${color}`}
            onClick={onClickClose}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

  // Will be Updated with Button, It has a dependency Button Compoennt or global button css
Alert.propTypes = {
  onClickClose: PropTypes.func.isRequired,

  isShow: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  buttonLabel: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.string,
};

Alert.defaultProps = {
  isShow: false,
  title: '',
  message: 'One of title and Message is requirement.',
  buttonLabel: 'Confirm',
  color: 'basic',
  position: 'top-center',
};

export default Alert;
