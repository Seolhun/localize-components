import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeCellStyle } from './LocalizeCellStyle';

const CLASSNAME = '__Localize__Table__HeaderCell';

type TdProps = React.TableHTMLAttributes<HTMLTableDataCellElement>;
type ExtensionProps = TdProps;
export interface LocalizeTableDataCellProps extends ExtensionProps {}

const LocalizeTableDataCellWrapper = styled.td<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    ...LocalizeCellStyle(theme),
  };
});

const LocalizeTableDataCell: React.FC<LocalizeTableDataCellProps> = ({ children, className }) => {
  return (
    <LocalizeTableDataCellWrapper className={classnames(CLASSNAME, className)}>
      {children}
    </LocalizeTableDataCellWrapper>
  );
};

export { LocalizeTableDataCell };
export default LocalizeTableDataCell;
