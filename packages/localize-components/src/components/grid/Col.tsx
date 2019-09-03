import styled from '@emotion/styled';
import { isNil } from 'lodash';

import { IThemeConfig } from '@seolhun/localize-components-styled-types';

import { getMediaQueryStyles } from './GridHelpers';
import { ColProps } from './GridTypes';

export const Col = styled.div<ColProps, IThemeConfig>(({
  theme,
  gutter,
  xl,
  lg,
  md,
  sm,
  xs,
  css = {},
}) => {
    return {
      ...(xs && !isNil(xs) ? getMediaQueryStyles('XS', xs) : {}),
      ...(sm && !isNil(sm) ? getMediaQueryStyles('SM', sm) : {}),
      ...(md && !isNil(md) ? getMediaQueryStyles('MD', md) : {}),
      ...(lg && !isNil(lg) ? getMediaQueryStyles('LG', lg) : {}),
      ...(xl && !isNil(xl) ? getMediaQueryStyles('XL', xl) : {}),
      boxSizing: 'border-box',
      flexBasis: 'auto',
      flexGrow: 1,
      flexShrink: 0,
      paddingRight: gutter || theme.grid.gutter,
      paddingLeft: gutter || theme.grid.gutter,
      paddingBottom: gutter || theme.grid.gutter,
      ...css,
    };
  }
);

export default Col;
