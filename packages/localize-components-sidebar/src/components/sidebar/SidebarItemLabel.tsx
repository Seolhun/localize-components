import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeThemesType,
  LocalizeStyledProps,
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
   * @default LocalizeTheme.primaryColor = royalblue
   */
  mainColor?: LocalizeThemesType;
  /**
   * Set this to change SidebarItemLabel subColor
   * @default LocalizeTheme.secondaryColor = grey
   */
  subColor?: LocalizeThemesType;
  /**
   * Set this to change SidebarItemLabel css
   * @default {}
   */
  css?: {};
}

const StyledSpan = styled.span<LocalizeStyledProps>(() => {
  return {};
});

export const SidebarItemLabel: React.FC<SidebarItemLabelProps> = ({
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
