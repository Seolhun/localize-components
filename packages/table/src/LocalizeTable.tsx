import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  getLocalizeIntentAndColor,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeTableRow } from './rows';
import { LocalizeTableHeaderCell, LocalizeTableDataCell } from './cells';
import {
  LocalizeHeaderRenderType,
  LocalizeTableColumnProps,
  LocalizeTableRowEventHandler,
} from './LocalizeTableTypes';

const CLASSNAME = '__Localize__Table';
type TableProps = React.TableHTMLAttributes<HTMLTableElement>;
type ExtentionProps = LocalizeTableThemeProps & TableProps;

interface LocalizeTableThemeProps extends LocalizeProps {
  /**
   * Set this to change variant
   * @default default
   */
  intent?: LocalizeIntentThemeType;
}

export interface LocalizeTableProps<T = any> extends ExtentionProps {
  /**
   * Set this to render data
   */
  datasources: T[];

  /**
   * Set this to change rendering configuration columns
   */
  columns: LocalizeTableColumnProps<T>[];

  /**
   * Set this to change selected className
   */
  selectedRowClassName?: (rowItem: T) => string;

  /**
   * onClickRow handler
   */
  onClickRow?: LocalizeTableRowEventHandler<T>;

  /**
   * @default 50
   * Set this this change row height
   * responsive가 true일 경우 rowHeight값은 minHeight로 바뀜
   * TODO: 고정 높이 해결해야 함
   */
  rowHeight?: number;

  /**
   * Set this to change table header fixed
   */
  fixedHeader?: boolean;

  /**
   * Set this to change table height
   * @default 300
   */
  fixedTableHeight?: number;

  /**
   * Set this to change no data node
   * @default 'No Data'
   */
  renderEmptyData?: () => React.ReactNode;

  /**
   * Set this to change table cell border
   */
  bordered?: boolean;
}

type PickStyledTableType = Pick<
  LocalizeTableProps,
  'fixedHeader' | 'fixedTableHeight' | 'bordered'
>;
type LocalizeStyledTableProps = LocalizeTableThemeProps & PickStyledTableType;

interface LocalizeTableHeaderProps {
  fixedHeader?: LocalizeTableProps['fixedHeader'];

  fixedTableHeight?: LocalizeTableProps['fixedTableHeight'];

  rowHeight?: LocalizeTableProps['rowHeight'];
}

interface LocalizeTableBodyProps {
  fixedHeader?: LocalizeTableProps['fixedHeader'];

  fixedTableHeight?: LocalizeTableProps['fixedTableHeight'];

  rowHeight?: LocalizeTableProps['rowHeight'];
}

const LocalizeStyledTable = styled.div<LocalizeStyledTableProps, LocalizeThemeProps>(
  ({
    theme,
    intent = 'default',
    localize = {
      bgColor: 'primary',
      bdColor: 'neutral3',
      fontColor: 'conversion1',
    },
    fixedHeader,
    fixedTableHeight,
  }) => {
    const localizeColor = getLocalizeIntentAndColor(theme, intent, localize);
    const { backgroundColor, color, borderColor } = localizeColor;
    return {
      width: fixedHeader ? 'auto' : '100%',
      height: fixedHeader ? fixedTableHeight : '100%',
      borderSpacing: 0,
      borderColor,

      '.__Localize__Table__Row': {
        borderColor,
      },
      '.__Localize__Table__HeaderCell': {
        backgroundColor,
        borderColor,
        color,
      },
      '.__Localize__Table__DataCell': {
        borderColor,
      },
    };
  },
);

const LocalizeTableHeader = styled.div<LocalizeTableHeaderProps, LocalizeThemeProps>(
  ({ fixedHeader }) => {
    return {
      display: 'flex',
      flexDirection: 'column',
      position: fixedHeader ? 'absolute' : 'unset',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 1,
    };
  },
);

const LocalizeTableBody = styled.div<LocalizeTableBodyProps, LocalizeThemeProps>(
  ({ fixedHeader, fixedTableHeight, rowHeight }) => {
    return {
      display: 'flex',
      flexDirection: 'column',
      marginTop: fixedHeader ? rowHeight : 0,
      height: fixedHeader ? fixedTableHeight : '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    };
  },
);

function LocalizeTable<T>({
  className,
  datasources,
  columns,
  intent,
  selectedRowClassName,
  onClickRow,
  rowHeight = 50,
  fixedHeader,
  fixedTableHeight = 300,
  renderEmptyData,
  bordered,
  ...props
}: LocalizeTableProps<T>) {
  const memoizedFixedTableHeight = React.useMemo(() => {
    let tableHeight = fixedTableHeight;
    if (fixedHeader) {
      tableHeight += rowHeight;
    }
    return tableHeight;
  }, [rowHeight, fixedHeader, fixedTableHeight]);

  const handleRenderEmptyData = React.useCallback(() => {
    if (renderEmptyData) {
      return renderEmptyData();
    }
    return 'No Data';
  }, [renderEmptyData]);

  const handleRenderHeader = React.useCallback((header: LocalizeHeaderRenderType) => {
    if (typeof header === 'function') {
      return header();
    }
    return header;
  }, []);

  const handleOnClickRow = React.useCallback(
    (rowItem: T, rowIndex: number) => async (e: React.MouseEvent<HTMLTableRowElement>) => {
      e.stopPropagation();

      if (onClickRow) {
        onClickRow(rowItem, rowIndex);
      }
    },
    [onClickRow],
  );

  const handleSelectedRowClassName = React.useCallback(
    (rowItem: T) => {
      if (selectedRowClassName) {
        return selectedRowClassName(rowItem);
      }
      return '';
    },
    [selectedRowClassName],
  );

  return (
    <LocalizeStyledTable
      {...props}
      className={classnames(CLASSNAME)}
      intent={intent}
      fixedHeader={fixedHeader}
      fixedTableHeight={memoizedFixedTableHeight}
      bordered={bordered}
    >
      <LocalizeTableHeader
        className={classnames(`${CLASSNAME}__Header`)}
        fixedHeader={fixedHeader}
        fixedTableHeight={fixedTableHeight}
        rowHeight={rowHeight}
      >
        <LocalizeTableRow>
          {columns.map((colum, headerRowIndex) => (
            <LocalizeTableHeaderCell
              key={headerRowIndex}
              className={colum.headerCellClassName}
              width={colum.width}
              height={rowHeight}
            >
              {handleRenderHeader(colum.header)}
            </LocalizeTableHeaderCell>
          ))}
        </LocalizeTableRow>
      </LocalizeTableHeader>
      <LocalizeTableBody
        className={classnames(`${CLASSNAME}__Body`)}
        fixedHeader={fixedHeader}
        fixedTableHeight={fixedTableHeight}
        rowHeight={rowHeight}
      >
        {datasources.length === 0 ? (
          <LocalizeTableRow>
            <LocalizeTableDataCell width="100%" height={rowHeight}>
              {handleRenderEmptyData()}
            </LocalizeTableDataCell>
          </LocalizeTableRow>
        ) : (
          datasources.map((rowData, bodyRowIndex) => {
            return (
              <LocalizeTableRow
                key={bodyRowIndex}
                className={classnames(handleSelectedRowClassName(rowData))}
                onClick={handleOnClickRow(rowData, bodyRowIndex)}
              >
                {columns.map((colum, columnIndex) => (
                  <LocalizeTableDataCell
                    className={colum.dataCellClassName}
                    key={columnIndex}
                    width={colum.width}
                    height={rowHeight}
                  >
                    {colum.render(rowData, bodyRowIndex)}
                  </LocalizeTableDataCell>
                ))}
              </LocalizeTableRow>
            );
          })
        )}
      </LocalizeTableBody>
    </LocalizeStyledTable>
  );
}

export { LocalizeTable };
export default LocalizeTable;
