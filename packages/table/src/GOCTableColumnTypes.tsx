import React from 'react';

export type GOCHeaderRenderType =
  | React.ReactNode
  | GOCTableHeaderRenderFunction;
export type GOCTableHeaderRenderFunction = () => React.ReactNode;
export type GOCTableCellRenderFunction<T = any> = (
  rowData: T,
) => React.ReactNode;

export interface GOCTableColumProps<T = any> {
  header: GOCHeaderRenderType;

  render: GOCTableCellRenderFunction<T>;

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
