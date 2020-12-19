import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { Property } from 'csstype';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeCellStyle } from './LocalizeCellStyle';
import {
  LocalizeCellVerticalAlignType,
  LocalizeCellHorizontalAlignType,
} from '../LocalizeTableTypes';

const CLASSNAME = '__Localize__Table__DataCell';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = DivProps;

export interface LocalizeTableDataCellProps extends ExtensionProps {
  width?: Property.Width;

  height?: number;

  verticalAlign?: LocalizeCellVerticalAlignType;

  horizontalAlign?: LocalizeCellHorizontalAlignType;
}

const LocalizeTableDataCellWrapper = styled.div<LocalizeTableDataCellProps, LocalizeThemeProps>(
  ({ theme, width, height, verticalAlign = 'center', horizontalAlign = 'flex-start' }) => {
    return {
      ...LocalizeCellStyle(theme),
      display: 'inline-flex',
      alignItems: verticalAlign,
      justifyContent: horizontalAlign,
      width,
      height: `${height}px`,
    };
  },
);

const LocalizeTableDataCell: React.FC<LocalizeTableDataCellProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <LocalizeTableDataCellWrapper {...props} className={classnames(CLASSNAME, className)}>
      {children}
    </LocalizeTableDataCellWrapper>
  );
};

export { LocalizeTableDataCell };
export default LocalizeTableDataCell;
