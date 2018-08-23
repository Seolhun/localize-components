import React from 'react';

import styles from './Footer.css';

export interface FooterProps {
  children: React.ReactNode;
  className?: string;
}

const Footer: React.StatelessComponent<FooterProps> = ({
  className = '',
  children,
}) => <footer className={`${styles.footer} ${className}`}>{children}</footer>;

export default Footer;
