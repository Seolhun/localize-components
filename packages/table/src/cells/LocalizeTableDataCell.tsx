import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { Property } from 'csstype';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeCellStyle } from './LocalizeCellStyle';

const CLASSNAME = '__Localize__Table__HeaderCell';

type TdProps = React.HTMLAttributes<HTMLTableDataCellElement>;
type ExtensionProps = TdProps;
export interface LocalizeTableDataCellProps extends ExtensionProps {
  width?: Property.Width;
}

const LocalizeTableDataCellWrapper = styled.td<LocalizeTableDataCellProps, LocalizeThemeProps>(({ theme, width }) => {
  return {
    ...LocalizeCellStyle(theme),
    width,
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
