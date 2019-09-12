import React from 'react';

type MenuMode =
  | 'vertical'
  | 'vertical-left'
  | 'vertical-right'
  | 'horizontal'
  | 'inline';

interface MenuProps {
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
  openAnimation?: string | {};
  openKeys?: string[];
  openTransitionName?: string | {};
  prefixCls?: string;
  selectable?: boolean;
  selectedKeys?: string[];
  style?: React.CSSProperties;
  subMenuCloseDelay?: number;
  subMenuOpenDelay?: number;
}

interface MenuState {
  openKeys: string[];
}

const Menu: React.FunctionComponent<MenuProps> = () => {
  return <a />;
};

export {
  MenuMode,
  MenuProps,
  MenuState,
  Menu,
}

export default Menu;
