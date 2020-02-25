import React from 'react';
import ReactDOM from 'react-dom';

import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  LocalizeStyledProps,
  ILocalizeTheme,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Modal';

export interface LocalizeModalProps extends LocalizeStyledProps {
  /**
   * Set this toggle Modal content (children)
   */
  children: React.ReactNode;

  /**
   * Set this to change Modal visibility
   */
  isShow: boolean;

  /**
   * Set this to change Modal visibility
   */
  onClose: () => void;

  /**
   * Set render targetElement for Modal
   */
  targetElement?: Element;
}

const LocalizeModalWrapper = styled.div<LocalizeBaseStyledProps>(
  ({ zIndex = 100 }) => {
    return {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      zIndex,
    };
  },
);

const LocalizeModalContainer = styled.div<LocalizeStyledProps, ILocalizeTheme>(
  ({ theme }) => {
    return {
      position: 'fixed',
      left: '50vw',
      top: '50vh',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      maxWidth: '30rem',
      minHeight: '10rem',
      height: 'auto',
      maxHeight: '100%',
      backgroundColor: theme.localized.colors.primaryBackground01,
      borderRadius: '5px',
    };
  },
);

const CloseButton = styled.span({
  position: 'absolute',
  display: 'inline-block',
  top: 0,
  right: 0,

  width: '2rem',
  height: '2rem',
  transform: 'translate(-6px, -30px)',
  cursor: 'pointer',
});

export const LocalizeModal: React.FC<LocalizeModalProps> = ({
  isShow,
  children,
  onClose,
  targetElement,
  ...props
}) => {
  const modalWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isShow && modalWrapperRef && modalWrapperRef.current) {
      modalWrapperRef.current.focus();
    }
  }, [isShow]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleClickOutside = (event: React.MouseEvent) => {
    if (
      modalWrapperRef &&
      modalWrapperRef.current &&
      modalWrapperRef.current === event.target
    ) {
      onClose();
    }
  };

  if (!isShow) {
    return null;
  }

  return ReactDOM.createPortal(
    <LocalizeModalWrapper
      ref={modalWrapperRef}
      className={classnames(DEFAULT_CLASSNAME)}
      aria-label="modal"
      aria-modal="true"
      tabIndex={0}
      role="dialog"
      onKeyDown={handleKeyDown}
      onClick={handleClickOutside}
      data-testid="bd-modal-background"
      {...props}
    >
      <LocalizeModalContainer {...props}>
        <CloseButton />
        {children}
      </LocalizeModalContainer>
    </LocalizeModalWrapper>,
    targetElement || document.body,
  );
};

export default LocalizeModal;
