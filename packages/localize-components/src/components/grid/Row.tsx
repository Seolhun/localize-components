import styled from '@emotion/styled';

import { IThemeConfig } from '@seolhun/localize-components-styled-types';

import { RowProps } from './GridTypes';

export const Row = styled.div<RowProps, IThemeConfig>(
  ({ theme, flexDirection = 'row', isWrap = true }) => {
    return {
      display: 'flex',
      flexDirection,
      flexWrap: isWrap ? 'wrap' : 'nowrap',
      width: 'auth',
      padding: '0 3px',
      margin: theme.row.gutter,
    };
  }
);

export default Row;
