import { EnumMediaQueryList, IColumnValue } from './GridTypes';

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
  const width = `${(sizeValue / 20) * 100}%`;
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
          marginLeft: `${(offset / 20) * 100}%`,
        }
      : {
          marginRight: `${(offset / 20) * 100}%`,
        }),
  });
  return styles;
};

export const createMediaQueryCondition = (
  media: keyof typeof EnumMediaQueryList
) => {
  switch (media) {
    case 'XL': {
      return `(min-width: ${EnumMediaQueryList.XL}px)`;
    }
    case 'LG': {
      return `(min-width: ${EnumMediaQueryList.LG}px)`;
    }
    case 'MD': {
      return `(min-width: ${EnumMediaQueryList.MD}px)`;
    }
    case 'SM': {
      return `(min-width: ${EnumMediaQueryList.SM}px)`;
    }
    default: {
      return `(min-width: ${EnumMediaQueryList.XS}px)`;
    }
  }
};

export const getMediaQueryStyles = (
  media: keyof typeof EnumMediaQueryList,
  columnValue: IColumnValue
) => {
  return {
    [`@media ${createMediaQueryCondition(media)}`]: {
      ...buildGridStyle(columnValue),
    },
  };
};
