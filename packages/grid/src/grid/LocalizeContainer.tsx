import styled from '@emotion/styled';

export interface LocalizeContainerProps {
  isFull?: boolean;
}

const LocalizeContainer = styled.div<LocalizeContainerProps>(({ isFull }) => () => ({
  maxWidth: isFull ? '100%' : '1200px',
  width: '100%',
  flexGrow: 1,
  flexShrink: 0,
  paddingRight: 0,
  paddingLeft: 0,
  margin: 'auto',
}));

export { LocalizeContainer };
export default LocalizeContainer;
