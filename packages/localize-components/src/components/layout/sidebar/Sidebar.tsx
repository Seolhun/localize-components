import React from 'react';

import classnames from 'classnames';

import './Sidebar.scss';

export interface SidebarProps {
  children: React.ReactNode;
  // isNotRequired
  className?: string;
  style?: object;
}

const Sidebar: React.SFC<SidebarProps> = ({
  children,
  className,
  style,
}) => (
  <aside className={classnames(`__Localize__Sidebar ${className}`)} style={style}>
    <div className='menu-items'>{children}</div>
  </aside>
);

export default Sidebar;
