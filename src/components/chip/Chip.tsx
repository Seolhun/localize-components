import * as React from 'react';

import * as styles from './Chip.scss';

export interface ChipProps {
  content: string;

  className?: string;
  children?: React.ReactNode;
  style?: ChipStyleProps;
}

interface ChipStyleProps {
  border?: string;
  borderRadius?: string;
  color?: string;
}

const Chip: React.SFC<ChipProps> = ({
  className,
  content,
  children,
  style,
}) => {
  return (
    <div className={`${className} ${styles.Chip}`} style={style}>
      {children ? children : content}
    </div>
  );
};

Chip.defaultProps = {
  className: '',
  children: null,
  style: {},
};

export default Chip;
