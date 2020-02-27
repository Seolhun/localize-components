import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import { LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

export interface SidebarItemsContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    LocalizeBaseStyledProps {
  /**
   * Set this to change SidebarItemsContainer className
   * @default false
   */
  isSizer?: boolean;
}

const StyledSidebarItemsContainer = styled.div<SidebarItemsContainerProps>(
  () => {
    return {};
  },
);

export const SidebarItemsContainer: React.FC<SidebarItemsContainerProps> = ({
  children,
  className,
  isSizer = false,
  ...props
}) => {
  return (
    <StyledSidebarItemsContainer
      className={classnames('__Localize__SidebarItemsContainer', className)}
      isSizer={isSizer}
      {...props}
    >
      {children}
    </StyledSidebarItemsContainer>
  );
};

export default SidebarItemsContainer;
