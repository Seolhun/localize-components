import React, { SFC } from 'react';

import classnames from 'classnames';

import { getAlignStyle } from '@seolhun/localize-components-utils';
import { Align, AlignType } from '@seolhun/localize-components-types';

import getIconByName, { IconType } from './contents';
export interface IconProps {
  type: IconType | string;
  // isNotRequired
  align?: AlignType;
  className?: string;
  color?: string;
  size?: number;
  viewBox?: string;
}

const Icon: SFC<IconProps> = ({
  type,
  // isNotRequired
  align = Align.CENTER,
  className,
  color,
  size,
  viewBox,
}) =>  (
  <i
    className={classnames(
      className,
      'Icon',
      getAlignStyle(align),
    )}
  >
    {getIconByName(type)({
      size,
      color,
      viewBox,
    })}
  </i>
);

export {
  IconType,
};

export default Icon;
