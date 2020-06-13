import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeThemeProps,
  MediaQueriesEnum,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';
import { MEDIA_QUERIES } from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__Container';
type DivProps = React.HTMLAttributes<HTMLDivElement>;

interface LocalizeContainerProps extends LocalizeProps, DivProps {
  isFullWidth?: boolean;
}

const StyledContainer = styled.div<LocalizeContainerProps, LocalizeThemeProps>(
  ({ theme, isFullWidth = false }) => {
    const responsiveStyles = {
      [MEDIA_QUERIES.XXL]: {
        maxWidth: `${MediaQueriesEnum.LG - 72}px`,
      },
      [MEDIA_QUERIES.XL]: {
        maxWidth: `${MediaQueriesEnum.LG - 60}px`,
      },
      [MEDIA_QUERIES.LG]: {
        maxWidth: `${MediaQueriesEnum.LG - 48}px`,
      },
      [MEDIA_QUERIES.MD]: {
        maxWidth: `${MediaQueriesEnum.LG - 36}px`,
      },
      [MEDIA_QUERIES.SM]: {
        maxWidth: `${MediaQueriesEnum.LG - 24}px`,
      },
      [MEDIA_QUERIES.XS]: {
        maxWidth: `${MediaQueriesEnum.LG - 24}px`,
      },
    };

    return {
      ...(!isFullWidth ? responsiveStyles : {}),
      width: '100%',
      paddingRight: theme.grid.containerGutter.right,
      paddingLeft: theme.grid.containerGutter.left,
      marginRight: 'auto',
      marginLeft: 'auto',
    };
  },
);

const LocalizeContainer: React.FC<LocalizeContainerProps> = ({ children, className, ...props }) => {
  return (
    <StyledContainer {...props} className={classnames(DEFAULT_CLASSNAME, className)}>
      {children}
    </StyledContainer>
  );
};

export { LocalizeContainerProps, LocalizeContainer };
export default LocalizeContainer;
