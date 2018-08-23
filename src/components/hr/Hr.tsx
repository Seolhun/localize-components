import * as React from 'react';

import * as styles from './Hr.css';

export interface HrProps {
  // isNotRequired
  className?: string;
  color?: string;
  style?: {
    margin?: string,
  };
}

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
