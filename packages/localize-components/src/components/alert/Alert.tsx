import * as React from 'react';
import * as classnames from 'classnames';
import { Button } from '@seolhun/localize-components';

import {
  Color,
  ColorType,
  Position,
  PositionType,
} from '@seolhun/localize-components-types';
import { SetStyleUtils } from '@seolhun/localize-components-utils';

const styles = require('./Alert.scss');

export interface AlertProps {
  onClickClose: (...args: any[]) => any;
  message: string;
  // isNotRequired
  buttonLabel?: string;
  className?: string | undefined;
  color?: ColorType;
  isShow?: boolean;
  position?: PositionType;
  title?: string;
}

const Alert: React.SFC<AlertProps> = ({
  onClickClose,
  message,
  // is Not Required
  buttonLabel = 'Confirm',
  className = null,
  color = Color.BASIC,
  isShow = false,
  position = Position.CENTER,
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
