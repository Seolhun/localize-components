import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import {
  LocalizeThemeProps,
  ColumnValueProps,
} from '@seolhun/localize-components-styled-types';
import { getMediaQueryStyles } from '@seolhun/localize-components-styled-utils';

import classnames from 'classnames';
import { AlignItemsProperty, JustifyContentProperty } from 'csstype';

interface ColProps {
  children: ReactNode;
  className?: string;
  xs?: ColumnValueProps;
  sm?: ColumnValueProps;
  md?: ColumnValueProps;
  lg?: ColumnValueProps;
  xl?: ColumnValueProps;
  alignItems?: AlignItemsProperty;
  justifyContent?: JustifyContentProperty;
}

const StyledCol = styled.div<ColProps, LocalizeThemeProps>(
  ({
    theme,
    xl,
    lg,
    md,
    sm,
    xs,
    alignItems = 'center',
    justifyContent = 'flex-start',
  }) => {
    return {
      ...((!!xs || xs === 0) && getMediaQueryStyles('XS', xs)),
      ...((!!sm || sm === 0) && getMediaQueryStyles('SM', sm)),
      ...((!!md || md === 0) && getMediaQueryStyles('MD', md)),
      ...((!!lg || lg === 0) && getMediaQueryStyles('LG', lg)),
      ...((!!xl || xl === 0) && getMediaQueryStyles('XL', xl)),
      position: 'relative',
      width: '100%',
      flex: '0 0 100%',
      alignItems,
      justifyContent,
      boxSizing: 'border-box',
      paddingTop: theme.grid.columnGutter.top,
      paddingRight: theme.grid.columnGutter.right,
      paddingLeft: theme.grid.columnGutter.left,
      paddingBottom: theme.grid.columnGutter.bottom,
    };
  },
);

const Col = ({ children, className, ...props }: ColProps) => {
  return (
    <StyledCol {...props} className={classnames('__Localize__Col', className)}>
      {children}
    </StyledCol>
  );
};

export { ColProps, Col };

export default Col;
