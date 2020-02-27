import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeStyledProps,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeSidebarItemProps } from './LocalizeSidebar';

export interface SidebarItemLabelProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    LocalizeBaseStyledProps {
  item: LocalizeSidebarItemProps;

  iconWidth: string;
}

const StyledSpan = styled.span<LocalizeStyledProps>(() => {
  return {};
});

export const SidebarItemLabel: React.FC<SidebarItemLabelProps> = ({
  item,
  className,
  ...props
}) => {
  return (
    <StyledSpan
      {...props}
      className={classnames('__Localize__SidebarItemLabel', className)}
    >
      {item.renderLabel(item)}
    </StyledSpan>
  );
};

export default SidebarItemLabel;
