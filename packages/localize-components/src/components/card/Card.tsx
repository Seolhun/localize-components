import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled'
import { ILocalizeTheme, LocalizeBaseStyledProps, LocalizeThemes } from '@seolhun/localize-components-styled-types';

export interface CardProps extends LocalizeBaseStyledProps{
  children: React.ReactNode;
  className?: string;
  css?: {},
}

const StyledCard = styled.div<CardProps, ILocalizeTheme>(({
  theme,
  mainColor,
  css = {},
}) => {
  return {
    backgroundColor: mainColor || LocalizeThemes.white,
    display: 'block',
    minHeight: '100px',
    height: 'auto',
    width: '100%',

    borderRadius: theme.border.radius || '4px',
    boxShadow: theme.border.shadow,
    padding: '10px 5px',
    ...css,
  }
});

export const Card: FC<CardProps> = ({
  className,
  children,
}) => (
  <StyledCard className={classnames('__Localize__Card', className)}>
    {children}
  </StyledCard>
);

export default Card;
