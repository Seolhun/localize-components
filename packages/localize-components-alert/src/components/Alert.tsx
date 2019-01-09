import React from 'react';

import classnames from 'classnames';

import {
  Button,
} from '@seolhun/localize-components-button';
import {
  Position,
  PositionType,
  Themes,
  ThemeType,
} from '@seolhun/localize-components-types';
import {
  getPositionStyle,
  getThemeStyle,
} from '@seolhun/localize-components-utils';

const styles = require('./Alert.css');

export interface AlertProps {
  onClickClose: (...args: any[]) => void;
  message: string;
  // isNotRequired
  buttonLabel?: string;
  className?: string | undefined;
  theme?: ThemeType;
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
  theme = Themes.PRIMARY,
  isShow = false,
  position = Position.CENTER,
  title = '',
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <>
      <div className={styles.coverBackground} />
      <div
        className={classnames(
          styles.alert,
          className,
          getThemeStyle(theme),
          getPositionStyle(position),
        )}
      >
        <div className={styles.titleDiv}>{title}</div>
        <div className={styles.messageDiv}>{message}</div>
        <div className={styles.buttonDiv}>
          <Button className={`btn btn-${theme}`} onClick={onClickClose}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Alert;
