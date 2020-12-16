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
} from './LocalizeTableColumnTypes';

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
   * Set this to change table footer
   */
  renderOption?: () => React.ReactNode;

  /**
   * Set this to change table cell border
   */
  bordered?: boolean;

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
   * @default true
   * Set this this change row responsive
   * 만약에 fixedHeader라면 rowHeight 기준으로 동작하게 됨
   * TODO: 고정 높이 해결해야 함
   */
  responsive?: boolean;

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
}

type LocalizeTableWrapperProps = LocalizeTableThemeProps & Pick<LocalizeTableProps, 'fixedHeader'| 'fixedTableHeight'>

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

interface LocalizeTableOptionProps {
  rowHeight?: LocalizeTableProps['rowHeight'];
}

const LocalizeStyledTableWrapper = styled.div<LocalizeTableWrapperProps, LocalizeThemeProps>(
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
    const { borderColor } = localizeColor;
    return {
      position: 'relative',
      width: '100%',
      height: fixedHeader ? fixedTableHeight : '100%',
      border: `1px solid ${borderColor}`,
    };
  },
);

const LocalizeStyledTable = styled.table<LocalizeTableThemeProps, LocalizeThemeProps>(
  ({
    theme,
    intent = 'default',
    localize = {
      bgColor: 'primary',
      bdColor: 'neutral3',
      fontColor: 'conversion1',
    },
  }) => {
    const localizeColor = getLocalizeIntentAndColor(theme, intent, localize);
    const { backgroundColor, color, borderColor } = localizeColor;
    return {
      width: '100%',
      height: '100%',
      borderSpacing: 0,
      borderColor,

      th: {
        backgroundColor,
        borderColor,
        color,
      },
      td: {
        borderColor,
      },
    };
  },
);

const LocalizeTableHeader = styled.thead<LocalizeTableHeaderProps, LocalizeThemeProps>(
  ({ fixedHeader }) => {
    return {
      position: fixedHeader ? 'absolute' : 'unset',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 1,
    };
  },
);

const LocalizeTableBody = styled.tbody<LocalizeTableBodyProps, LocalizeThemeProps>(
  ({ fixedHeader, fixedTableHeight, rowHeight }) => {
    return {
      position: fixedHeader ? 'absolute' : 'unset',
      top: 0,
      right: 0,
      left: 0,
      marginTop: fixedHeader ? rowHeight : 0,
      height: fixedHeader ? fixedTableHeight : '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    };
  },
);

const LocalizeTableOption = styled.div<LocalizeTableOptionProps, LocalizeThemeProps>(
  ({ theme, rowHeight }) => {
    return {
      width: '100%',
      minHeight: rowHeight,
      backgroundColor: theme.colors.neutral3,
      borderRight: `1px solid ${theme.colors.neutral4}`,
      borderBottom: `1px solid ${theme.colors.neutral4}`,
      borderLeft: `1px solid ${theme.colors.neutral4}`,
    };
  },
);

function LocalizeTable<T>({
  datasources,
  columns,
  intent,
  renderOption,
  selectedRowClassName,
  onClickRow,
  rowHeight = 50,
  responsive = true,
  fixedHeader,
  fixedTableHeight = 300,
  renderEmptyData,
  ...props
}: LocalizeTableProps<T>) {
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

  const handleRenderOption = React.useCallback(() => {
    if (renderOption) {
      return renderOption();
    }
    return null;
  }, [renderOption]);

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

  const memoizedFixedTableHeight = React.useMemo(() => {
    let tableHeight = fixedTableHeight;
    if (renderOption) {
      tableHeight += rowHeight;
    }
    if (fixedHeader) {
      tableHeight += rowHeight;
    }
    return tableHeight;
  }, [renderOption, rowHeight, fixedHeader, fixedTableHeight])

  return (
    <LocalizeStyledTableWrapper {...props} intent={intent}
    fixedHeader={fixedHeader}
    fixedTableHeight={memoizedFixedTableHeight}
    >
      <LocalizeStyledTable {...props} className={classnames(CLASSNAME)} intent={intent}>
        <>
          <LocalizeTableHeader
            fixedHeader={fixedHeader}
            fixedTableHeight={fixedTableHeight}
            rowHeight={rowHeight}
          >
            <LocalizeTableRow height={rowHeight} responsive={responsive}>
              {columns.map((colum, headerRowIndex) => (
                <LocalizeTableHeaderCell
                  key={headerRowIndex}
                  className={colum.headerClassName}
                  width={colum.width}
                >
                  {handleRenderHeader(colum.header)}
                </LocalizeTableHeaderCell>
              ))}
            </LocalizeTableRow>
          </LocalizeTableHeader>
          <LocalizeTableBody
            fixedHeader={fixedHeader}
            fixedTableHeight={fixedTableHeight}
            rowHeight={rowHeight}
          >
            {datasources.length === 0 ? (
              <LocalizeTableRow height={fixedTableHeight} responsive={responsive}>
                <td colSpan={columns.length} align="center">
                  {handleRenderEmptyData()}
                </td>
              </LocalizeTableRow>
            ) : (
              datasources.map((rowData, bodyRowIndex) => {
                return (
                  <LocalizeTableRow
                    key={bodyRowIndex}
                    className={classnames(handleSelectedRowClassName(rowData))}
                    onClick={handleOnClickRow(rowData, bodyRowIndex)}
                    height={rowHeight}
                    responsive={responsive}
                  >
                    {columns.map((colum, columnIndex) => (
                      <LocalizeTableDataCell
                        className={colum.dataClassName}
                        key={columnIndex}
                        width={colum.width}
                      >
                        {colum.render(rowData, bodyRowIndex)}
                      </LocalizeTableDataCell>
                    ))}
                  </LocalizeTableRow>
                );
              })
            )}
          </LocalizeTableBody>
        </>
      </LocalizeStyledTable>
      {renderOption && (
        <LocalizeTableOption rowHeight={rowHeight}>{handleRenderOption()}</LocalizeTableOption>
      )}
    </LocalizeStyledTableWrapper>
  );
}

export { LocalizeTable };
export default LocalizeTable;
