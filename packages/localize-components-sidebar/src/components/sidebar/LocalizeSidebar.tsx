import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeStyledProps,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';

import SidebarItemLabel from './SidebarItemLabel';
import SidebarItemIcon from './SidebarItemIcon';
import SidebarItemsContainer from './SidebarItemsContainer';

export interface LocalizeSidebarItemProps {
  /**
   * Set this to change SidebarItem label
   */
  label: string;

  /**
   * Set this to change SidebarItem route path
   */
  to: string;

  /**
   * Set this to render SidebarItem rendering icon
   * @default undefined
   */
  renderIcon: (item: LocalizeSidebarItemProps) => React.ReactNode;

  /**
   * Set this to render SidebarItem rendering node
   * @default undefined
   */
  renderLabel: (item: LocalizeSidebarItemProps) => React.ReactNode;

  /**
   * Set this to render Sub SidebarItem
   * @default undefined
   */
  subItems?: LocalizeSidebarItemProps[];
}

export interface LocalizeSidebarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    LocalizeBaseStyledProps {
  /**
   * Set this to change Button rendering children node
   */
  items: LocalizeSidebarItemProps[];

  /**
   * Set this to change SidebarItemsContainer className
   * @default false
   */
  isSizer?: boolean;

  /**
   * Set this to change Button className
   * @default 50px
   */
  iconWidth?: string;

  /**
   * Set this to change Button labelWidth
   * @default 150px
   */
  labelWidth?: string;
}

const StyledSidebar = styled.aside<LocalizeStyledProps>(() => {
  return {};
});

export const LocalizeSidebar: React.FC<LocalizeSidebarProps> = ({
  className,
  items,
  isSizer = false,
  iconWidth = '50px',
  labelWidth = '150px',
  ...props
}) => {
  return (
    <StyledSidebar
      {...props}
      className={classnames('__Localize__Sidebar', className)}
    >
      <SidebarItemsContainer>
        {items.map((item) => (
          <SidebarItemIcon {...props} item={item} iconWidth={iconWidth} />
        ))}
      </SidebarItemsContainer>
      <SidebarItemsContainer isSizer={isSizer}>
        {items.map((item) => (
          <SidebarItemLabel {...props} item={item} iconWidth={iconWidth} />
        ))}
      </SidebarItemsContainer>
    </StyledSidebar>
  );
};

export default LocalizeSidebar;
