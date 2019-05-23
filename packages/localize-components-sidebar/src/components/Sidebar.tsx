import React, { SFC, ReactNode } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  ThemesType,
  StyledProps
} from '@seolhun/localize-components-styled-types';

import SidebarItemLabel from './SidebarItemLabel';
import SidebarItemIcon from './SidebarItemIcon';
import SidebarItems from './SidebarItems';

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
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Sidebar subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change Sidebar style
   * @default {}
   */
  style?: {};
}

const StyledSidebar = styled.div<StyledProps>(() => {
  return {

  }
})

export const Sidebar: SFC<SidebarProps> = ({
  className,
  style,
  items,
  ...props
}) => {
  return (
    <StyledSidebar
      className={classnames(
        '__Localize__Sidebar',
        className
      )}
      css={css(style)}
      {...props}
    >
      <SidebarItems>
        {items.map((item) => (
          <SidebarItemIcon
            item={item}
            {...props}
          />
        ))}
      </SidebarItems>
      <SidebarItems
        isSizer
      >
        {items.map((item) => (
          <SidebarItemLabel
            item={item}
            {...props}
          />
        ))}
      </SidebarItems>
    </StyledSidebar>
  )
}

export default Sidebar;
