import React from 'react';
import styled from '@emotion/styled';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import classnames from 'classnames';

import {
  getLocalizeIntentColor,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeTableRow } from './rows';
import { LocalizeTableDataCell, LocalizeTableHeaderCell } from './cells';
import {
  LocalizeTableProps,
  LocalizeTableThemeProps,
  LocalizeTableHeaderProps,
  LocalizeTableBodyProps,
} from './LocalizeTable';
import { LocalizeHeaderRenderType, LocalizeVirtualTableColumnProps } from './LocalizeTableTypes';

const CLASSNAME = '__Localize__VirtualTable';
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps<T> = DivProps &
  LocalizeTableThemeProps &
  Omit<LocalizeTableProps<T>, 'columns' | 'fixedHeader'>;
export interface LocalizeVirtualTableProps<T = any> extends ExtentionProps<T> {
  columns: LocalizeVirtualTableColumnProps[];
}

type PickLocalizeVirtualTableType<T> = Pick<
  LocalizeVirtualTableProps<T>,
  'fixedTableHeight' | 'bordered'
>;
type LocalizeStyledVirtualTableProps<T> = LocalizeTableThemeProps & PickLocalizeVirtualTableType<T>;

interface PickLocalizeVirtualTableDataRowProps {
  columns: LocalizeVirtualTableColumnProps[];

  rowHeight?: LocalizeVirtualTableProps['rowHeight'];

  onClickRow?: (e: React.MouseEvent<HTMLDivElement>) => void;

  selectedRowClassName?: LocalizeVirtualTableProps['selectedRowClassName'];
}

/**
 * @see react-window
 * @type ListChildComponentProps
 */
interface ListChildComponentProps<T> {
  index: number;

  style: React.CSSProperties;

  data: T;

  isScrolling?: boolean;
}

type LocalizeVirtualTableDataRowProps<T> = ListChildComponentProps<T> &
  PickLocalizeVirtualTableDataRowProps;

const LocalizeStyledVirtualTable = styled.div<
  LocalizeStyledVirtualTableProps<any>,
  LocalizeThemeProps
>(
  ({
    theme,
    intent = 'default',
    localize = {
      bgColor: 'primary',
      bdColor: 'neutral3',
      fontColor: 'conversion1',
    },
    fixedTableHeight,
  }) => {
    const localizeColor = getLocalizeIntentColor(theme, intent, localize);
    const { backgroundColor, color, borderColor } = localizeColor;
    return {
      position: 'relative',
      width: 'auto',
      height: fixedTableHeight,
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

const LocalizeVirtualTableHeader = styled.div<LocalizeTableHeaderProps, LocalizeThemeProps>(
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

const LocalizeVirtualTableBody = styled.div<LocalizeTableBodyProps, LocalizeThemeProps>(
  ({ fixedHeader, fixedTableHeight, rowHeight }) => {
    return {
      display: 'flex',
      flexDirection: 'column',
      // this is differences LocalzeTable
      paddingTop: fixedHeader ? rowHeight : 0,
      height: fixedHeader ? fixedTableHeight : '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    };
  },
);

function LocalizeVirtualTableDataRow<T>({
  index,
  style,
  data,
  columns,
  rowHeight,
  onClickRow,
  ...props
}: LocalizeVirtualTableDataRowProps<T>) {
  return (
    <LocalizeTableRow {...props} style={style} onClick={onClickRow}>
      {columns.map((colum, columnIndex) => {
        return (
          <LocalizeTableDataCell
            className={colum.dataCellClassName}
            key={columnIndex}
            width={colum.width}
            height={rowHeight}
          >
            {colum.render(data, index)}
          </LocalizeTableDataCell>
        )
      })}
    </LocalizeTableRow>
  );
}

/**
 * TODO: 프리징 테이블 작업 해야함
 */
function LocalizeVirtualTable<T>({
  className,
  datasources,
  columns,
  intent,
  selectedRowClassName,
  onClickRow,
  rowHeight = 50,
  fixedTableHeight = 300,
  renderEmptyData,
  bordered = true,
  ...props
}: React.PropsWithChildren<LocalizeVirtualTableProps<T>>) {
  const memoizedFixedTableHeight = React.useMemo(() => {
    const tableHeight = fixedTableHeight + rowHeight;
    return tableHeight;
  }, [rowHeight, fixedTableHeight]);

  const memoizedFreezingColumns = React.useMemo(() => {
    return columns.sort((a, b) => {
      const prev: any = !!a.freezing;
      const next: any = !!b.freezing;
      return next - prev;
    })
  }, [JSON.stringify(columns)]);

  const handleRenderHeader = React.useCallback((header: LocalizeHeaderRenderType) => {
    if (typeof header === 'function') {
      return header();
    }
    return header;
  }, []);

  const handleOnClickRow = React.useCallback(
    (rowItem: T, rowIndex: number) => (e: React.MouseEvent<HTMLDivElement>) => {
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
    <LocalizeStyledVirtualTable
      {...props}
      className={classnames(CLASSNAME, className)}
      intent={intent}
      fixedTableHeight={memoizedFixedTableHeight}
      bordered={bordered}
    >
      <LocalizeVirtualTableHeader
        className={classnames(`${CLASSNAME}__Header`)}
        fixedHeader={true}
        rowHeight={rowHeight}
      >
        <LocalizeTableRow>
          {memoizedFreezingColumns.map((colum, headerRowIndex) => (
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
      </LocalizeVirtualTableHeader>
      <LocalizeVirtualTableBody
        className={classnames(`${CLASSNAME}__Body`)}
        fixedHeader={true}
        fixedTableHeight={fixedTableHeight}
        rowHeight={rowHeight}
      >
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              className={classnames(CLASSNAME, className)}
              height={height}
              width={width}
              itemCount={datasources.length}
              itemSize={rowHeight}
            >
              {(listProps) => {
                const { index } = listProps;
                const data = datasources[index];
                return (
                  <LocalizeVirtualTableDataRow<T>
                    {...listProps}
                    data={datasources[index]}
                    columns={columns}
                    selectedRowClassName={handleSelectedRowClassName}
                    onClickRow={handleOnClickRow(data, index)}
                    rowHeight={rowHeight}
                  />
                );
              }}
            </FixedSizeList>
          )}
        </AutoSizer>
      </LocalizeVirtualTableBody>
    </LocalizeStyledVirtualTable>
  );
}

export { LocalizeVirtualTable };
export default LocalizeVirtualTable;
