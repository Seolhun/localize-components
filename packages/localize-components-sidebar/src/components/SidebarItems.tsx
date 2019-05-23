import React, { SFC, ReactNode } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

export interface SidebarItemsProps {
  /**
   * Set this to change SidebarItems children
   */
  children: ReactNode;

  /**
   * Set this to change SidebarItems className
   * @default false
   */
  isSizer?: boolean;
  /**
   * Set this to change SidebarItems className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change SidebarItems onBlur
   * @default 'main'
   */
  onBlur?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItems onClick
   * @default () => null
   */
  onClick?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItems onFocus
   * @default () => null
   */
  onFocus?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItems onMouseOut
   * @default () => null
   */
  onMouseOut?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItems onMouseOver
   * @default () => null
   */
  onMouseOver?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItems style
   * @default {}
   */
  style?: {};
}

const StyledSidebarItemsItems = styled.div<SidebarItemsProps>(() => {
  return {

  }
})

export const SidebarItems: SFC<SidebarItemsProps> = ({
  children,
  className,
  style,
  isSizer = false,
  ...props
}) => {
  return (
    <StyledSidebarItemsItems
      className={classnames(
        '__Localize__SidebarItems',
        className
      )}
      isSizer={isSizer}
      css={style}
      {...props}
    >
      {children}
    </StyledSidebarItemsItems>
  )
}

export default SidebarItems;
