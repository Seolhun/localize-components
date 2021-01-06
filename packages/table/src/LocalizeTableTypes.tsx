import React from 'react';
import { Property } from 'csstype';

export type LocalizeHeaderRenderType = React.ReactNode | LocalizeTableHeaderRenderFunction;
export type LocalizeTableHeaderRenderFunction = () => React.ReactNode;
export type LocalizeTableCellRenderFunction<T = any> = (
  rowData: T,
  rowIndex: number,
) => React.ReactNode;
export type LocalizeTableRowEventHandler<T = any> = (rowData: T, rowIndex: number) => void;

export type LocalizeCellVerticalAlignType = Property.AlignItems;
export type LocalizeCellHorizontalAlignType = Property.JustifyContent;

export interface LocalizeTableColumnProps<T = any> {
  header: LocalizeHeaderRenderType;

  render: LocalizeTableCellRenderFunction<T>;

  /**
   * HeaderCell - className
   */
  headerCellClassName?: string;

  /**
   * DataCell - vertical alignment
   * @default center
   */
  headerCellVerticalAlign?: LocalizeCellVerticalAlignType;

  /**
   * DataCell - horizontal alignment
   * @default center
   */
  headerCellHorizontalAlign?: LocalizeCellHorizontalAlignType;

  /**
   * DataCell - className
   */
  dataCellClassName?: string;

  /**
   * DataCell - vertical alignment
   * @default center
   */
  dataCellVerticalAlign?: LocalizeCellVerticalAlignType;

  /**
   * DataCell - horizontal alignment
   * @default start
   */
  dataCellHorizontalAlign?: LocalizeCellHorizontalAlignType;

  /**
   * Cell - Width
   */
  width?: Property.Width;
}

export interface LocalizeVirtualTableColumnProps<T = any> extends LocalizeTableColumnProps<T> {
  freezing?: boolean;
}
