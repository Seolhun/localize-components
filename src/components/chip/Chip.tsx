import * as React from 'react';

const styles = require('./Chip.css');

export interface ChipProps {
  content: string;
  // isNotRequired
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
  content,
  className = '',
  children = null,
  style = {},
}) => {
  return (
    <div className={`${className} ${styles.Chip}`} style={style}>
      {children ? children : content}
    </div>
  );
};

export default Chip;
