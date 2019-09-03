import React, { FunctionComponent } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import { ThemesType, StyledProps } from '@seolhun/localize-components-styled-types';

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
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change SidebarItemIcon subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change SidebarItemIcon css
   * @default {}
   */
  css?: {};
}

const StyledSpan = styled.span<StyledProps>(() => {
  return {

  }
});

export const SidebarItemIcon: FunctionComponent<SidebarItemIconProps> = ({
  item,
  css,
  className,
  ...props
}) => {
  return (
    <StyledSpan
      className={classnames(
        '__Localize__SidebarItemIcon',
        className
      )}
      css={css}
      {...props}
    >
      {item.renderIcon(item)}
    </StyledSpan>
  )
}

export default SidebarItemIcon;
