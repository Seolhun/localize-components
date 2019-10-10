import React, { ReactNode, FC, useCallback } from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  Position,
  Size,
  LocalizeStyledProps,
  LocalizeTheme,
  LocalizeThemes,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';
import {
  getIsLightenTheme,
  getPositionStyle,
  getValidThemeObject,
} from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__Modal';

export interface ModalProps extends LocalizeStyledProps {
  /**
   * Set this to change Modal showing or not
   */
  isShow: boolean;
  /**
   * Set this to toggle Modal onClick
   */
  onClick: (...args: any[]) => void;
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
}

const ModalWrapper = styled.div<LocalizeStyledProps>(({
  zIndex,
}) => {
  return {
    zIndex,
  }
})

const CoverBackground = styled.div<LocalizeStyledProps>`
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

const CloseButton = styled.div<LocalizeStyledProps>`
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

  color: ${({ subColor = LocalizeTheme.secondaryColor }) => {
    if (getIsLightenTheme(subColor)) {
      return LocalizeThemes.dark_grey;
    }
    return LocalizeThemes.white;
  }};

  &:hover {
    color: ${({ subColor = LocalizeTheme.secondaryColor }) => {
      if (getIsLightenTheme(subColor)) {
        return LocalizeThemes.white;
      }
      return LocalizeThemes.dark_grey;
    }};
    background-color: ${({ subColor = LocalizeTheme.secondaryColor }) => {
      if (getIsLightenTheme(subColor)) {
        return LocalizeThemes.light_grey;
      }
      return LocalizeThemes.white;
    }};
  }
`;

const ModalContainer = styled.div<LocalizeStyledProps, ILocalizeTheme>(
  ({
    position = Position.CENTER,
    size = Size.MEDIUM,
    zIndex = 1000,
    theme,
    ...props
  }) => {
    const validTheme = getValidThemeObject(props, theme);

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
      backgroundColor: validTheme.subColor,
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

const ModalContent = styled.div<LocalizeStyledProps>`
  color: ${({ subColor = LocalizeTheme.secondaryColor }) => {
    if (getIsLightenTheme(subColor)) {
      return LocalizeThemes.dark_grey;
    }
    return LocalizeThemes.white;
  }};
  font-size: 16px;
  letter-spacing: 0.2px;
  width: 100%;

  &.__Localize__Modal__Header {
    border-bottom: 0.03rem solid ${LocalizeThemes.light_grey};
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
    border-top: 0.03rem solid ${LocalizeThemes.light_grey};
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

export const Modal: FC<ModalProps> = ({
  onClick,
  isShow,
  // isNotRequired
  className,
  body = null,
  footer = null,
  header = null,
  position = Position.CENTER,
  size = Size.MEDIUM,
  mainColor,
  subColor,
  zIndex = 1000,
}) =>  {
  const handleIsShow = useCallback(() => {
    onClick();
  }, []);

  if (!isShow) {
    return null;
  }

  console.error('@@@', isShow);

  return (
    <ModalWrapper className={classnames(DEFAULT_CLASSNAME)} zIndex={zIndex}>
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
          onClick={handleIsShow}
          mainColor={mainColor}
          subColor={subColor}
        >
          X
        </CloseButton>
        {header && (
          <ModalContent
            className={classnames(`${DEFAULT_CLASSNAME}__Header`)}
            size={size}
            mainColor={mainColor}
            subColor={subColor}
          >
            {header}
          </ModalContent>
        )}
        {body && (
          <ModalContent
            className={classnames(`${DEFAULT_CLASSNAME}__Body`)}
            size={size}
            mainColor={mainColor}
            subColor={subColor}
          >
            {body}
          </ModalContent>
        )}
        {footer && (
          <ModalContent
            className={classnames(`${DEFAULT_CLASSNAME}__Footer`)}
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

export default Modal;
