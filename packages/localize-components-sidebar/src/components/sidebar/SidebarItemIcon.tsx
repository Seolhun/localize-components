import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeStyledProps,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';

import { SidebarItemProps } from './Sidebar';

export interface SidebarItemIconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    LocalizeBaseStyledProps {
  item: SidebarItemProps;

  iconWidth: string;
}

const StyledSpan = styled.span<LocalizeStyledProps>(() => {
  return {};
});

export const SidebarItemIcon: React.FC<SidebarItemIconProps> = ({
  item,
  className,
  ...props
}) => {
  return (
    <StyledSpan
      {...props}
      className={classnames('__Localize__SidebarItemIcon', className)}
    >
      {item.renderIcon(item)}
    </StyledSpan>
  );
};

export default SidebarItemIcon;
