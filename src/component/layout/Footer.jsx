import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.scss';

const Footer = ({ className, children }) => (
  <footer className={`${styles.footer} ${className || 'not-custom'}`}>
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
Footer.defaultProps = {
  className: '',
};


export default Footer;
