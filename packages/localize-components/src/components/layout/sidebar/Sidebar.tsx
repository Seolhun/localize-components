import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeBaseStyledProps, ILocalizeTheme } from '@seolhun/localize-components-styled-types';
import { getThemeObject } from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__Sidevar';

export interface SidebarProps extends LocalizeBaseStyledProps {
  children: React.ReactNode;

  /**
   * Set this to change Sidebar width
   * @default 250
   */
  width: number;
  /**
   * Set this to change Sidebar height
   * @default 50
   */
  top: number;
}

const StyledSidebar = styled.aside<SidebarProps, ILocalizeTheme>(({
  theme,
  mainColor,
  subColor,
  width = 250,
  top = 50,
  zIndex = 100,
}) => {
  const validTheme = getThemeObject({ mainColor, subColor }, theme);

  return {
    position: 'fixed',
    top: 0,
    left: 0,

    width: `${width}px`,
    height: '100%',
    paddingTop: `${top}px`,

    backgroundColor: validTheme.mainColor,
    borderBottom: `1px solid ${validTheme.subColor}`,
    borderRight: `1px solid ${validTheme.subColor}`,
    boxSizing: 'border-box',

    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex,
  }
})

const Sidebar: React.FunctionComponent<SidebarProps> = ({
  children,
  className,
  css = {},
  ...props
}) => (
  <StyledSidebar
    {...props}
    className={classnames(DEFAULT_CLASSNAME, className)}
    css={css}
  >
    {children}
  </StyledSidebar>
);

export default Sidebar;
