import styled from '@emotion/styled';

import {
  AlignItemsProperty,
  FlexDirectionProperty,
  JustifyContentProperty,
} from 'csstype';
import { LocalizeProps } from '@seolhun/localize-components-styled-types';

export interface LocalizeFlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    LocalizeProps {
  justifyContent?: JustifyContentProperty;

  alignItems?: AlignItemsProperty;

  flexDirection?: FlexDirectionProperty;
}

const LocalizeFlex = styled.div<LocalizeFlexProps>(
  ({ flexDirection, alignItems, justifyContent }) => {
    return {
      display: 'flex',
      flex: '1',
      flexDirection,
      alignItems,
      justifyContent,
      width: '100%',
    };
  },
);

export default LocalizeFlex;
