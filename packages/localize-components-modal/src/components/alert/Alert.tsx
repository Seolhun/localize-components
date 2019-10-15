import React, { ReactNode, FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import { Button } from '@seolhun/localize-components-button';
import {
  LocalizeStyledProps,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';

import { LocalizeModal } from '../modal';

const DEFAULT_CLASSNAME = '__Localize__Alert';

export interface AlertProps extends LocalizeStyledProps {
  /**
   * Set this to change Modal body children node
   */
  children: ReactNode;

  /**
   * Set this to toggle Alert Modal event handler
   */
  onClick: (...args: any[]) => void;

  /**
   * Set this to change Modal showing or not
   */
  isShow?: boolean;

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
  onClick,
  className,
  buttonLabel = 'Confirm',
  isShow = false,
  ...props
}) => {

  return (
    <StyledModal
      className={classnames(DEFAULT_CLASSNAME, className)}
      onClick={onClick}
      {...props}
    >
      <div className={`${DEFAULT_CLASSNAME}__Buttons`}>
        <Button onClick={onClick} {...props}>
          {buttonLabel}
        </Button>
      </div>
    </StyledModal>
  );
};

export default Alert;
