import React, { SFC, ReactNode } from 'react';

import styled from '@emotion/styled';

const RowComponent = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
});

interface RowProps {
  children: ReactNode,
  className: string,
  styles: {},
}

const Row: SFC<RowProps> = ({
  children = null,
  className = '',
  styles = {},
}) => {
  return (
    <RowComponent className={className} css={styles}>
      {children}
    </RowComponent>
  );
}

export default Row;
