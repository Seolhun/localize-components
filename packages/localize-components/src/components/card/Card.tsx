import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled'
import { ILocalizeTheme, LocalizeBaseStyledProps, LocalizeThemes } from '@seolhun/localize-components-styled-types';
import { getThemeObject } from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__Card'

export interface CardProps extends LocalizeBaseStyledProps{
  children: React.ReactNode;
  className?: string;
  css?: {},
}

const StyledCard = styled.div<CardProps, ILocalizeTheme>(({
  theme,
  ...props
}) => {
  const { subColor } = getThemeObject(props, theme);

  return {
    backgroundColor: subColor,
    display: 'block',
    minHeight: '80px',
    height: 'auto',
    width: '100%',
    borderRadius: theme.border.radius || '4px',
    boxShadow: theme.border.shadow,
  }
});

const StyledCardContainer = styled.div<CardProps, ILocalizeTheme>({
  padding: '10px 5px',
});

export const Card: FC<CardProps> = ({
  className,
  children,
  css = {},
}) => (
  <StyledCard className={classnames(DEFAULT_CLASSNAME, className)} css={css}>
    <StyledCardContainer>
      {children}
    </StyledCardContainer>
  </StyledCard>
);

export default Card;
