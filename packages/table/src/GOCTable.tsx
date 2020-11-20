import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { GOCThemeProps } from '@/context';
import { GOCHeaderRenderType, GOCTableColumProps } from './GOCTableColumnTypes';
import { GOCTableRow } from './rows';
import { GOCTableHeaderCell, GOCTableDataCell } from './cells';

const CLASSNAME = 'GOC__TABLE';

export interface GOCTableProps<T = any> {
  dataSource: T[];

  columns: GOCTableColumProps<T>[];

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
  fixedHeader?: GOCTableHeaderProps['fixedHeader'];

  /**
   * @name OptionPart
   */
  /**
   * @default 'No Data'
   */
  renderEmptyData?: () => React.ReactNode;
}

interface GOCTableHeaderProps {
  /**
   * Table header is fixed
   */
  fixedHeader?: boolean;
}

interface GOCTableHeaderProps {
  /**
   * Table header is fixed
   */
  fixedHeader?: boolean;
}

interface GOCTableBodyProps {
  /**
   * Table header is fixed
   */
  fixedHeader?: GOCTableHeaderProps['fixedHeader'];

  fixedHeaderMargin?: GOCTableProps['rowHeight'];
}

const GOCStyledTableWrapper = styled.div<{}, GOCThemeProps>(() => {
  return {
    position: 'relative',
    width: '100%',
    height: '100%',
  };
});

const GOCStyledTable = styled.table<{}, GOCThemeProps>(() => {
  return {
    width: '100%',
    height: '100%',
  };
});

const GOCTableHeader = styled.thead<GOCTableHeaderProps, GOCThemeProps>(({
  fixedHeader
}) => {
  return {
    position: fixedHeader? 'fixed' : 'unset'
  };
});

const GOCTableBody = styled.tbody<GOCTableBodyProps, GOCThemeProps>(({
  fixedHeader,
  fixedHeaderMargin,
}) => {
  return {
    position: fixedHeader? 'fixed' : 'unset',
    marginTop: fixedHeader ? fixedHeaderMargin : '0',
  };
});

const GOCStyledTableFooterWrapper = styled.div<{ height: string }, GOCThemeProps>(({ theme, height }) => {
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
});

function GOCTable<T>({
  dataSource,
  columns,
  renderFooter,
  selectedRowClassName,
  onClickRow,
  rowHeight = '50px',
  responsive = true,
  fixedHeader,
  renderEmptyData,
}: GOCTableProps<T>) {
  const handleRenderEmptyData = React.useCallback(() => {
    if (renderEmptyData) {
      return renderEmptyData();
    }
    return 'No Data';
  }, [renderEmptyData]);

  const handleRenderHeader = React.useCallback(
    (header: GOCHeaderRenderType) => {
      if (typeof header === 'function') {
        return header();
      }
      return header;
    },
    [],
  );

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
    <GOCStyledTableWrapper>
      <GOCStyledTable className={classnames(CLASSNAME)}>
        <>
          <GOCTableHeader fixedHeader={fixedHeader}>
            <GOCTableRow height={rowHeight} responsive={responsive}>
              {columns.map((colum, headerRowIndex) => (
                <GOCTableHeaderCell key={headerRowIndex} width={colum.width} className={colum.headerClassName}>
                  {handleRenderHeader(colum.header)}
                </GOCTableHeaderCell>
              ))}
            </GOCTableRow>
          </GOCTableHeader>
          <GOCTableBody fixedHeader={fixedHeader} fixedHeaderMargin={rowHeight}>
            {dataSource.length === 0 ? (
              <GOCTableRow height='200px' responsive={responsive}>
                <td colSpan={columns.length} align='center'>
                  {handleRenderEmptyData()}
                </td>
              </GOCTableRow>
            ) : (
              dataSource.map((rowData, bodyRowIndex) => {
                return (
                  <GOCTableRow
                    key={bodyRowIndex}
                    className={classnames(handleSelectedRowClassName(rowData))}
                    onClick={handleOnClickRow(rowData)}
                    height={rowHeight}
                    responsive={responsive}
                  >
                    {columns.map((colum, columnIndex) => (
                      <GOCTableDataCell key={columnIndex} className={colum.dataClassName}>
                        {colum.render(rowData)}
                      </GOCTableDataCell>
                    ))}
                  </GOCTableRow>
                );
              })
            )}
          </GOCTableBody>
        </>
      </GOCStyledTable>
      {renderFooter && (
        <GOCStyledTableFooterWrapper height={rowHeight}>{handleRenderFooter()}</GOCStyledTableFooterWrapper>
      )}
    </GOCStyledTableWrapper>
  );
}

export { GOCTable };
export default GOCTable;
