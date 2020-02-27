import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import {
  LocalizeThemeProps,
  MediaQueriesEnum,
} from '@seolhun/localize-components-styled-types';
import { MEDIA_QUERIES } from '@seolhun/localize-components-styled-utils';

import classnames from 'classnames';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  isFullWidth?: boolean;
  css?: {};
}

const StyledContainer = styled.div<ContainerProps, LocalizeThemeProps>(
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

const Container = ({
  children,
  className,
  css = {},
  ...props
}: ContainerProps) => {
  return (
    <StyledContainer
      {...props}
      className={classnames('__Localize__Container', className)}
      css={css}
    >
      {children}
    </StyledContainer>
  );
};

export { ContainerProps, Container };
export default Container;
