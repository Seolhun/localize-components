import * as React from 'react';

const styles = require('./NavBar.css');

export interface NavBarProps {
  children: React.ReactNode;
  // isNotRequired
  style: object;
}

const NavBar: React.StatelessComponent<NavBarProps> = ({ children, style }) => (
  <nav className={styles.navbar} style={style}>
    {children}
  </nav>
);

export default NavBar;
