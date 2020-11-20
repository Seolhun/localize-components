import React from 'react';
import styled from '@emotion/styled';

import { GOCThemeProps } from '@/context';
import { GOCTableProps } from './GOCTable';

export interface GOCFreezingTableProps<T> extends GOCTableProps<T> {}

const GOCFreezingTableWrapper = styled.div<{}, GOCThemeProps>(() => {
  return {
    position: 'relative',
    width: '100%',
    height: '100%',
  };
});

const GOCFreezingTableContainer = styled.div<{}, GOCThemeProps>(() => {
  return {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  };
});

/**
 * TODO: 프리징 테이블 작업 해야함
 */
function GOCFreezingTable<T>({
  children,
}: React.PropsWithChildren<GOCFreezingTableProps<T>>) {
  return (
    <GOCFreezingTableWrapper>
      <GOCFreezingTableContainer>{children}</GOCFreezingTableContainer>
    </GOCFreezingTableWrapper>
  );
}

export { GOCFreezingTable };
export default GOCFreezingTable;
