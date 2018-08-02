import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavBar.scss';

const NavBar = ({ style, children }) => (
  <nav
    className={styles.navbar}
    style={style}
  >
    {children}
  </nav>
);

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({
    height: PropTypes.string,
  }),
};

NavBar.defaultProps = {
  style: {
    height: '70px',
  },
};

export default NavBar;
