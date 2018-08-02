import React from 'react';
import PropTypes from 'prop-types';

import styles from './Issue.scss';

const Issue = ({
  title,
  description,
  children,
  className,
}) => (
  <div className={`${styles.root} ${className}`}>
    <p className={styles.title}>
      {title}
    </p>
    <p className={styles.description}>
      {description}
    </p>
    <div className={styles.resolver}>
      {children}
    </div>
  </div>
);

Issue.propTypes = {
  title: PropTypes.string.isRequired,

  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Issue.defaultProps = {
  description: '',
  children: null,
  className: '',
};

export default Issue;
