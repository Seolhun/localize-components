import React, { Component, ReactNode } from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  Position,
  PositionType,
  Size,
  SizeType,
  StyledProps,
  ThemeConfig,
  Themes,
  ThemesType,
} from '@seolhun/localize-components-styled-types';
import {
  getIsLightenTheme,
  getPositionStyle,
  getValidTheme,
} from '@seolhun/localize-components-styled-utils';

export interface ModalProps {
  /**
   * Set this to toggle Modal event handler
   * @default null
   */
  onClickClose?: (...args: any[]) => void;
  /**
   * Set this to change Modal className
   * @default null
   */
  className?: string;
  /**
   * Set this to change Modal showing or not
   * @default null
   */
  isShow?: boolean;
  /**
   * Set this to change Modal size
   * @default medium
   */
  size?: SizeType;
  /**
   * Set this to change Modal ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Modal ours subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  position?: PositionType;
  /**
   * Set this to change Modal header children node
   * @default null
   */
  header?: ReactNode | string;
  /**
   * Set this to change Modal body children node
   * @default null
   */
  body?: ReactNode | string;
  /**
   * Set this to change Modal footer children node
   * @default null
   */
  footer?: ReactNode | string;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  zIndex?: number;
}

interface ModalState {
  isShow: boolean;
}

class Modal extends Component<ModalProps, ModalState> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: !!props.isShow,
    };
  }

  handleIsShow = () => {
    const {
      onClickClose,
    } = this.props;

    if (onClickClose) {
      onClickClose();
      return;
    }

    this.setState(({ isShow }) => {
      return {
        isShow: !isShow,
      };
    });
  }

  render() {
    const {
      body = null,
      className = null,
      footer = null,
      header = null,
      mainColor = ThemeConfig.MAIN_THEME,
      position = Position.CENTER,
      size = Size.MEDIUM,
      subColor = ThemeConfig.SUB_THEME,
      zIndex = 1000,
    } = this.props;
    const {
      isShow,
    } = this.state;

    if (!isShow) {
      return null;
    }

    return (
      <ModalWrapper
        className={classnames(
          '__Localize__',
        )}
        zIndex={zIndex}
      >
        <CoverBackground
          zIndex={zIndex}
        />
        <ModalContainer
          className={classnames(
            className,
            getPositionStyle(position),
          )}
          size={size}
          mainColor={mainColor}
          subColor={subColor}
          zIndex={zIndex}
        >
          <CloseButton
            onClick={this.handleIsShow}
            mainColor={mainColor}
            subColor={subColor}
          >
            <span>
              X
            </span>
          </CloseButton>
          {header && (
            <ModalContent
              className={classnames(
                'Header',
              )}
              size={size}
              mainColor={mainColor}
              subColor={subColor}
            >
              <div>
                {header}
              </div>
            </ModalContent>
          )}
          {body && (
            <ModalContent
              className={classnames(
                'Body',
              )}
              size={size}
              mainColor={mainColor}
              subColor={subColor}
            >
              <div>
                {body}
              </div>
            </ModalContent>
          )}
          {footer && (
            <ModalContent
              className={classnames(
                'Footer',
              )}
              size={size}
              mainColor={mainColor}
              subColor={subColor}
            >
              <div>
                {footer}
              </div>
            </ModalContent>
          )}
        </ModalContainer>
      </ModalWrapper>
    );
  }
}

const ModalWrapper = styled.div<StyledProps>`
  z-index: ${(({ zIndex = 1000 }) => zIndex)}
`;

const CoverBackground = styled.div<StyledProps>`
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: ${(({ zIndex = 1000 }) => zIndex - 2)}
`;

const CloseButton = styled.div<StyledProps>`
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  height: 12px;
  line-height: 1;
  padding: 0.6rem;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  z-index: ${(({ zIndex = 1000 }) => zIndex - 1)};

  color: ${({
    subColor = ThemeConfig.SUB_THEME,
  }) => {
    if (getIsLightenTheme(subColor)) {
      return Themes.dark_gray;
    }
    return Themes.white;
  }};

  &:hover {
    color: ${({
      subColor = ThemeConfig.SUB_THEME,
    }) => {
      if (getIsLightenTheme(subColor)) {
        return Themes.white;
      }
      return Themes.dark_gray;
    }};
    background-color: ${({
      subColor = ThemeConfig.SUB_THEME,
    }) => {
      if (getIsLightenTheme(subColor)) {
        return Themes.light_gray;
      }
      return Themes.white;
    }};
  }
`;

const ModalContainer = styled.div<StyledProps>`
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: ${({
    subColor = ThemeConfig.SUB_THEME,
  }) => {
    return getValidTheme(subColor);
  }};
  border-radius: 6px;
  box-sizing: border-box;
  margin: auto;
  max-height: ${({ size }) => {
    switch (size) {
      case Size.LARGE:
        return '800px';
      case Size.MEDIUM:
        return '650px';
      default:
        return '500px';
    }
  }};
  height: 100%;
  position: fixed;
  max-width: ${({ size }) => {
    switch (size) {
      case Size.LARGE:
        return '600px';
      case Size.MEDIUM:
        return '500px';
      default:
        return '400px';
    }
  }};
  width: 100%;
  z-index: ${(({ zIndex = 1000 }) => zIndex - 1)}
`;

const ModalContent = styled.div<StyledProps>`
  color: ${({
    subColor = ThemeConfig.SUB_THEME,
  }) => {
    if (getIsLightenTheme(subColor)) {
      return Themes.dark_gray;
    }
    return Themes.white;
  }};
  font-size: 16px;
  letter-spacing: 0.2px;
  width: 100%;

  &.Header {
    border-bottom: 0.03em solid ${Themes.light_gray};
    border-radius: 6px 6px 0 0;
    font-size: 22px;
    height: 20%;
    overflow: auto;
  }

  &.Body {
    height: 60%;
    overflow: auto;
  }

  &.Footer {
    border-top: 0.03em solid ${Themes.light_gray};
    bottom: 0;
    height: 20%;
    overflow: auto;
    position: absolute;
  }

  & > div {
    display: flex;
    height: 100%;
    padding: 0 20px;
  }
`;

export default Modal;
