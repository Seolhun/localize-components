import React from 'react';
import ReactDOM from 'react-dom';

import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  LocalizeStyledProps,
  LocalizeThemeProps,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';
import { useDisclosure } from '@seolhun/localize-components-hooks';

const DEFAULT_CLASSNAME = '__Localize__Modal';

interface LocalizeModalProps extends LocalizeStyledProps {
  /**
   * Set this to change Modal visibility
   */
  isShow?: boolean;

  /**
   * Set this to change Modal visibility
   */
  onClose?: () => void;

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

const LocalizeModalContainer = styled.div<
  LocalizeStyledProps,
  LocalizeThemeProps
>(({ theme }) => {
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
    backgroundColor: theme.colors.primaryBackground01,
    borderRadius: '5px',
  };
});

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

const LocalizeModal: React.FC<LocalizeModalProps> = ({
  children,
  className,
  isShow = false,
  onClose = () => null,
  targetElement,
  ...props
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const { isOpen, onSet, onToggle } = useDisclosure(isShow);

  const handleToggleOpenStatus = () => {
    if (onClose) {
      onClose();
    }

    onToggle();
  };

  const handleOnCloseByKey = ({ key }) => {
    if (wrapperRef.current) {
      if (document.contains(wrapperRef.current) && key === 'Escape') {
        handleToggleOpenStatus();
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleOnCloseByKey);
    return () => {
      document.removeEventListener('keydown', handleOnCloseByKey);
    };
  }, []);

  React.useEffect(() => {
    onSet(isShow);
  }, [isShow]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <LocalizeModalWrapper
      ref={wrapperRef}
      className={classnames(DEFAULT_CLASSNAME, className)}
      aria-label="modal"
      aria-modal="true"
      role="dialog"
      tabIndex={0}
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

export { LocalizeModal, LocalizeModalProps };

export default LocalizeModal;
