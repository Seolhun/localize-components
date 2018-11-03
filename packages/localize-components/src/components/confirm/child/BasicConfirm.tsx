import * as React from 'react';

const styles = require('./BasicConfirm.scss');

export interface BasicConfirmProps {
  message?: string;
}

const BasicConfirm: React.StatelessComponent<BasicConfirmProps> = ({
  message = '',
}) => {
  return <div className={styles.BasicConfirm}>{message}</div>;
};

export default BasicConfirm;
