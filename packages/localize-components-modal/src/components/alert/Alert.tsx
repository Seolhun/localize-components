import React from 'react';

import styled from '@emotion/styled';
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
  zIndex?: number;
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
  zIndex = 1000,
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <>
      <CoverBackground />
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

const CoverBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 299;
  cursor: pointer;
`;

export default Alert;
