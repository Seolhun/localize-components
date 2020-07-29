import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import { LocalizeButton } from '@seolhun/localize-components-atomic';
import {
  LocalizeThemeProps,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeModal, LocalizeModalProps } from '../modal';

const DEFAULT_CLASSNAME = '__Localize__Alert';

export interface LocalizeAlertProps extends LocalizeProps, LocalizeModalProps {
  /**
   * Set this to change Alert Click
   */
  onClick?: () => void;

  /**
   * Set this to change Modal button label
   * @default null
   */
  buttonLabel?: string;
}

const StyledModal = styled(LocalizeModal)<
  LocalizeAlertProps,
  LocalizeThemeProps
>({
  minHeight: '200px',
  paddingBottom: '3rem',
});

const AlertButtonContainer = styled.div({
  position: 'absolute',
  bottom: '0.5rem',
  right: '0.5rem',
});

const LocalizeAlert: React.FC<LocalizeAlertProps> = ({
  onClose,
  onClick,
  className,
  buttonLabel = 'Confirm',
  ...props
}) => {
  const onCloseWithClick = () => {
    if (onClick) {
      onClick();
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <StyledModal
      {...props}
      className={classnames(DEFAULT_CLASSNAME, className)}
      onClose={onClose}
    >
      <AlertButtonContainer>
        <LocalizeButton onClick={onCloseWithClick}>
          {buttonLabel}
        </LocalizeButton>
      </AlertButtonContainer>
    </StyledModal>
  );
};

export { LocalizeAlert };
export default LocalizeAlert;
