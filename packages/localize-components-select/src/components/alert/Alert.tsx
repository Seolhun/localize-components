import React from 'react';
import * as classnames from 'classnames';
import {
  Button,
  LocalizeColor,
  LocalizeColorType,
  LocalizePosition,
  LocalizePositionType,
  SetStyleUtils
} from '@seolhun/localize-components-atomic';

const styles = require('./Alert.css');

export interface AlertProps {
  onClickClose: (...args: any[]) => void;
  message: string;
  // isNotRequired
  buttonLabel?: string;
  className?: string | undefined;
  color?: LocalizeColorType;
  isShow?: boolean;
  position?: LocalizePositionType;
  title?: string;
}

const Alert: React.SFC<AlertProps> = ({
  onClickClose,
  message,
  // is Not Required
  buttonLabel = 'Confirm',
  className = null,
  color = LocalizeColor.BASIC,
  isShow = false,
  position = LocalizePosition.CENTER,
  title = '',
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <React.Fragment>
      <div className={styles.coverBackground} />
      <div
        className={classnames(`
          ${styles.alert}
          ${className}
          ${SetStyleUtils.setColor(styles, color)}
          ${SetStyleUtils.setPosition(styles, position)}
        `)}
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
