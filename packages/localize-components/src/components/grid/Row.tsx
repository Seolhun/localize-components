import styled from '@emotion/styled';

import { IThemeConfig } from '@seolhun/localize-components-styled-types';

import { RowProps } from './GridTypes';

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
