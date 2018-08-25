
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './ProgressBar.scss';

const ProgressBar = ({
  ratio,
  name,
  description,
  color,
  height,
}) => (
  <Fragment>
    <div className={styles.root}>
      <div className={styles.ratioBox}>
        {ratio}
          %
      </div>
      <div className={styles.progressBox}>
        {
          name ? (
            <div className={styles.name}>
              {name}
            </div>
          ) : null
        }
        <div
          className={styles.progressBar}
          style={{
            height: `${height}px`,
          }}
        >
          <div
            className={styles.percentagem}
            style={{
              width: `${ratio > 100 ? 100 : ratio}%`,
              background: `${color}`,
              height: `${height}px`,
            }}
          />
        </div>
        {
          description ? (
            <div className={styles.description}>
              {description}
            </div>
          ) : null
        }
      </div>
    </div>
  </Fragment>
);

ProgressBar.propTypes = {
  ratio: PropTypes.string.isRequired,
  // isNotRequired
  name: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
};

ProgressBar.defaultProps = {
  name: '',
  description: '',
  color: '#5f42ff',
  height: 10,
};


export default ProgressBar;
