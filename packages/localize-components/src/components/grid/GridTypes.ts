import { FlexDirectionProperty } from 'csstype';

export interface RowProps {
  isWrap?: boolean;
  flexDirection?: FlexDirectionProperty;
  css?: {};
}

interface IResponsiveValue {
  span: number;
  offset?: number;
}

export type IColumnValue = number | IResponsiveValue;

export interface ColProps {
  xs?: IColumnValue;
  sm?: IColumnValue;
  md?: IColumnValue;
  lg?: IColumnValue;
  xl?: IColumnValue;
  gutter?: string;
  css?: {};
}

export enum EnumMediaQueryList {
  XL = 1200,
  LG = 960,
  MD = 768,
  SM = 480,
  XS = 0,
}
