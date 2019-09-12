import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ILocalizeTheme, MediaQueries } from '@seolhun/localize-components-styled-types';
import { createMediaQueryCondition } from '@seolhun/localize-components-styled-utils';

import classnames from 'classnames';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  isFullWidth?: boolean;
  css?: {};
}

const StyledContainer = styled.div<ContainerProps, ILocalizeTheme>(
  ({ isFullWidth = false }) => {
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
    };
  }
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
  )
}

export {
  ContainerProps,
  Container,
}
export default Container;
