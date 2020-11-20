import React from 'react';

export type LocalizeHeaderRenderType =
  | React.ReactNode
  | LocalizeTableHeaderRenderFunction;
export type LocalizeTableHeaderRenderFunction = () => React.ReactNode;
export type LocalizeTableCellRenderFunction<T = any> = (
  rowData: T,
) => React.ReactNode;

export interface LocalizeTableColumProps<T = any> {
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
  width?: string;

  /**
   * Cell - Text Eliipsis 여부
   */
  ellipsis?: boolean;
}
