import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import { getValidThemeObject } from '@seolhun/localize-components-styled-utils';
import { ILocalizeTheme, LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Footer';

interface FooterProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change Footer height
   */
  children: React.ReactNode;
}

const StyledNav = styled.nav<FooterProps, ILocalizeTheme>(({
  zIndex = 100,
  theme,
  ...props
}) => {
  const validTheme = getValidThemeObject(props, theme);

  return {
    width: '100%',
    backgroundColor: validTheme.mainColor,
    borderBottom: `1px solid ${validTheme.mainColor}`,
    zIndex,
  }
})

const Footer: FC<FooterProps> = ({
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
  FooterProps,
  Footer,
}

export default Footer;
