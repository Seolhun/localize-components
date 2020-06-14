import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import {
  LocalizeProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Card';
type DivProps = React.HTMLAttributes<HTMLDivElement>;

export interface LocalizeCardProps extends LocalizeProps, DivProps {
  /**
   * Set this to change LocalizeCard borderRadius
   */
  borderRadius?: string;
}

const StyledLocalizeCardWrapper = styled.div<
  LocalizeCardProps,
  LocalizeThemeProps
>({
  width: '100%',
});

const StyledLocalizeCardContainer = styled.div<
  LocalizeCardProps,
  LocalizeThemeProps
>(({ theme, borderRadius }) => {
  return {
    padding: '15px 20px',
    borderRadius: borderRadius || '5px',
    boxShadow: `0px 2px 1px -1px ${theme.colors.uiColor07}, 0px 1px 1px 0px ${theme.colors.uiColor07}, 0px 1px 3px 0px ${theme.colors.uiColor07}`,
    backgroundColor: theme.colors.primaryBackground01,
  };
});

export const LocalizeCard: React.FC<LocalizeCardProps> = ({
  className,
  children,
  ...props
}) => (
  <StyledLocalizeCardWrapper
    className={classnames(DEFAULT_CLASSNAME, className)}
  >
    <StyledLocalizeCardContainer
      {...props}
      className={`${DEFAULT_CLASSNAME}__Container`}
    >
      {children}
    </StyledLocalizeCardContainer>
  </StyledLocalizeCardWrapper>
);

export default LocalizeCard;
