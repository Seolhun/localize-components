import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeThemeProps,
  ColumnValueProps,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';
import { getMediaQueryStyles } from '@seolhun/localize-components-styled-utils';

import { AlignItemsProperty, JustifyContentProperty } from 'csstype';

const DEFAULT_CLASSNAME = '__Localize__Col';
type DivProps = React.HTMLAttributes<HTMLDivElement>;

interface LocalizeColProps extends LocalizeProps, DivProps {
  className?: string;
  xs?: ColumnValueProps;
  sm?: ColumnValueProps;
  md?: ColumnValueProps;
  lg?: ColumnValueProps;
  xl?: ColumnValueProps;
  alignItems?: AlignItemsProperty;
  justifyContent?: JustifyContentProperty;
}

const StyledCol = styled.div<LocalizeColProps, LocalizeThemeProps>(
  ({ theme, xl, lg, md, sm, xs, alignItems = 'center', justifyContent = 'flex-start' }) => {
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

const LocalizeCol: React.FC<LocalizeColProps> = ({ children, className, ...props }) => {
  return (
    <StyledCol {...props} className={classnames(DEFAULT_CLASSNAME, className)}>
      {children}
    </StyledCol>
  );
};

export { LocalizeColProps, LocalizeCol };

export default LocalizeCol;
