import React from 'react';
import styled from '@emotion/styled';

import { ThemeProps } from '@/theme';

import { Icons, IconsInterface } from './resources';

export interface IconProps {
  icon: keyof IconsInterface;
  color?: keyof ThemeProps['colors'];
  cursor?: boolean;
}

export const Icon: React.FC<IconProps> = ({ icon, color = 'uiColor08', cursor }) => {
  const RenderIcon = styled(Icons[icon])<{}, ThemeProps>`
    fill: ${({ theme }) => theme.colors[color]};
    transition: fill 0.3s;
    cursor: ${cursor ? 'pointer' : 'unset'};
  `;

  return <RenderIcon className="bd-icon" />;
};
