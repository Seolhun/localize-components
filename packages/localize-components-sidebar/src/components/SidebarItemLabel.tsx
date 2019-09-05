import React, { FunctionComponent } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  ThemesType,
  StyledProps,
} from '@seolhun/localize-components-styled-types';

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
   * @default ThemeConfig.primaryColor = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change SidebarItemLabel subColor
   * @default ThemeConfig.secondaryColor = grey
   */
  subColor?: ThemesType;
  /**
   * Set this to change SidebarItemLabel css
   * @default {}
   */
  css?: {};
}

const StyledSpan = styled.span<StyledProps>(() => {
  return {};
});

export const SidebarItemLabel: FunctionComponent<SidebarItemLabelProps> = ({
  item,
  css,
  className,
  ...props
}) => {
  return (
    <StyledSpan
      className={classnames('__Localize__SidebarItemLabel', className)}
      css={css}
      {...props}
    >
      {item.renderLabel(item)}
    </StyledSpan>
  );
};

export default SidebarItemLabel;
