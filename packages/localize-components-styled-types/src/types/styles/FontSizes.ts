export enum FontSize {
  H1 = '30px',
  H2 = '20px',
  H3 = '15px',
  H4 = '14px',
  H5 = '13px',
  H6 = '11px',
}

export type FontSizeType =
  | FontSize
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6';

export const FontSizes = {
  ...FontSize,
};

export default FontSizes;
