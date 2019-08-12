import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

export interface SidebarItemsContainerProps {
  /**
   * Set this to change SidebarItemsContainer children
   */
  children: ReactNode;

  /**
   * Set this to change SidebarItemsContainer className
   * @default false
   */
  isSizer?: boolean;
  /**
   * Set this to change SidebarItemsContainer className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change SidebarItemsContainer onBlur
   * @default 'main'
   */
  onBlur?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItemsContainer onClick
   * @default () => null
   */
  onClick?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItemsContainer onFocus
   * @default () => null
   */
  onFocus?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItemsContainer onMouseOut
   * @default () => null
   */
  onMouseOut?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItemsContainer onMouseOver
   * @default () => null
   */
  onMouseOver?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItemsContainer style
   * @default {}
   */
  style?: {};
}

const StyledSidebarItemsContainer = styled.div<SidebarItemsContainerProps>(() => {
  return {

  }
})

export const SidebarItemsContainer: FunctionComponent<SidebarItemsContainerProps> = ({
  children,
  className,
  style,
  isSizer = false,
  ...props
}) => {
  return (
    <StyledSidebarItemsContainer
      className={classnames(
        '__Localize__SidebarItemsContainer',
        className
      )}
      isSizer={isSizer}
      css={style}
      {...props}
    >
      {children}
    </StyledSidebarItemsContainer>
  )
}

export default SidebarItemsContainer;
