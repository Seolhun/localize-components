import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ILocalizeTheme, IColumnValue } from '@seolhun/localize-components-styled-types';
import { getMediaQueryStyles } from '@seolhun/localize-components-styled-utils';

import classnames from 'classnames';
import { AlignItemsProperty, JustifyContentProperty } from 'csstype';


export interface ColProps {
  children: ReactNode;
  className?: string;
  xs?: IColumnValue;
  sm?: IColumnValue;
  md?: IColumnValue;
  lg?: IColumnValue;
  xl?: IColumnValue;
  alignItems?: AlignItemsProperty;
  justifyContent?: JustifyContentProperty;
  css?: {};
}

const StyledCol = styled.div<ColProps, ILocalizeTheme>(({
  theme,
  xl,
  lg,
  md,
  sm,
  xs,
  alignItems = 'center',
  justifyContent = 'flex-start',
  css = {},
}) => {
    return {
      ...((!!xs || xs === 0) && getMediaQueryStyles('XS', xs)),
      ...((!!sm || sm === 0) && getMediaQueryStyles('SM', sm)),
      ...((!!md || md === 0) && getMediaQueryStyles('MD', md)),
      ...((!!lg || lg === 0) && getMediaQueryStyles('LG', lg)),
      ...((!!xl || xl === 0) && getMediaQueryStyles('XL', xl)),
      width: '100%',
      flex: '0 100%',
      flexBasis: 'auto',
      alignItems,
      justifyContent,
      flexGrow: 1,
      flexShrink: 0,
      boxSizing: 'border-box',
      paddingRight: theme.grid.gutter,
      paddingLeft: theme.grid.gutter,
      paddingBottom: theme.grid.gutter,
      ...css,
    };
  }
);

export const Col = ({
  children,
  className,
  ...props
}: ColProps) => {
  return (
    <StyledCol
      className={classnames('__Localize__Col', className)}
      {...props}
    >
      {children}
    </StyledCol>
  )
}

export default Col;
