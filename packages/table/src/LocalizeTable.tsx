import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  getLocalizeIntentColor,
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
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps = DivProps & LocalizeTableThemeProps;

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
   */
  rowHeight?: number;

  /**
   * Set this to change table header fixed
   */
  fixedHeader?: boolean;

  /**
   * Set this to change table height
   * @default 500
   */
  fixedTableHeight?: number;

  /**
   * Set this to change no data node
   * @default 'No Data'
   */
  renderEmptyData?: () => React.ReactNode;

  /**
   * Set this to change table cell border
   * @default true
   */
  bordered?: boolean;
}

export interface LocalizeTableThemeProps extends LocalizeProps {
  /**
   * Set this to change variant
   * @default default
   */
  intent?: LocalizeIntentThemeType;
}

type PickLocalizeTableType = Pick<
  LocalizeTableProps,
  'fixedHeader' | 'fixedTableHeight' | 'bordered'
>;
type LocalizeStyledTableProps = LocalizeTableThemeProps & PickLocalizeTableType;

export interface LocalizeTableHeaderProps {
  fixedHeader?: LocalizeTableProps['fixedHeader'];

  rowHeight?: LocalizeTableProps['rowHeight'];
}

export interface LocalizeTableBodyProps {
  fixedHeader?: LocalizeTableProps['fixedHeader'];

  fixedTableHeight?: LocalizeTableProps['fixedTableHeight'];

  rowHeight?: LocalizeTableProps['rowHeight'];
}

const LocalizeStyledTable = styled.div<LocalizeStyledTableProps, LocalizeThemeProps>(
  ({
    theme,
    intent = 'default',
    localize = {
      primaryColor: 'default',
      neutralColor: 'transparent',
      fontColor: 'inversed1',
      inversedColor: 'inversed10',
    },
    fixedHeader,
    fixedTableHeight,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor, fontColor, inversedFontColor } = localizedColor;

    return {
      position: 'relative',
      width: fixedHeader ? 'auto' : '100%',
      height: fixedHeader ? fixedTableHeight : '100%',
      borderSpacing: 0,
      borderColor: neutralColor,
      overflowY: 'auto',
      overflowX: 'hidden',

      '.__Localize__Table__Row': {
        borderColor: neutralColor,
      },
      '.__Localize__Table__HeaderCell': {
        backgroundColor: primaryColor,
        borderColor: neutralColor,
        color: inversedFontColor,
      },
      '.__Localize__Table__DataCell': {
        borderColor: neutralColor,
        color: fontColor,
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
    };
  },
);

function LocalizeTable<T = any>({
  className,
  datasources,
  columns,
  intent,
  selectedRowClassName,
  onClickRow,
  rowHeight = 50,
  fixedHeader,
  fixedTableHeight = 500,
  renderEmptyData,
  bordered = true,
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
    <LocalizeStyledTable
      {...props}
      className={classnames(CLASSNAME, className)}
      intent={intent}
      fixedHeader={fixedHeader}
      fixedTableHeight={memoizedFixedTableHeight}
      bordered={bordered}
    >
      <LocalizeTableHeader
        className={classnames(`${CLASSNAME}__Header`)}
        fixedHeader={fixedHeader}
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
