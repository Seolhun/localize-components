import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  ThemesType,
  StyledProps,
} from '@seolhun/localize-components-styled-types';

import SidebarItemLabel from './SidebarItemLabel';
import SidebarItemIcon from './SidebarItemIcon';
import SidebarItemsContainer from './SidebarItemsContainer';

export interface SidebarItemProps {
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
  renderIcon: (item: SidebarItemProps) => ReactNode | ReactNode;
  /**
   * Set this to render SidebarItem rendering node
   * @default undefined
   */
  renderLabel: (item: SidebarItemProps) => ReactNode | ReactNode;
  /**
   * Set this to render Sub SidebarItem
   * @default undefined
   */
  subItems?: SidebarItemProps[];
}

export interface SidebarProps {
  /**
   * Set this to change Button rendering children node
   */
  items: SidebarItemProps[];

  /**
   * Set this to change Button className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change Button className
   * @default 50
   */
  iconWidth?: number;
  /**
   * Set this to change Button labelWidth
   * @default 150
   */
  labelWidth?: number;
  /**
   * Set this to change Sidebar onBlur
   * @default 'main'
   */
  onBlur?: (...args: any[]) => void;
  /**
   * Set this to change Sidebar onClick
   * @default () => null
   */
  onClick?: (...args: any[]) => void;
  /**
   * Set this to change Sidebar onFocus
   * @default () => null
   */
  onFocus?: (...args: any[]) => void;
  /**
   * Set this to change Sidebar onMouseOut
   * @default () => null
   */
  onMouseOut?: (...args: any[]) => void;
  /**
   * Set this to change Sidebar onMouseOver
   * @default () => null
   */
  onMouseOver?: (...args: any[]) => void;
  /**
   * Set this to change Sidebar mainColor
   * @default ThemeConfig.primaryColor = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Sidebar subColor
   * @default ThemeConfig.secondaryColor = grey
   */
  subColor?: ThemesType;
  /**
   * Set this to change Sidebar css
   * @default {}
   */
  css?: {};
}

const StyledSidebar = styled.aside<StyledProps>(() => {
  return {};
});

export const Sidebar: FunctionComponent<SidebarProps> = ({
  className,
  css,
  items,
  iconWidth = 50,
  labelWidth = 150,
  ...props
}) => {
  return (
    <StyledSidebar
      className={classnames('__Localize__Sidebar', className)}
      css={css}
      {...props}
    >
      <SidebarItemsContainer>
        {items.map((item) => (
          <SidebarItemIcon
            item={item}
            css={{
              width: `${iconWidth}px`,
            }}
            {...props}
          />
        ))}
      </SidebarItemsContainer>
      <SidebarItemsContainer isSizer>
        {items.map((item) => (
          <SidebarItemLabel
            item={item}
            css={{
              width: `${iconWidth}px`,
            }}
            {...props}
          />
        ))}
      </SidebarItemsContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
