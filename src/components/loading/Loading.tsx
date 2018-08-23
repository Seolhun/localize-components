import React from 'react';
import styles from './Loading.scss';

const Loading = () => (
  <div className="_loading">
    <div className={styles.wrap}>
      <div className={styles.bounceball} />
      <div className={styles.text}>NOW LOADING</div>
    </div>
  </div>
);

export default Loading;
