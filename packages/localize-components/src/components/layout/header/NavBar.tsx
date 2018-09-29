import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./NavBar.css');

export interface NavBarProps {
  children: React.ReactNode;
  // isNotRequired
  className?: string;
  style?: object;
}

const NavBar: React.StatelessComponent<NavBarProps> = ({
  children,
  className,
  style,
}) => (
  <nav className={classnames(`${styles.navbar} ${className}`)} style={style}>
    {children}
  </nav>
);

export default NavBar;
