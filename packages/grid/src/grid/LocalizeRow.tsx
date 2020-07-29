import styled from '@emotion/styled';
import { FlexDirectionProperty } from 'csstype';

export interface LocalizeRowProps {
  noWrap?: boolean;
  flexDirection?: FlexDirectionProperty;
}

const LocalizeRow = styled.div<LocalizeRowProps>(({ noWrap, flexDirection = 'row' }) => ({
  display: 'flex',
  width: 'auto',
  flexDirection,
  flexWrap: noWrap ? 'unset' : 'wrap',
  overflow: noWrap ? 'auto' : 'hidden',
}));

export { LocalizeRow };
export default LocalizeRow;
