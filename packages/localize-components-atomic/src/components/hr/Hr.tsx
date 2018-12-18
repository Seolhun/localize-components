import React from 'react';

const styles = require('./Hr.scss');

export interface HrProps {
  // isNotRequired
  className?: string;
  color?: string;
  style?: {
    margin?: string;
  };
}

// tslint:disable-next-line:variable-name
const Hr: React.SFC<HrProps> = ({
  className = '',
  color = '#000',
  style = {
    margin: '1rem 0',
  },
}) => (
  <hr
    className={`${styles.separator} ${className}`}
    style={{
      ...style,
      borderTop: `1px solid ${color}`,
    }}
  />
);

export default Hr;
