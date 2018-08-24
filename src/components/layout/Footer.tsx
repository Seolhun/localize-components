import React from 'react';

const styles = require('./Footer.css');

export interface FooterProps {
  children: React.ReactNode;
  className?: string;
}

const Footer: React.StatelessComponent<FooterProps> = ({
  className = '',
  children,
}) => <footer className={`${styles.footer} ${className}`}>{children}</footer>;

export default Footer;
