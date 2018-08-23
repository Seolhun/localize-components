import * as React from 'react';

import styles from './NavBar.css';

export interface NavBarProps {
  children: React.ReactNode;
  style?: {
    height?: string,
  };
}

const NavBar: React.StatelessComponent<NavBarProps> = ({
  children,
  style = {
    height: '70px',
  },
}) => (
  <nav className={styles.navbar} style={style}>
    {children}
  </nav>
);

export default NavBar;
