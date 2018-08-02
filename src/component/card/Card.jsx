import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import styles from './Card.scss';

const Card = ({
  className,
  children,
  style,
}) => (
  <div
    className={classnames(`${styles.card} ${className || 'not-custom'}`)}
    style={style}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
  }),
};

Card.defaultProps = {
  className: '',
  style: {
    color: '',
    backgroundColor: '',
  },
};


export default Card;
