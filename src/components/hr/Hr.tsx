import * as React from 'react';

import * as styles from './Hr.css';

export interface HrProps {
  // isNotRequired
  className?: string;
  color?: string;
  style?: {
    margin?: string;
  };
}

const Hr: React.SFC<HrProps> = ({ className, color, style }) => (
  <hr
    className={`${styles.separator} ${className}`}
    style={{
      ...style,
      borderTop: `1px solid ${color}`,
    }}
  />
);

Hr.defaultProps = {
  className: '',
  color: '#000',
  style: {
    margin: '1rem 0',
  },
};

export default Hr;
