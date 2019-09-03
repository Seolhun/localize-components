import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { IThemeConfig } from '@seolhun/localize-components-styled-types';

import { FlexDirectionProperty } from 'csstype';
import classnames from 'classnames';


export interface RowProps {
  children: ReactNode;
  className?: string;
  isWrap?: boolean;
  flexDirection?: FlexDirectionProperty;
  css?: {};
}

const StyledRow = styled.div<RowProps, IThemeConfig>(
  ({ theme, flexDirection = 'row', isWrap = true, css = {} }) => {
    return {
      display: 'flex',
      flexDirection,
      flexWrap: isWrap ? 'wrap' : 'nowrap',

      width: 'auto',
      marginRight: theme.row.gutter,
      marginLeft: theme.row.gutter,
      marginBottom: theme.row.gutter,
      ...css,
    };
  }
);

export const Row = ({
  children,
  className,
  ...props
}: RowProps) => {
  return (
    <StyledRow
      className={classnames('__Localize__Row', className)}
      {...props}
    >
      {children}
    </StyledRow>
  )
}

export default Row;
