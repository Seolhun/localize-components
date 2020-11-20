import styled from '@emotion/styled';

import { LocalizeMediaQueryEnum } from './LocalizeGrid.Helpers';

export interface LocalizeContainerProps {
  isFull?: boolean;
}

const LocalizeContainer = styled.div<LocalizeContainerProps>(({ isFull }) => () => ({
  maxWidth: isFull ? '100%' : LocalizeMediaQueryEnum.LG,
  width: '100%',
  flexGrow: 1,
  flexShrink: 0,
  paddingRight: 0,
  paddingLeft: 0,
  margin: 'auto',
}));

export { LocalizeContainer };
export default LocalizeContainer;
