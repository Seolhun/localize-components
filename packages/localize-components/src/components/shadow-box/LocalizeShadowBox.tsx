import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import { LocalizeProps } from '@seolhun/localize-components-styled-types';
import { useDisclosure } from '@seolhun/localize-components-hooks';

import { LAYOUT, fadeIn } from '../../styles';

const DEFAULT_CLASSNAME = '__Localize__ShadowBox';

interface LocalizeShadowBoxProps extends LocalizeProps {
  /**
   * Set this to change LocalizeShadowBox isShow
   */
  isShow?: boolean;

  /**
   * Set this to change LocalizeShadowBox onClose
   */
  onClose?: (...args: any[]) => any;
}

const LocalizeShadowBoxWrapper = styled.section({
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  height: '100vh',
  left: '0',
  position: 'fixed',
  top: '0',
  width: '100vw',
  zIndex: LAYOUT.Z_INDEX.SHADOW_BOX,
  animation: `${fadeIn()} 0.35s ease-in-out`,
});

const LocalizeShadowBoxContainer = styled.div({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const CloseContainer = styled.div({
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  height: '50px',
  justifyContent: 'center',
  position: 'absolute',
  right: '10em',
  top: '10em',
  width: '50px',
  zIndex: LAYOUT.Z_INDEX.SHADOW_BOX + 1,
});

interface CloseIconProps {
  deg: string;
}

const CloseIcon = styled.span<CloseIconProps>(({ deg }) => {
  return {
    border: '0.03em solid #b3b3b3',
    cursor: 'pointer',
    position: 'absolute',
    transform: `rotate(${deg}deg)`,
    width: '38px',
  };
});

const LocalizeShadowBoxContent = styled.div({
  maxWidth: `${LAYOUT.CONTENT.MAX_WIDTH}px`,
});

const LocalizeShadowBox: React.FC<LocalizeShadowBoxProps> = ({
  children,
  className,
  isShow = false,
  onClose = () => null,
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

  return (
    <LocalizeShadowBoxWrapper
      ref={wrapperRef}
      className={classnames(DEFAULT_CLASSNAME, className)}
    >
      <LocalizeShadowBoxContainer>
        <CloseContainer onClick={handleToggleOpenStatus}>
          <CloseIcon deg={'-45'} />
          <CloseIcon deg={'45'} />
        </CloseContainer>
        <LocalizeShadowBoxContent>{children}</LocalizeShadowBoxContent>
      </LocalizeShadowBoxContainer>
    </LocalizeShadowBoxWrapper>
  );
};

export { LocalizeShadowBoxProps, LocalizeShadowBox };

export default LocalizeShadowBox;
