import React from 'react';
import PropTypes from 'prop-types';

import styles from './Hr.scss';

const Hr = ({
  className,
  style,
}) => (
  <hr
    className={`${styles.separator} ${className}`}
    style={{
      ...style,
    }}
  />
);

Hr.propTypes = {
  // isRequired
  className: PropTypes.string,
  style: PropTypes.shape({
    borderBottom: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
  }),
};

Hr.defaultProps = {
  className: '',
  style: {},
};

export default Hr;
