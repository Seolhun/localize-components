import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { IThemeConfig, MediaQueries } from '@seolhun/localize-components-styled-types';
import { createMediaQueryCondition } from '@seolhun/localize-components-styled-utils';

import classnames from 'classnames';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  isFullWidth?: boolean;
  css?: {};
}

const StyledContainer = styled.div<ContainerProps, IThemeConfig>(
  ({ isFullWidth = false, css = {} }) => {
    const responsiveStyles = {
      [`@media ${createMediaQueryCondition('SM')}`]: {
        maxWidth: `${MediaQueries.XL - 36}px`,
      },
      [`@media ${createMediaQueryCondition('MD')}`]: {
        maxWidth: `${MediaQueries.XL - 38}px`,
      },
      [`@media ${createMediaQueryCondition('LG')}`]: {
        maxWidth: `${MediaQueries.XL - 32}px`,
      },
      [`@media ${createMediaQueryCondition('XL')}`]: {
        maxWidth: `${MediaQueries.XL - 60}px`,
      },
    }
    return {
      ...(!isFullWidth ? responsiveStyles : {}),
      width: '100%',
      marginRight: 'auto',
      marginLeft: 'auto',
      ...css,
    };
  }
);


export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <StyledContainer
      className={classnames('__Localize__Container', className)}
      {...props}
    >
      {children}
    </StyledContainer>
  )
}

export default Container;
