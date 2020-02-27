import React from 'react';
import styled from '@emotion/styled';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { Icons, IconsInterface } from './resources';

export interface LocalizeIconProps {
  /**
   * icon to render
   */
  icon: keyof IconsInterface;

  /**
   * icon color
   */
  color?: keyof LocalizeThemeProps['colors'];

  /**
   * icon cursor type
   */
  cursor?: boolean;
}

export const LocalizeIcon: React.FC<LocalizeIconProps> = ({
  icon,
  color = 'uiColor08',
  cursor,
}) => {
  const RenderIcon = styled(Icons[icon])<{}, LocalizeThemeProps>(
    ({ theme }) => {
      return {
        fill: theme.colors[color],
        transition: 'fill 0.3s',
        cursor: `${cursor ? 'pointer' : 'unset'}`,
      };
    },
  );
  return <RenderIcon className="bd-icon" />;
};
