import React from 'react';
import classnames from 'classnames';
import {
  Button,
} from '@seolhun/localize-components-button';
import {
  LocalizeColor,
  LocalizeColorType,
  LocalizePosition,
  LocalizePositionType,
} from '@seolhun/localize-components-types';
import {
  SetStyleUtils
} from '@seolhun/localize-components-utils';

const styles = require('./Alert.scss');

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
  color = LocalizeColor.PURPLE,
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
