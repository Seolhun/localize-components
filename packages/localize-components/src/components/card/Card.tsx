import React, { FC } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled'
import { IThemeConfig } from '@seolhun/localize-components-styled-types';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  css?: {},
}

const StyledCard = styled.div<CardProps, IThemeConfig>(({
  theme,
  css = {},
}) => {
  return {
    display: 'block',
    minHeight: '100px',
    height: 'auto',
    width: '100%',

    borderRadius: theme.border.radius || '4px',
    border: `1px solid ${theme.border.color}`,
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
