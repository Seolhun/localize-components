import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { Property } from 'csstype';

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
} from './LocalizeTableColumnTypes';

const CLASSNAME = '__Localize__Table';
type TableProps = React.TableHTMLAttributes<HTMLTableElement>;
type ExtentionProps = LocalizeTableThemeProps & TableProps;

interface LocalizeTableThemeProps extends LocalizeProps {
  /**
   * Set this to change intent color
   * @default default
   */
  intent?: LocalizeIntentThemeType;
}

export interface LocalizeTableProps<T = any> extends ExtentionProps {
  datasources: T[];

  columns: LocalizeTableColumnProps<T>[];

  renderFooter?: () => React.ReactNode;

  /**
   * Set this to change table cell border
   */
  bordered?: boolean;

  /**
   * @name RowPart
   */
  selectedRowClassName?: (rowItem: T) => string;

  /**
   * onClickRow handler
   */
  onClickRow?: LocalizeTableRowEventHandler<T>;

  /**
   * @default 50px
   * Set this this change row height
   * responsive가 true일 경우 rowHeight값은 minHeight로 바뀜
   * TODO: 고정 높이 해결해야 함
   */
  rowHeight?: Property.Height;

  /**
   * @default true
   * Set this this change row responsive
   * 만약에 fixedHeader라면 rowHeight 기준으로 동작하게 됨
   * TODO: 고정 높이 해결해야 함
   */
  responsive?: boolean;

  /**
   * @name CellPart
   */
  fixedHeader?: LocalizeTableHeaderProps['fixedHeader'];

  /**
   * @name OptionPart
   */
  /**
   * @default 'No Data'
   */
  renderEmptyData?: () => React.ReactNode;
}

interface LocalizeTableHeaderProps {
  /**
   * Table header is fixed
   */
  fixedHeader?: boolean;
}

interface LocalizeTableHeaderProps {
  /**
   * Table header is fixed
   */
  fixedHeader?: boolean;
}

interface LocalizeTableBodyProps {
  /**
   * Table header is fixed
   */
  fixedHeader?: LocalizeTableHeaderProps['fixedHeader'];

  rowHeight?: LocalizeTableProps['rowHeight'];
}

const LocalizeStyledTableWrapper = styled.div<LocalizeTableThemeProps, LocalizeThemeProps>(
  ({
    theme,
    intent = 'default',
    localize = {
      bgColor: 'primary',
      bdColor: 'neutral3',
      fontColor: 'conversion1',
    },
  }) => {
    const localizeColor = getLocalizeIntentColor(theme, intent, localize);
    const { borderColor } = localizeColor;
    return {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'auto',
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
    const localizeColor = getLocalizeIntentColor(theme, intent, localize);
    const { backgroundColor, color, borderColor } = localizeColor;
    return {
      width: '100%',
      height: '100%',

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
      position: fixedHeader ? 'fixed' : 'unset',
      zIndex: 1,
    };
  },
);

const LocalizeTableBody = styled.tbody<LocalizeTableBodyProps, LocalizeThemeProps>(
  ({ fixedHeader, rowHeight }) => {
    return {
      position: fixedHeader ? 'absolute' : 'unset',
      marginTop: fixedHeader ? rowHeight : '0',
    };
  },
);

const LocalizeStyledTableFooterWrapper = styled.div<
  { height: Property.Height },
  LocalizeThemeProps
>(({ theme, height }) => {
  return {
    width: '100%',
    height: '100%',
    minHeight: height,
    backgroundColor: theme.colors.neutral3,
    borderRight: `1px solid ${theme.colors.neutral4}`,
    borderBottom: `1px solid ${theme.colors.neutral4}`,
    borderLeft: `1px solid ${theme.colors.neutral4}`,
  };
});

function LocalizeTable<T>({
  datasources,
  columns,
  intent,
  renderFooter,
  selectedRowClassName,
  onClickRow,
  rowHeight = '50px',
  responsive = true,
  fixedHeader,
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

  const handleRenderFooter = React.useCallback(() => {
    if (renderFooter) {
      return renderFooter();
    }
    return null;
  }, [renderFooter]);

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
    <LocalizeStyledTableWrapper {...props} intent={intent}>
      <LocalizeStyledTable {...props} className={classnames(CLASSNAME)} intent={intent}>
        <>
          <LocalizeTableHeader fixedHeader={fixedHeader}>
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
          <LocalizeTableBody fixedHeader={fixedHeader} rowHeight={rowHeight}>
            {datasources.length === 0 ? (
              <LocalizeTableRow height="200px" responsive={responsive}>
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
      {renderFooter && (
        <LocalizeStyledTableFooterWrapper height={rowHeight}>
          {handleRenderFooter()}
        </LocalizeStyledTableFooterWrapper>
      )}
    </LocalizeStyledTableWrapper>
  );
}

export { LocalizeTable };
export default LocalizeTable;
