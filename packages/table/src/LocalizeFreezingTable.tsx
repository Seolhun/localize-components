import React from 'react';
import styled from '@emotion/styled';
import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeTableProps } from './LocalizeTable';

type ExtentionProps<T = any> = LocalizeProps & LocalizeTableProps<T>;

export interface LocalizeFreezingTableProps<T> extends ExtentionProps<T> {}

const LocalizeFreezingTableWrapper = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    position: 'relative',
    width: '100%',
    height: '100%',
  };
});

const LocalizeFreezingTableContainer = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  };
});

/**
 * TODO: 프리징 테이블 작업 해야함
 */
function LocalizeFreezingTable<T>({
  children,
}: React.PropsWithChildren<LocalizeFreezingTableProps<T>>) {
  return (
    <LocalizeFreezingTableWrapper>
      <LocalizeFreezingTableContainer>{children}</LocalizeFreezingTableContainer>
    </LocalizeFreezingTableWrapper>
  );
}

export { LocalizeFreezingTable };
export default LocalizeFreezingTable;
