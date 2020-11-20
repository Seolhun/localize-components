import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeTableRow } from './rows';
import { LocalizeTableHeaderCell, LocalizeTableDataCell } from './cells';
import { LocalizeHeaderRenderType, LocalizeTableColumProps } from './LocalizeTableColumnTypes';

const CLASSNAME = '__Localize__Table';

export interface LocalizeTableProps<T = any> {
  dataSource: T[];

  columns: LocalizeTableColumProps<T>[];

  renderFooter?: () => React.ReactNode;

  /**
   * Table Cell border 처리여부
   */
  bordered?: boolean;

  /**
   * @name RowPart
   */
  selectedRowClassName?: (rowItem: T) => string;

  /**
   * onClickRow handler
   */
  onClickRow?: (rowItem: T) => void;

  /**
   * @default 50px
   * row 높이를 의미
   * responsive가 true일 경우 rowHeight값은 minHeight로 바뀜
   * TODO: 고정 높이 해결해야 함
   */
  rowHeight?: string;

  /**
   * @default true
   * cell 크기의 반응형 사이즈를 의미함.
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

  fixedHeaderMargin?: LocalizeTableProps['rowHeight'];
}

const LocalizeStyledTableWrapper = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    position: 'relative',
    width: '100%',
    height: '100%',
  };
});

const LocalizeStyledTable = styled.table<{}, LocalizeThemeProps>(() => {
  return {
    width: '100%',
    height: '100%',
  };
});

const LocalizeTableHeader = styled.thead<LocalizeTableHeaderProps, LocalizeThemeProps>(
  ({ fixedHeader }) => {
    return {
      position: fixedHeader ? 'fixed' : 'unset',
    };
  },
);

const LocalizeTableBody = styled.tbody<LocalizeTableBodyProps, LocalizeThemeProps>(
  ({ fixedHeader, fixedHeaderMargin }) => {
    return {
      position: fixedHeader ? 'fixed' : 'unset',
      marginTop: fixedHeader ? fixedHeaderMargin : '0',
    };
  },
);

const LocalizeStyledTableFooterWrapper = styled.div<{ height: string }, LocalizeThemeProps>(
  ({ theme, height }) => {
    return {
      width: '100%',
      height: '100%',
      minHeight: height,
      backgroundColor: theme.colors.neutral3,
      padding: '8px 0',

      borderRight: `1px solid ${theme.colors.neutral4}`,
      borderBottom: `1px solid ${theme.colors.neutral4}`,
      borderLeft: `1px solid ${theme.colors.neutral4}`,
    };
  },
);

function LocalizeTable<T>({
  dataSource,
  columns,
  renderFooter,
  selectedRowClassName,
  onClickRow,
  rowHeight = '50px',
  responsive = true,
  fixedHeader,
  renderEmptyData,
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
    (rowItem: T) => async (e: React.MouseEvent<HTMLTableRowElement>) => {
      e.stopPropagation();

      if (onClickRow) {
        onClickRow(rowItem);
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
    <LocalizeStyledTableWrapper>
      <LocalizeStyledTable className={classnames(CLASSNAME)}>
        <>
          <LocalizeTableHeader fixedHeader={fixedHeader}>
            <LocalizeTableRow height={rowHeight} responsive={responsive}>
              {columns.map((colum, headerRowIndex) => (
                <LocalizeTableHeaderCell
                  key={headerRowIndex}
                  width={colum.width}
                  className={colum.headerClassName}
                >
                  {handleRenderHeader(colum.header)}
                </LocalizeTableHeaderCell>
              ))}
            </LocalizeTableRow>
          </LocalizeTableHeader>
          <LocalizeTableBody fixedHeader={fixedHeader} fixedHeaderMargin={rowHeight}>
            {dataSource.length === 0 ? (
              <LocalizeTableRow height="200px" responsive={responsive}>
                <td colSpan={columns.length} align="center">
                  {handleRenderEmptyData()}
                </td>
              </LocalizeTableRow>
            ) : (
              dataSource.map((rowData, bodyRowIndex) => {
                return (
                  <LocalizeTableRow
                    key={bodyRowIndex}
                    className={classnames(handleSelectedRowClassName(rowData))}
                    onClick={handleOnClickRow(rowData)}
                    height={rowHeight}
                    responsive={responsive}
                  >
                    {columns.map((colum, columnIndex) => (
                      <LocalizeTableDataCell key={columnIndex} className={colum.dataClassName}>
                        {colum.render(rowData)}
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
