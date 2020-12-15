import React from 'react';
import styled from '@emotion/styled';
import { Property } from 'csstype';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeTableProps } from '../LocalizeTable';

type TrProps = React.HTMLAttributes<HTMLTableRowElement>;
type ExtensionProps = TrProps;
export interface LocalizeTableRowProps extends ExtensionProps {
  height: Property.Height;

  responsive: LocalizeTableProps['responsive'];
}

const LocalizeStyledTableRow = styled.tr<LocalizeTableRowProps, LocalizeThemeProps>(
  ({ theme, height, responsive }) => {
    return {
      ...(responsive
        ? {
            minHeight: height,
          }
        : {
            height,
          }),

      '&:first-of-type': {
        borderLeft: `1px solid ${theme.colors.neutral4}`,
      },
      '&:last-of-type': {
        borderBottom: `1px solid ${theme.colors.neutral4}`,
      },
    };
  },
);

const LocalizeTableRow: React.FC<LocalizeTableRowProps> = ({ children, ...props }) => {
  return <LocalizeStyledTableRow {...props}>{children}</LocalizeStyledTableRow>;
};

export { LocalizeTableRow };
export default LocalizeTableRow;
