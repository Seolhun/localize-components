import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  Button,
} from '@seolhun/localize-components-button';
import {
  Position,
  PositionType,
  StyledProps,
  Themes,
  ThemesType,
} from '@seolhun/localize-components-styled-types';
import {
  getPositionStyle,
  getThemeStyle,
} from '@seolhun/localize-components-utils';

const styles = require('./Modal.css');

export interface ModalProps {
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  onClickClose: (...args: any[]) => void;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  message: string;
  // isNotRequired
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  buttonLabel?: string;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  className?: string;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  theme?: ThemesType;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  isShow?: boolean;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  position?: PositionType;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  title?: string;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  zIndex?: number;
}

const Modal: React.SFC<ModalProps> = ({
  onClickClose,
  message,
  // is Not Required
  buttonLabel = 'Confirm',
  className = null,
  theme = Themes.royal_blue,
  isShow = false,
  position = Position.CENTER,
  title = '',
  zIndex = 1000,
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <ModalContainer
      className={classnames(
        className,
        '__Localize__',
      )}
    >
      <CoverBackground />
      <div
        className={classnames(
          styles.alert,
          getThemeStyle(theme),
          getPositionStyle(position),
        )}
      >
        <div className={styles.titleDiv}>
          {title}
        </div>
        <div className={styles.messageDiv}>
          {message}
        </div>
        <div className={styles.buttonDiv}>
          <Button className={`btn btn-${theme}`} onClick={onClickClose}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div<StyledProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: ${(({ zIndex }) => zIndex)}
`;

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

export default Modal;
