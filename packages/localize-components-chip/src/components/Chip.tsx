import React, { ReactNode, SFC } from 'react';

import classnames from 'classnames';

import {
  getThemeStyle,
} from '@seolhun/localize-components-styled-utils';
import {
  Themes,
  ThemeType,
} from '@seolhun/localize-components-types';

const styles = require('./Chip.css');

export interface ChipProps {
  children: ReactNode | string;
  // isNotRequired
  className?: string | undefined;
  theme?: ThemeType;
  icon?: ReactNode;
  onClickDelete?: (...args: any[]) => any;
  style?: ChipStyleProps;
}

interface ChipStyleProps {
  border?: string;
  borderRadius?: string;
  color?: string;
}

const Chip: SFC<ChipProps> = ({
  children,
  // IsNotRequired
  className = null,
  icon = null,
  onClickDelete = () => null,
  style = {},
  theme = Themes.PRIMARY,
}) => {
  return (
    <div
      className={classnames(
        className,
        styles.Chip,
        getThemeStyle(theme),
      )}
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
