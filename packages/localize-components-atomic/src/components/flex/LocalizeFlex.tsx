import styled from '@emotion/styled';

import {
  AlignItemsProperty,
  FlexDirectionProperty,
  JustifyContentProperty,
} from 'csstype';
import { LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

export interface LocalizeFlexProps extends LocalizeBaseStyledProps {
  justifyContent?: JustifyContentProperty;
  alignItems?: AlignItemsProperty;
  flexDirection?: FlexDirectionProperty;
}

export const LocalizeFlex = styled.div<LocalizeFlexProps>(
  ({ flexDirection, alignItems, justifyContent }) => {
    return {
      width: '100%',
      flex: '1',
      display: 'flex',
      flexDirection,
      alignItems,
      justifyContent,
    };
  },
);
