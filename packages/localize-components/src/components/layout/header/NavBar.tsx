import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import { getThemeObject } from '@seolhun/localize-components-styled-utils';
import { ILocalizeTheme, LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Navbar';

interface NavBarProps extends LocalizeBaseStyledProps {
  children: React.ReactNode;
  /**
   * Set this to change NavBar height
   * @default 50
   */
  height?: number;
}

const StyledNav = styled.nav<NavBarProps, ILocalizeTheme>(({
  height = 50,
  zIndex = 100,
  theme,
  ...props
}) => {
  const validTheme = getThemeObject(props, theme);

  return {
    position: 'fixed',
    top: 0,
    width: '100%',
    height,
    backgroundColor: validTheme.mainColor,
    borderBottom: `1px solid ${validTheme.mainColor}`,
    zIndex,
  }
});

const NavBar: FC<NavBarProps> = ({
  children,
  className,
  css = {},
  ...props
}) => (
  <StyledNav
    {...props}
    className={classnames(DEFAULT_CLASSNAME, className)}
    css={css}
  >
    {children}
  </StyledNav>
);

export {
  NavBarProps,
  NavBar,
}

export default NavBar;
