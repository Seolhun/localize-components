import styled from '@emotion/styled';
import { isNil } from 'lodash';

import { IThemeConfig } from '@seolhun/localize-components-styled-types';

import { getMediaQueryStyles } from './GridHelpers';
import { ColProps } from './GridTypes';

export const Col = styled.div<ColProps, IThemeConfig>(
  ({ theme, gutter, xl, lg, md, sm, xs, styles }) => {
    return {
      ...(!isNil(xs) ? getMediaQueryStyles('XS', xs) : {}),
      ...(!isNil(sm) ? getMediaQueryStyles('SM', sm) : {}),
      ...(!isNil(md) ? getMediaQueryStyles('MD', md) : {}),
      ...(!isNil(lg) ? getMediaQueryStyles('LG', lg) : {}),
      ...(!isNil(xl) ? getMediaQueryStyles('XL', xl) : {}),
      boxSizing: 'border-box',
      flexBasis: 'auto',
      flexGrow: 1,
      flexShrink: 0,
      paddingRight: gutter || theme.grid.gutter,
      paddingLeft: gutter || theme.grid.gutter,
      paddingBottom: '0.5rem',
      ...styles,
    };
  }
);

export default Col;
