import React from 'react';
import * as classNames from 'classnames';

const styles = require('./Footer.css');

export interface FooterProps {
  children: React.ReactNode;
  // isNotRequired
  className?: string;
  style?: object;
}

const Footer: React.StatelessComponent<FooterProps> = ({
  className = '',
  children = '',
  style = {},
}) => (
  <footer className={classNames(`${styles.footer} ${className}`)} style={style}>
    {children}
  </footer>
);

export default Footer;
