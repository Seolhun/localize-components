import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Table__Row';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = DivProps;
export interface LocalizeTableRowProps extends ExtensionProps {}

const LocalizeStyledTableRow = styled.div<LocalizeTableRowProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      display: 'flex',
      flex: 1,
      flexWrap: 'nowrap',

      '&:first-of-type': {
        borderLeft: `1px solid ${theme.colors.neutral4}`,
      },
      '&:last-of-type': {
        borderBottom: `1px solid ${theme.colors.neutral4}`,
      },
    };
  },
);

const LocalizeTableRow: React.FC<LocalizeTableRowProps> = ({ children, className, ...props }) => {
  return (
    <LocalizeStyledTableRow {...props} className={classnames(CLASSNAME, className)}>
      {children}
    </LocalizeStyledTableRow>
  );
};

export { LocalizeTableRow };
export default LocalizeTableRow;
