import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import { getThemeObject } from '@seolhun/localize-components-styled-utils';
import { ILocalizeTheme, LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Footer';

export interface FooterProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change Footer height
   */
  children: React.ReactNode;
}

const StyledNav = styled.nav<FooterProps, ILocalizeTheme>(({
  theme,
  mainColor,
  subColor,
  zIndex = 100,
  css,
}) => {
  const validTheme = getThemeObject({ mainColor, subColor }, theme);

  return {
    width: '100%',
    backgroundColor: validTheme.mainColor,
    borderBottom: `1px solid ${validTheme.mainColor}`,
    zIndex,
    ...css,
  }
})

const Footer: FC<FooterProps> = ({
  children,
  className,
  ...props
}) => (
  <StyledNav
    className={classnames(DEFAULT_CLASSNAME, className)}
    {...props}
  >
    {children}
  </StyledNav>
);

export default Footer;
