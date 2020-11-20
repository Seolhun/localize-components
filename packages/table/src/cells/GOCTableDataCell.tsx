import React from 'react';
import styled from '@emotion/styled';

import { GOCThemeProps } from '@/context';

import GOCCellStyles from './GOCCellStyle';

type TdProps = React.TableHTMLAttributes<HTMLTableDataCellElement>;
type ExtensionProps = TdProps;
export interface GOCTableDataCellProps extends ExtensionProps {}

const GOCTableDataCellWrapper = styled.td<{}, GOCThemeProps>(({ theme }) => {
  return {
    ...GOCCellStyles(theme),
  };
});

const GOCTableDataCell: React.FC<GOCTableDataCellProps> = ({ children }) => {
  return <GOCTableDataCellWrapper>{children}</GOCTableDataCellWrapper>;
};

export { GOCTableDataCell };
export default GOCTableDataCell;
