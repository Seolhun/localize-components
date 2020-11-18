import styled from '@emotion/styled';

import { getMediaQueryStyles, ColumnValue } from './LocalizeGrid.Helpers';

export interface BDColProps {
  xl?: ColumnValue;
  lg?: ColumnValue;
  md?: ColumnValue;
  sm?: ColumnValue;
  xs?: ColumnValue;

  /**
   * @default 8px
   */
  gutter?: string;
  order?: number;
}

const LocalizeCol = styled.div<BDColProps>(({ order, gutter = '8px', xl, lg, md, sm, xs }) => ({
  ...getMediaQueryStyles({
    xl,
    lg,
    md,
    sm,
    xs,
  }),
  boxSizing: 'border-box',
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 0,
  order,
  paddingRight: gutter,
  paddingLeft: gutter,
  paddingBottom: '1rem',
}));

export { LocalizeCol };
export default LocalizeCol;