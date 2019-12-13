import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled'
import { ILocalizeTheme, LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';
import { getValidThemeObject } from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__LocalizeCard'

export interface LocalizeCardProps extends LocalizeBaseStyledProps{
  children: React.ReactNode;
  borderRadius?: string;
  className?: string;
  css?: {},
}

const StyledLocalizeCardWrapper = styled.div<LocalizeCardProps, ILocalizeTheme>({
  width: '100%',
});

const StyledLocalizeCardContainer = styled.div<LocalizeCardProps, ILocalizeTheme>(({
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

export const LocalizeCard: React.FC<LocalizeCardProps> = ({
  className,
  children,
  css = {},
  ...props
}) => (
  <StyledLocalizeCardWrapper className={classnames(DEFAULT_CLASSNAME, className)}>
    <StyledLocalizeCardContainer
      className={`${DEFAULT_CLASSNAME}__Container`}
      css={css}
      {...props}
    >
      {children}
    </StyledLocalizeCardContainer>
  </StyledLocalizeCardWrapper>
);

export default LocalizeCard;
