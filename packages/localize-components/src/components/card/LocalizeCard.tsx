import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';
import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Card';
type DivProps = React.HTMLAttributes<HTMLDivElement>;

export interface LocalizeCardProps extends LocalizeProps, DivProps {
  /**
   * Set this to change LocalizeCard borderRadius
   */
  borderRadius?: string;
}

const StyledLocalizeCardWrapper = styled.div<LocalizeCardProps, LocalizeThemeProps>({
  width: '100%',
});

const StyledLocalizeCardContainer = styled.div<LocalizeCardProps, LocalizeThemeProps>(
  ({ theme, borderRadius }) => {
    return {
      padding: '15px 20px',
      borderRadius: borderRadius || '5px',
      boxShadow: `0px 2px 1px -1px ${theme.colors.neutral4}, 0px 1px 1px 0px ${theme.colors.neutral4}, 0px 1px 3px 0px ${theme.colors.neutral4}`,
      backgroundColor: theme.colors.neutral1,
      color: theme.colors.neutral12,
    };
  },
);

const LocalizeCard: React.FC<LocalizeCardProps> = ({ className, children, ...props }) => (
  <StyledLocalizeCardWrapper className={classnames(CLASSNAME, className)}>
    <StyledLocalizeCardContainer {...props} className={`${CLASSNAME}__Container`}>
      {children}
    </StyledLocalizeCardContainer>
  </StyledLocalizeCardWrapper>
);

export { LocalizeCard };
export default LocalizeCard;
