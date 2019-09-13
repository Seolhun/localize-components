import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ILocalizeTheme, LocalizeTheme } from '@seolhun/localize-components-styled-types';

import { FlexDirectionProperty, AlignItemsProperty, JustifyContentProperty } from 'csstype';
import classnames from 'classnames';


interface RowProps {
  children: ReactNode;
  className?: string;
  isWrap?: boolean;
  flexDirection?: FlexDirectionProperty;
  alignItems?: AlignItemsProperty;
  justifyContent?: JustifyContentProperty;
  css?: {};
}

const StyledRow = styled.div<RowProps, ILocalizeTheme>(({
  theme,
  flexDirection = 'row',
  isWrap = true,
  alignItems = 'center',
  justifyContent = 'flex-start',
}) => {
    return {
      display: 'flex',
      flexDirection,
      flexWrap: isWrap ? 'wrap' : 'nowrap',
      width: 'auto',
      marginRight: theme.grid.rowGutter || LocalizeTheme.grid.rowGutter,
      marginLeft: theme.grid.rowGutter || LocalizeTheme.grid.rowGutter,
      marginBottom: theme.grid.rowGutter || LocalizeTheme.grid.rowGutter,
      alignItems,
      justifyContent,
    };
  }
);

const Row = ({
  children,
  className,
  css = {},
  ...props
}: RowProps) => {
  return (
    <StyledRow
      {...props}
      className={classnames('__Localize__Row', className)}
      css={css}
    >
      {children}
    </StyledRow>
  )
}

export {
  RowProps,
  Row,
}

export default Row;
