import React from 'react';

import classnames from 'classnames';

const styles = require('./NavBar.css');

export interface NavBarProps {
  children: React.ReactNode;
  // isNotRequired
  className?: string;
  style?: object;
}

const NavBar: React.SFC<NavBarProps> = ({
  children,
  className,
  style,
}) => (
  <nav className={classnames(`${styles.navbar} ${className}`)} style={style}>
    {children}
  </nav>
);

export default NavBar;
