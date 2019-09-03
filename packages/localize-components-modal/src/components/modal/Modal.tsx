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
  getValidTheme,
  getPositionStyle,
} from '@seolhun/localize-components-styled-utils';

export interface ModalProps {
  /**
   * Set this to toggle Modal event handler
   * @default null
   */
  onClick?: (...args: any[]) => void;
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
   * Set this to change Modal mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Modal subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change Modal rendering children node
   * @default 'center'
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

  static getDerivedStateFromProps(props, state) {
    if (props.onClick && props.isShow !== state.isShow) {
      return {
        isShow: props.isShow,
      };
    }
    return null;
  }

  handleIsShow = () => {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
      return;
    }

    this.setState(({ isShow }) => {
      return {
        isShow: !isShow,
      };
    });
  };

  render() {
    const {
      body = null,
      className = '',
      footer = null,
      header = null,
      mainColor = ThemeConfig.MAIN_THEME,
      position = Position.CENTER,
      size = Size.MEDIUM,
      subColor = ThemeConfig.SUB_THEME,
      zIndex = 1000,
    } = this.props;
    const { isShow } = this.state;

    if (!isShow) {
      return null;
    }

    return (
      <ModalWrapper className={classnames('__Localize__')} zIndex={zIndex}>
        <CoverBackground zIndex={zIndex} />
        <ModalContainer
          className={classnames(className)}
          position={position}
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
            X
          </CloseButton>
          {header && (
            <ModalContent
              className={classnames('__Localize__Modal__Header')}
              size={size}
              mainColor={mainColor}
              subColor={subColor}
            >
              {header}
            </ModalContent>
          )}
          {body && (
            <ModalContent
              className={classnames('__Localize__Modal__Body')}
              size={size}
              mainColor={mainColor}
              subColor={subColor}
            >
              {body}
            </ModalContent>
          )}
          {footer && (
            <ModalContent
              className={classnames('__Localize__Modal__Footer')}
              size={size}
              mainColor={mainColor}
              subColor={subColor}
            >
              {footer}
            </ModalContent>
          )}
        </ModalContainer>
      </ModalWrapper>
    );
  }
}

const ModalWrapper = styled.div<StyledProps>`
  z-index: ${({ zIndex = 1000 }) => zIndex};
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
  z-index: ${({ zIndex = 1000 }) => zIndex - 2};
`;

const CloseButton = styled.div<StyledProps>`
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  line-height: 1;
  padding: 10px;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: ${({ zIndex = 1000 }) => zIndex - 1};

  color: ${({ subColor = ThemeConfig.SUB_THEME }) => {
    if (getIsLightenTheme(subColor)) {
      return Themes.dark_gray;
    }
    return Themes.white;
  }};

  &:hover {
    color: ${({ subColor = ThemeConfig.SUB_THEME }) => {
      if (getIsLightenTheme(subColor)) {
        return Themes.white;
      }
      return Themes.dark_gray;
    }};
    background-color: ${({ subColor = ThemeConfig.SUB_THEME }) => {
      if (getIsLightenTheme(subColor)) {
        return Themes.light_gray;
      }
      return Themes.white;
    }};
  }
`;

const ModalContainer = styled.div<StyledProps>(
  ({
    position = Position.CENTER,
    size = Size.MEDIUM,
    subColor = ThemeConfig.SUB_THEME,
    zIndex = 1000,
  }) => {
    const getMaxHeight = () => {
      switch (size) {
        case Size.LARGE:
          return '800px';
        case Size.MEDIUM:
          return '650px';
        default:
          return '500px';
      }
    };

    const getMaxWidth = () => {
      switch (size) {
        case Size.LARGE:
          return '800px';
        case Size.MEDIUM:
          return '650px';
        default:
          return '500px';
      }
    };

    return {
      backgroundColor: getValidTheme(subColor),
      borderRadius: '6px',
      boxSizing: 'border-box',
      height: '100%',
      margin: 'auto',
      maxHeight: getMaxHeight(),
      maxWidth: getMaxWidth(),
      position: 'fixed',
      width: '100%',
      zIndex: zIndex - 1,
      ...getPositionStyle(position),
    };
  }
);

const ModalContent = styled.div<StyledProps>`
  color: ${({ subColor = ThemeConfig.SUB_THEME }) => {
    if (getIsLightenTheme(subColor)) {
      return Themes.dark_gray;
    }
    return Themes.white;
  }};
  font-size: 16px;
  letter-spacing: 0.2px;
  width: 100%;

  &.__Localize__Modal__Header {
    border-bottom: 0.03rem solid ${Themes.light_gray};
    border-radius: 6px 6px 0 0;
    font-size: 22px;
    height: 20%;
    overflow: auto;
    width: 92%;
  }

  &.__Localize__Modal__Body {
    height: 60%;
    overflow: auto;
  }

  &.__Localize__Modal__Footer {
    border-top: 0.03rem solid ${Themes.light_gray};
    bottom: 0;
    height: 20%;
    overflow: auto;
    position: absolute;
  }

  & > div {
    display: flex;
    padding: 0 20px;
  }
`;

export default Modal;
