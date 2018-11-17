import React from 'react';

const styles = require('./BasicConfirm.css');

export interface BasicConfirmProps {
  message?: string;
}

const BasicConfirm: React.SFC<BasicConfirmProps> = ({
  message = '',
}) => {
  return <div className={styles.BasicConfirm}>{message}</div>;
};

export default BasicConfirm;
