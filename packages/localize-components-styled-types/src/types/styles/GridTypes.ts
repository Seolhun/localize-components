interface IResponsiveValue {
  span: number
  offset?: number
  css?: {}
}

export type IColumnValue = number | IResponsiveValue

export enum MediaQueries {
  XL = 1200,
  LG = 960,
  MD = 768,
  SM = 480,
  XS = 0,
}
