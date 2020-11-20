import React from 'react';
import styled from '@emotion/styled';

import { GOCThemeProps } from '@/context';

import { GOCTableProps } from '../GOCTable';

type TrProps = React.TableHTMLAttributes<HTMLTableRowElement>;
type ExtensionProps = TrProps;
export interface GOCTableRowProps extends ExtensionProps {
  height: string;

  responsive: GOCTableProps['responsive'];
}

const GOCStyledTableRow = styled.tr<GOCTableRowProps, GOCThemeProps>(({ theme, height, responsive }) => {
  return {
    ...(responsive ? {
      minHeight: height,
    } : {
      height,
    }),

    '&:first-child': {
      borderLeft: `1px solid ${theme.colors.neutral4}`,
    },
    '&:last-child': {
      borderBottom: `1px solid ${theme.colors.neutral4}`,
    },
  };
});

const GOCTableRow: React.FC<GOCTableRowProps> = ({ children, ...props }) => {
  return <GOCStyledTableRow { ...props}>{children}</GOCStyledTableRow>;
};

export { GOCTableRow };
export default GOCTableRow;
