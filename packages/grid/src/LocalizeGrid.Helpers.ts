export interface LocalizeResponsiveValue {
  span: number;
  offset?: number;
}
export type LocalizeColumnValue = number | LocalizeResponsiveValue;

export enum LocalizeMediaQueryEnum {
  XL = 1200, // 1200 ~
  LG = 960, // 960 ~ 1199
  MD = 720, // 720 ~ 959
  SM = 540, // 540 ~ 719
  XS = 0, // 0 ~ 539
}

export const LocalizeMediaQueries = {
  XL: `@media (min-width: ${LocalizeMediaQueryEnum.XL}px)`,
  LG: `@media (min-width: ${
    LocalizeMediaQueryEnum.LG
  }px) and (max-width: ${LocalizeMediaQueryEnum.XL - 1}px)`,
  MD: `@media (min-width: ${
    LocalizeMediaQueryEnum.MD
  }px) and (max-width: ${LocalizeMediaQueryEnum.LG - 1}px)`,
  SM: `@media (min-width: ${
    LocalizeMediaQueryEnum.SM
  }px) and (max-width: ${LocalizeMediaQueryEnum.MD - 1}px)`,
  XS: `@media (min-width: ${
    LocalizeMediaQueryEnum.XS
  }px) and (max-width: ${LocalizeMediaQueryEnum.SM - 1}px)`,
};

export const LOCALIZE_COLUM_COTUNT = 24;

const _hasOffset = (columnValue: LocalizeColumnValue) => {
  if (typeof columnValue !== 'object') {
    return false;
  }
  if (!columnValue.offset || columnValue.offset <= 0) {
    return false;
  }
  return true;
};

const _isBeforeOffset = (columnValue: LocalizeColumnValue) => {
  if (!_hasOffset(columnValue)) {
    return false;
  }

  const keys = Object.keys(columnValue).map((value) => value);
  return keys[0] ? keys[0] === 'offset' : false;
};

const _buildDefaultGridStyle = (sizeValue: number) => ({
  flexGrow: 0,
  width: `${(sizeValue / LOCALIZE_COLUM_COTUNT) * 100}%`,
  display: sizeValue === 0 ? 'none' : 'block',
  marginLeft: 0,
  marginRight: 0,
});

export const buildGridStyle = (columnValue: LocalizeColumnValue) => {
  if (typeof columnValue !== 'object') {
    return _buildDefaultGridStyle(columnValue);
  }

  const styles = _buildDefaultGridStyle(columnValue.span);
  if (!_hasOffset(columnValue)) {
    return styles;
  }

  const { offset = 0 } = columnValue;
  Object.assign(
    styles,
    _isBeforeOffset(columnValue)
      ? {
          marginLeft: `${(offset / LOCALIZE_COLUM_COTUNT) * 100}%`,
        }
      : {
          marginRight: `${(offset / LOCALIZE_COLUM_COTUNT) * 100}%`,
        },
  );
  return styles;
};

interface GetMediaQueryStylesProps {
  xl?: LocalizeColumnValue;
  lg?: LocalizeColumnValue;
  md?: LocalizeColumnValue;
  sm?: LocalizeColumnValue;
  xs?: LocalizeColumnValue;
}

export const getMediaQueryStyles = (columnValues: GetMediaQueryStylesProps) => {
  const { xl, lg, md, sm, xs } = columnValues;
  return {
    [LocalizeMediaQueries.XL]: {
      ...buildGridStyle(xl || lg || md || sm || xs || LOCALIZE_COLUM_COTUNT),
    },
    [LocalizeMediaQueries.LG]: {
      ...buildGridStyle(lg || md || sm || xs || LOCALIZE_COLUM_COTUNT),
    },
    [LocalizeMediaQueries.MD]: {
      ...buildGridStyle(md || sm || xs || LOCALIZE_COLUM_COTUNT),
    },
    [LocalizeMediaQueries.SM]: {
      ...buildGridStyle(sm || xs || LOCALIZE_COLUM_COTUNT),
    },
    [LocalizeMediaQueries.XS]: {
      ...buildGridStyle(xs || LOCALIZE_COLUM_COTUNT),
    },
  };
};
