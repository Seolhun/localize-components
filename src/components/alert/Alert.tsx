import * as React from 'react';
import { Color, ColorType, Position, PositionType } from '../../types';
import Button from '../button';

const styles = require('./Alert.css');

export interface AlertProps {
  onClickClose: () => any;
  message: string;
  // isNotRequired
  title?: string;
  isShow?: boolean;
  buttonLabel?: string;
  color?: ColorType;
  position?: PositionType;
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

const Alert: React.SFC<AlertProps> = ({
  onClickClose,
  message,
  // is Not Required
  isShow = false,
  title = '',
  buttonLabel = 'Confirm',
  color = 'basic',
  position = Position.C,
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <React.Fragment>
      <div className={styles.coverBackground} />
      <div
        className={`${styles.alert} ${setColor(color)} ${setPosition(
          position
        )}`}
      >
        <div className={styles.titleDiv}>{title}</div>
        <div className={styles.messageDiv}>{message}</div>
        <div className={styles.buttonDiv}>
          <Button className={`btn btn-${color}`} onClick={onClickClose}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Alert;
