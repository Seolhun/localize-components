import {
  MediaQueries,
  ColumnValueProps,
} from '@seolhun/localize-components-styled-types';

export const hasOffset = (columnValue: ColumnValueProps) => {
  if (typeof columnValue !== 'object') {
    return false;
  }
  if (!columnValue.offset || columnValue.offset <= 0) {
    return false;
  }
  return true;
};

export const isBeforeOffset = (columnValue: ColumnValueProps) => {
  if (!hasOffset(columnValue)) {
    return false;
  }

  const keys = Object.keys(columnValue).map((value) => value);
  return keys[0] ? keys[0] === 'offset' : false;
};

export const buildDefaultGridStyle = (sizeValue: number) => {
  const width = calcWidth(sizeValue);
  return {
    display: sizeValue === 0 ? 'none' : 'flex',
    maxWidth: `${width}%`,
    flex: `0 0 ${width}%`,
    marginLeft: 0,
    marginRight: 0,
  };
};

export const calcWidth = (sizeValue: number) => {
  const gridCounts = 24;
  return sizeValue * (100 / gridCounts);
};

export const buildGridStyle = (columnValue: ColumnValueProps) => {
  if (typeof columnValue !== 'object') {
    return buildDefaultGridStyle(columnValue);
  }

  const styles = buildDefaultGridStyle(columnValue.span);
  if (!hasOffset(columnValue)) {
    return styles;
  }

  const { offset = 0, css } = columnValue;
  Object.assign(styles, {
    ...(isBeforeOffset(columnValue)
      ? {
          marginLeft: `${calcWidth(offset)}%`,
        }
      : {
          marginRight: `${calcWidth(offset)}%`,
        }),
    ...css,
  });
  return styles;
};

export const createMediaQueryCondition = (media: keyof typeof MediaQueries) => {
  switch (media) {
    case 'XXL': {
      return `(max-width: ${MediaQueries.XL}px)`;
    }
    case 'XL': {
      return `(max-width: ${MediaQueries.XL}px)`;
    }
    case 'LG': {
      return `(max-width: ${MediaQueries.LG}px)`;
    }
    case 'MD': {
      return `(max-width: ${MediaQueries.MD}px)`;
    }
    case 'SM': {
      return `(max-width: ${MediaQueries.SM}px)`;
    }
    default: {
      return `(max-width: ${MediaQueries.XS}px)`;
    }
  }
};

export const getMediaQueryStyles = (
  media: keyof typeof MediaQueries,
  columnValue: ColumnValueProps,
) => {
  return {
    [`@media ${createMediaQueryCondition(media)}`]: {
      ...buildGridStyle(columnValue),
    },
  };
};

export const getLocalizeMediaQueryKey = () => {
  return {
    XXL: `@media ${createMediaQueryCondition('XXL')}`,
    XL: `@media ${createMediaQueryCondition('XL')}`,
    LG: `@media ${createMediaQueryCondition('LG')}`,
    MD: `@media ${createMediaQueryCondition('MD')}`,
    SM: `@media ${createMediaQueryCondition('SM')}`,
    XS: `@media ${createMediaQueryCondition('XS')}`,
  };
};
