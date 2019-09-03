import { FlexDirectionProperty } from 'csstype';

export interface RowProps {
  padded?: boolean | string;
  isWrap?: boolean;
  flexDirection?: FlexDirectionProperty;
}

interface IResponsiveValue {
  span: number;
  offset?: number;
}

export type IColumnValue = number | IResponsiveValue;

export interface ColProps {
  xl?: IColumnValue;
  lg?: IColumnValue;
  md?: IColumnValue;
  sm?: IColumnValue;
  xs?: IColumnValue;
  gutter?: string;
  styles?: {};
}

export enum EnumMediaQueryList {
  // 1440
  XL = 1200,
  LG = 960,
  MD = 768,
  SM = 480,
  XS = 0,
}
