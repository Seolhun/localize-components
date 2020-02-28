import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import { LocalizeButton } from '@seolhun/localize-components-atomic';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeModal, LocalizeModalProps } from '../modal';

const DEFAULT_CLASSNAME = '__Localize__Alert';

interface LocalizeAlertProps extends LocalizeModalProps {
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

const StyledAlertButtonContainer = styled.div({
  position: 'absolute',
  bottom: '0.5rem',
  right: '0.5rem',
});

const LocalizeAlert: React.FC<LocalizeAlertProps> = ({
  onClose,
  className,
  buttonLabel = 'Confirm',
  ...props
}) => {
  return (
    <StyledModal
      className={classnames(DEFAULT_CLASSNAME, className)}
      onClose={onClose}
      {...props}
    >
      <StyledAlertButtonContainer className={`${DEFAULT_CLASSNAME}__Buttons`}>
        <LocalizeButton onClick={onClose} {...props}>
          {buttonLabel}
        </LocalizeButton>
      </StyledAlertButtonContainer>
    </StyledModal>
  );
};

export { LocalizeAlert, LocalizeAlertProps };

export default LocalizeAlert;
