import React from 'react';
import { Property } from 'csstype';

export type LocalizeHeaderRenderType = React.ReactNode | LocalizeTableHeaderRenderFunction;
export type LocalizeTableHeaderRenderFunction = () => React.ReactNode;
export type LocalizeTableCellRenderFunction<T = any> = (
  rowData: T,
  rowIndex: number,
) => React.ReactNode;
export type LocalizeTableRowEventHandler<T = any> = (rowData: T, rowIndex: number) => void;

export interface LocalizeTableColumnProps<T = any> {
  header: LocalizeHeaderRenderType;

  render: LocalizeTableCellRenderFunction<T>;

  /**
   * HeaderCell - className
   */
  headerClassName?: string;

  /**
   * DataCell - className
   */
  dataClassName?: string;

  /**
   * Cell - Width
   */
  width?: Property.Width;

  /**
   * Cell - Text Eliipsis 여부
   */
  textOverflow?: Property.TextOverflow;
}
