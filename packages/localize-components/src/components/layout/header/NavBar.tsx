import React from 'react';

import classnames from 'classnames';

import './NavBar.scss';

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
  <nav className={classnames(`__Localize__Navbar ${className}`)} style={style}>
    {children}
  </nav>
);

export default NavBar;
