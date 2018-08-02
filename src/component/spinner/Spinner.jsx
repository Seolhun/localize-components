import React from 'react';
import styles from './Spinner.scss';

const Spinner = () => (
  <div className={styles.root}>
    <div className={styles.wrap}>
      <div className="bounceball" />
      <div className={styles.text}>
          NOW LOADING
      </div>
    </div>
  </div>
);

export default Spinner;
