import styled from '@emotion/styled';
import { FlexDirectionProperty } from 'csstype';

import { IThemeConfig } from '@seolhun/localize-components-styled-types';

export interface RowProps {
  isWrap?: boolean;
  flexDirection?: FlexDirectionProperty;
  css?: {};
}

export const Row = styled.div<RowProps, IThemeConfig>(
  ({ theme, flexDirection = 'row', isWrap = true, css = {} }) => {
    return {
      display: 'flex',
      flexDirection,
      flexWrap: isWrap ? 'wrap' : 'nowrap',

      width: 'auto',
      padding: '0 3px',
      marginRight: theme.row.gutter,
      marginLeft: theme.row.gutter,
      marginBottom: theme.row.gutter,
      ...css,
    };
  }
);

export default Row;
