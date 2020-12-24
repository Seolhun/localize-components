import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeCellProps, LocalizeCellStyle } from './LocalizeCellStyle';

const CLASSNAME = '__Localize__Table__DataCell';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = DivProps & LocalizeCellProps;

export interface LocalizeTableDataCellProps extends ExtensionProps {}

const LocalizeTableDataCellWrapper = styled.div<LocalizeTableDataCellProps, LocalizeThemeProps>(
  ({
    theme,
    width,
    height,
    verticalAlign = 'center',
    horizontalAlign = 'flex-start',
    freezing,
  }) => {
    return {
      ...LocalizeCellStyle(theme),
      position: freezing ? 'fixed' : 'unset',
      display: 'inline-flex',
      alignItems: verticalAlign,
      justifyContent: horizontalAlign,
      width,
      minWidth: width,
      height: `${height}px`,
      transition: 'background-color 0.25s',
      borderRight: `1px solid ${theme.colors.neutral3}`,
      borderBottom: `1px solid ${theme.colors.neutral3}`,
      textOverflow: 'ellipsis',
      overflow: 'hidden',

      '&:first-of-type': {
        borderLeft: `1px solid ${theme.colors.neutral3}`,
      },
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
