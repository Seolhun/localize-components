interface ResponsiveValueProps {
  span: number;
  offset?: number;
  css?: {};
}

export type ColumnValueProps = number | ResponsiveValueProps;

export enum MediaQueries {
  XXL = 1800,
  XL = 1440,
  LG = 1200,
  MD = 960,
  SM = 768,
  XS = 480,
}

export interface LocalizeThemeGridProps {
  containerGutter: {
    right: string;
    left: string;
  };
  rowGutter: {
    top: string;
    right: string;
    left: string;
  };
  columnGutter: {
    top: string;
    right: string;
    left: string;
    bottom: string;
  };
}
