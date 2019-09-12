import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled'
import { ILocalizeTheme, LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';
import { getThemeObject } from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__Card'

export interface CardProps extends LocalizeBaseStyledProps{
  children: React.ReactNode;
  className?: string;
  css?: {},
}

const StyledCardWrapper = styled.div<CardProps, ILocalizeTheme>({
  display: 'block',
  minHeight: '80px',
  height: 'auto',
  width: '100%',
});

const StyledCardContainer = styled.div<CardProps, ILocalizeTheme>(({
  theme,
  ...props
}) => {
  const { subColor } = getThemeObject(props, theme);

  return {
    padding: '10px 5px',
    borderRadius: theme.border.radius || '4px',
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
