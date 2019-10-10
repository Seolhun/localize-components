import { MediaQueries, IColumnValue } from '@seolhun/localize-components-styled-types';

export const hasOffset = (columnValue: IColumnValue) => {
  if (typeof columnValue !== 'object') {
    return false;
  }
  if (!columnValue.offset || columnValue.offset <= 0) {
    return false;
  }
  return true;
};

export const isBeforeOffset = (columnValue: IColumnValue) => {
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
  }
};

export const calcWidth = (sizeValue: number) => {
  const gridCounts = 24;
  return sizeValue * (100 / gridCounts);
}


export const buildGridStyle = (columnValue: IColumnValue) => {
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
        }
    ),
    ...css,
  });
  return styles;
};

export const createMediaQueryCondition = (
  media: keyof typeof MediaQueries
) => {
  switch (media) {
    case 'XL': {
      return `(min-width: ${MediaQueries.XL}px)`;
    }
    case 'LG': {
      return `(min-width: ${MediaQueries.LG}px)`;
    }
    case 'MD': {
      return `(min-width: ${MediaQueries.MD}px)`;
    }
    case 'SM': {
      return `(min-width: ${MediaQueries.SM}px)`;
    }
    default: {
      return `(min-width: ${MediaQueries.XS}px)`;
    }
  }
};

export const getMediaQueryStyles = (
  media: keyof typeof MediaQueries,
  columnValue: IColumnValue
) => {
  return {
    [`@media ${createMediaQueryCondition(media)}`]: {
      ...buildGridStyle(columnValue),
    },
  };
};
