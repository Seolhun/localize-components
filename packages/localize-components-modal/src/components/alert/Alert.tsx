import React, { ReactNode, FC, useMemo } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import { Button } from '@seolhun/localize-components-button';
import { getThemeObject } from '@seolhun/localize-components-styled-utils';
import {
  PositionType,
  SizeType,
  LocalizeStyledProps,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';

import Modal from '../modal';

const DEFAULT_CLASSNAME = '__Localize__Alert';

export interface AlertProps extends LocalizeStyledProps {
  /**
   * Set this to change Modal body children node
   */
  body: ReactNode | string;
  /**
   * Set this to toggle Alert Modal event handler
   */
  onClick: (...args: any[]) => void;
  // isNotRequired
  /**
   * Set this to change Modal button label
   * @default null
   */
  buttonLabel?: string;
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
   * Set this to change Modal rendering children node
   * @default null
   */
  zIndex?: number;
}

const StyledModal = styled(Modal)<AlertProps, ILocalizeTheme>({
  maxHeight: '450px',
  height: '200px',

  [`.${DEFAULT_CLASSNAME}__Buttons`]: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

export const Alert: FC<AlertProps> = ({
  body,
  onClick,
  // is Not Required
  header = null,
  buttonLabel = 'Confirm',
  isShow = false,
  className,
  mainColor,
  subColor,
  ...props
}) => {

  return (
    <StyledModal
      className={classnames(DEFAULT_CLASSNAME, className)}
      onClick={onClick}
      header={<div>{header}</div>}
      body={<div>{body}</div>}
      footer={
        <div className={`${DEFAULT_CLASSNAME}__Buttons`}>
          <Button onClick={onClick} mainColor={mainColor} subColor={subColor}>
            {buttonLabel}
          </Button>
        </div>
      }
      isShow={isShow}
      {...props}
    />
  );
};

export default Alert;
