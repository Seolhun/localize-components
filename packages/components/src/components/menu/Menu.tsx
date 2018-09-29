import * as React from 'react';

export type MenuMode =
  | 'vertical'
  | 'vertical-left'
  | 'vertical-right'
  | 'horizontal'
  | 'inline';

export interface MenuProps {
  className?: string;
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];

  focusable?: boolean;
  getPopupContainer?: (triggerNode: Element) => HTMLElement;
  inlineCollapsed?: boolean;
  inlineIndent?: number;
  mode?: MenuMode;
  multiple?: boolean;

  onClick?: (...args: any[]) => any;
  onDeselect?: (...args: any[]) => any;
  onOpenChange?: (...args: any[]) => any;
  onSelect?: (...args: any[]) => any;
  openAnimation?: string | Object;
  openKeys?: string[];
  openTransitionName?: string | Object;
  prefixCls?: string;
  selectable?: boolean;
  selectedKeys?: string[];
  style?: React.CSSProperties;
  subMenuCloseDelay?: number;
  subMenuOpenDelay?: number;
}

export interface MenuState {
  openKeys: string[];
}

const Menu: React.StatelessComponent<MenuProps> = () => {
  return <a />;
};

export default Menu;