import styled from '@emotion/styled';

import { IThemeConfig } from '@seolhun/localize-components-styled-types';

import { MediaQueries } from './GridTypes';
import { createMediaQueryCondition } from './GridHelpers';

export interface ContainerProps {
  isFullWidth?: boolean;
  css?: {};
}

export const Container = styled.div<ContainerProps, IThemeConfig>(
  ({ isFullWidth = false, css = {} }) => {
    const responsiveStyles = {
      [`@media ${createMediaQueryCondition('SM')}`]: {
        maxWidth: `${MediaQueries.XL - 36}px`,
      },
      [`@media ${createMediaQueryCondition('MD')}`]: {
        maxWidth: `${MediaQueries.XL - 38}px`,
      },
      [`@media ${createMediaQueryCondition('LG')}`]: {
        maxWidth: `${MediaQueries.XL - 32}px`,
      },
      [`@media ${createMediaQueryCondition('XL')}`]: {
        maxWidth: `${MediaQueries.XL - 60}px`,
      },
    }
    return {
      ...(!isFullWidth ? responsiveStyles : {}),

      width: '100%',
      paddingBottom: '80px',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      ...css,
    };
  }
);

export default Container;
