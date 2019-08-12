import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { ThemesType } from '@seolhun/localize-components-styled-types';

import { SidebarItemProps } from './Sidebar';

export interface SidebarItemLabelProps {
  item: SidebarItemProps;

  /**
   * Set this to change SidebarItemLabel className
   * @default undefined
   */
  className?: string;
  /**
   * Set this to change SidebarItemLabel mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change SidebarItemLabel subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change SidebarItemLabel style
   * @default {}
   */
  style?: {};
}

export const SidebarItemLabel: FunctionComponent<SidebarItemLabelProps> = ({
  item,
  style,
  className,
  ...props
}) => {
  return (
    <span
      className={classnames(
        '__Localize__SidebarItemLabel',
        className
      )}
      css={style}
      {...props}
    >
      {item.renderLabel(item)}
    </span>
  )
}

export default SidebarItemLabel;
