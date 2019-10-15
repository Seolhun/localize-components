import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import { Button } from '@seolhun/localize-components-button';
import {
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';

import { LocalizeModal, LocalizeModalProps } from '../modal';

const DEFAULT_CLASSNAME = '__Localize__Alert';

export interface AlertProps extends LocalizeModalProps {
  /**
   * Set this to change Modal button label
   * @default null
   */
  buttonLabel?: string;
}

const StyledModal = styled(LocalizeModal)<AlertProps, ILocalizeTheme>({
  maxHeight: '450px',
  height: '200px',

  [`.${DEFAULT_CLASSNAME}__Buttons`]: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

export const Alert: FC<AlertProps> = ({
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
      <div className={`${DEFAULT_CLASSNAME}__Buttons`}>
        <Button onClick={onClose} {...props}>
          {buttonLabel}
        </Button>
      </div>
    </StyledModal>
  );
};

export default Alert;
