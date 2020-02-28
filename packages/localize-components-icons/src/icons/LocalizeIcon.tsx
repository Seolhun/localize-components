import React from 'react';
import styled from '@emotion/styled';

import classnames from 'classnames';
import {
  LocalizeThemeProps,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';

import { Icons, IconsInterface } from './resources';

const DEFAULT_CLASSNAME = '__Localize__Icon';

export interface LocalizeIconProps extends LocalizeBaseStyledProps {
  /**
   * icon name to render
   */
  icon: keyof IconsInterface;

  /**
   * icon color from theme key
   */
  color?: keyof LocalizeThemeProps['colors'];

  /**
   * icon cursor type
   */
  cursor?: string;
}

export const LocalizeIcon: React.FC<LocalizeIconProps> = ({
  icon,
  color = 'uiColor08',
  cursor,
  className,
}) => {
  const RenderIcon = styled(Icons[icon])<{}, LocalizeThemeProps>(
    ({ theme }) => {
      return {
        fill: theme.colors[color],
        transition: 'fill 0.3s',
        cursor: `${cursor || 'pointer'}`,
      };
    },
  );
  return <RenderIcon className={classnames(DEFAULT_CLASSNAME, className)} />;
};
