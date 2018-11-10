import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./Footer.scss');

export interface FooterProps {
  children: React.ReactNode;
  // isNotRequired
  className?: string;
  style?: object;
}

const Footer: React.SFC<FooterProps> = ({
  className = '',
  children = '',
  style = {},
}) => (
  <footer className={classnames(`${styles.footer} ${className}`)} style={style}>
    {children}
  </footer>
);

export default Footer;
