import React, { SFC } from 'react';

import classnames from 'classnames';

import { ThemesType } from '@seolhun/localize-components-styled-types';

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
   * Set this to change SidebarItemIcon style
   * @default {}
   */
  style?: {};
}

export const SidebarItemIcon: SFC<SidebarItemIconProps> = ({
  item,
  style,
  className,
  ...props
}) => {
  return (
    <span
      className={classnames(
        '__Localize__SidebarItemIcon',
        className
      )}
      css={style}
      {...props}
    >
      {item.renderIcon(item)}
    </span>
  )
}

export default SidebarItemIcon;
