import React from 'react';
import classnames from 'classnames';

const styles = require('./Sidebar.css');

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
  <aside className={classnames(`${styles.sidebar} ${className}`)} style={style}>
    <div className="menu-items">{children}</div>
  </aside>
);

export default Sidebar;
