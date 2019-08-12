import React from 'react';

import classnames from 'classnames';

import './Footer.scss';

export interface FooterProps {
  children: React.ReactNode;
  // isNotRequired
  className?: string;
  style?: object;
}

const Footer: React.FunctionComponent<FooterProps> = ({
  className = '',
  children = '',
  style = {},
}) => (
  <footer className={classnames(`__Localize__Footer ${className}`)} style={style}>
    {children}
  </footer>
);

export default Footer;
