import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./Sidebar.scss');

export interface SidebarProps {
  children: React.ReactNode;
  // isNotRequired
  className?: string;
  style?: object;
}

const Sidebar: React.StatelessComponent<SidebarProps> = ({
  children,
  className,
  style,
}) => (
  <aside className={classnames(`${styles.sidebar} ${className}`)} style={style}>
    <div className="menu-items">{children}</div>
  </aside>
);

export default Sidebar;
