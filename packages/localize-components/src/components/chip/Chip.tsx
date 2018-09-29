import * as React from 'react';
import * as classnames from 'classnames';

import { ColorType } from '@seolhun/localize-components-types';

const styles = require('./Chip.css');

export interface ChipProps {
  children: React.ReactNode | string;
  // isNotRequired
  className?: string | undefined;
  color?: ColorType;
  icon?: React.ReactNode;
  onClickDelete?: (...args: any[]) => any;
  style?: ChipStyleProps;
}

interface ChipStyleProps {
  border?: string;
  borderRadius?: string;
  color?: string;
}

const Chip: React.SFC<ChipProps> = ({
  children,
  // IsNotRequired
  className = null,
  icon = null,
  onClickDelete = () => null,
  style = {},
  color = 'Color.PRIMARY',
}) => {
  return (
    <div
      className={classnames(`
      ${className}
      ${styles.Chip}
    `)}
      style={style}
    >
      {children}
      <span className={styles.iconWrapper} onClick={onClickDelete}>
        {icon}
      </span>
    </div>
  );
};

export default Chip;
