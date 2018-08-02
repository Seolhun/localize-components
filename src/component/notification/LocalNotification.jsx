import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import styles from './LocalNotification.scss';

const COLOR = {
  BASIC: 'basic',
  SUCCESS: 'success',
  PRIMARY: 'primary',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger',
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

const POSITION = {
  TL: 'top-left',
  TR: 'top-right',
  TC: 'top-center',
  BL: 'bottom-left',
  BR: 'bottom-right',
  BC: 'bottom-center',
  C: 'center',
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

let timeouts;
const setCloseTimeOut = ({ onClickClose, holdingTime }) => {
  timeouts = setTimeout(() => {
    onClickClose();
  }, holdingTime);
};

const LocalNotification = ({
  onClickClose,
  children,

  isShow,
  title,
  message,
  holdingTime,
  color,
  position,
}) => {
  if (!isShow) {
    return null;
  }

  if (holdingTime > 0 && !timeouts) {
    setCloseTimeOut({ onClickClose, holdingTime });
  }

  return (
    <Fragment>
      <div className={styles.coverBackground} />
      <div className={`${styles.notification} ${setColor(color)} ${setPosition(position)}`}>
        <div className={styles.titleDiv}>
          {title}
        </div>
        <div className={styles.messageDiv}>
          {message}
        </div>
        <div className={styles.buttonDiv}>
          {children}
        </div>
      </div>
    </Fragment>
  );
};

LocalNotification.propTypes = {
  onClickClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,

  isShow: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  holdingTime: PropTypes.number,
  color: PropTypes.string,
  position: PropTypes.string,
};

LocalNotification.defaultProps = {
  isShow: false,
  title: '',
  message: 'One of title and Message is requirement.',
  color: 'basic',
  position: 'top-center',
  holdingTime: 0,
};


export default LocalNotification;
