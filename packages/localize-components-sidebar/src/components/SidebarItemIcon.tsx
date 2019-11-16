import React, { FunctionComponent } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeThemesType,
  LocalizeStyledProps,
} from '@seolhun/localize-components-styled-types';

import { SidebarItemProps } from './Sidebar';

export interface SidebarItemIconProps {
  item: SidebarItemProps;

  /**
   * Set this to change SidebarItemIcon className
   * @default undefined
   */
  className?: string;
  /**
   * Set this to change SidebarItemIcon mainColor
   * @default LocalizeTheme.primaryColor = royalblue
   */
  mainColor?: LocalizeThemesType;
  /**
   * Set this to change SidebarItemIcon subColor
   * @default LocalizeTheme.secondaryColor = grey
   */
  subColor?: LocalizeThemesType;
  /**
   * Set this to change SidebarItemIcon css
   * @default {}
   */
  css?: {};
}

const StyledSpan = styled.span<LocalizeStyledProps>(() => {
  return {};
});

export const SidebarItemIcon: FunctionComponent<SidebarItemIconProps> = ({
  item,
  css,
  className,
  ...props
}) => {
  return (
    <StyledSpan
      className={classnames('__Localize__SidebarItemIcon', className)}
      css={css}
      {...props}
    >
      {item.renderIcon(item)}
    </StyledSpan>
  );
};

export default SidebarItemIcon;
