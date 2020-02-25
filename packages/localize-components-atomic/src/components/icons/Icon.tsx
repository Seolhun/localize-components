import React from 'react';
import styled from '@emotion/styled';

import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

import { Icons, IconsInterface } from './resources';

export interface IconProps {
  /**
   * icon to render
   */
  icon: keyof IconsInterface;

  /**
   * icon color
   */
  color?: keyof ILocalizeTheme['localized']['colors'];

  /**
   * icon cursor type
   */
  cursor?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  color = 'uiColor08',
  cursor,
}) => {
  const RenderIcon = styled(Icons[icon])<{}, ILocalizeTheme>(({ theme }) => {
    return {
      fill: theme.localized.colors[color],
      transition: 'fill 0.3s',
      cursor: `${cursor ? 'pointer' : 'unset'}`,
    };
  });
  return <RenderIcon className="bd-icon" />;
};
