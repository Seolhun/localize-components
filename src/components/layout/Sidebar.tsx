import * as React from 'react';

import styles from './Sidebar.css';

export interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.StatelessComponent<SidebarProps> = ({ children }) => (
  <aside className={styles.sidebar}>
    <div className="menu-items">{children}</div>
  </aside>
);

export default Sidebar;
