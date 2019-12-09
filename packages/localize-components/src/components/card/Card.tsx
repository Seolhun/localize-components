import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled'
import { ILocalizeTheme, LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';
import { getValidThemeObject } from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__Card'

export interface CardProps extends LocalizeBaseStyledProps{
  children: React.ReactNode;
  borderRadius?: string;
  className?: string;
  css?: {},
}

const StyledCardWrapper = styled.div<CardProps, ILocalizeTheme>({
  width: '100%',
});

const StyledCardContainer = styled.div<CardProps, ILocalizeTheme>(({
  theme,
  borderRadius,
  ...props
}) => {
  const { subColor } = getValidThemeObject(props, theme);

  return {
    padding: '15px 20px',
    borderRadius: borderRadius || theme.border.radius || '4px',
    boxShadow: theme.border.shadow,
    backgroundColor: subColor,
  }
});

export const Card: FC<CardProps> = ({
  className,
  children,
  css = {},
  ...props
}) => (
  <StyledCardWrapper className={classnames(DEFAULT_CLASSNAME, className)}>
    <StyledCardContainer
      className={`${DEFAULT_CLASSNAME}__Container`}
      css={css}
      {...props}
    >
      {children}
    </StyledCardContainer>
  </StyledCardWrapper>
);

export default Card;
