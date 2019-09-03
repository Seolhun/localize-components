import { MediaQueries, IColumnValue } from './GridTypes';

export const calcWidth = (sizeValue: number) => {
  const gridCounts = 24;
  return `${sizeValue * (100 / gridCounts)}%`;
}

export const _hasOffset = (columnValue: IColumnValue) => {
  if (typeof columnValue !== 'object') {
    return false;
  }
  if (!columnValue.offset || columnValue.offset <= 0) {
    return false;
  }
  return true;
};

export const _isBeforeOffset = (columnValue: IColumnValue) => {
  if (!_hasOffset(columnValue)) {
    return false;
  }

  const keys = Object.keys(columnValue).map((value) => value);
  return keys[0] ? keys[0] === 'offset' : false;
};

export const _buildDefaultGridStyle = (sizeValue: number) => (() => {
  const width = calcWidth(sizeValue);
  return {
    flexGrow: 0,
    width: `${width}%`,
    flex: `0 ${width}%`,
    display: sizeValue === 0 ? 'none' : 'block',
    marginLeft: 0,
    marginRight: 0,
  }
});

export const buildGridStyle = (columnValue: IColumnValue) => {
  if (typeof columnValue !== 'object') {
    return _buildDefaultGridStyle(columnValue);
  }

  const styles = _buildDefaultGridStyle(columnValue.span);
  if (!_hasOffset(columnValue)) {
    return styles;
  }

  const { offset = 0 } = columnValue;
  Object.assign(styles, {
    ...(_isBeforeOffset(columnValue)
      ? {
          marginLeft: calcWidth(offset),
        }
      : {
          marginRight: calcWidth(offset),
        }),
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
