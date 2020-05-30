import {
  MediaQueriesEnum,
  ColumnValueProps,
} from '@seolhun/localize-components-styled-types';

const hasOffset = (columnValue: ColumnValueProps) => {
  if (typeof columnValue !== 'object') {
    return false;
  }
  if (!columnValue.offset || columnValue.offset <= 0) {
    return false;
  }
  return true;
};

const isBeforeOffset = (columnValue: ColumnValueProps) => {
  if (!hasOffset(columnValue)) {
    return false;
  }

  const keys = Object.keys(columnValue).map((value) => value);
  return keys[0] ? keys[0] === 'offset' : false;
};

const buildDefaultGridStyle = (sizeValue: number) => {
  const width = calcWidth(sizeValue);
  return {
    display: sizeValue === 0 ? 'none' : 'flex',
    maxWidth: `${width}%`,
    flex: `0 0 ${width}%`,
    marginLeft: 0,
    marginRight: 0,
  };
};

const calcWidth = (sizeValue: number) => {
  const gridCounts = 24;
  return sizeValue * (100 / gridCounts);
};

const buildGridStyle = (columnValue: ColumnValueProps) => {
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

export const createMediaQueryCondition = (
  media: keyof typeof MediaQueriesEnum,
) => {
  switch (media) {
    case 'XXL': {
      return `(max-width: ${MediaQueriesEnum.XL}px)`;
    }
    case 'XL': {
      return `(max-width: ${MediaQueriesEnum.XL}px)`;
    }
    case 'LG': {
      return `(max-width: ${MediaQueriesEnum.LG}px)`;
    }
    case 'MD': {
      return `(max-width: ${MediaQueriesEnum.MD}px)`;
    }
    case 'SM': {
      return `(max-width: ${MediaQueriesEnum.SM}px)`;
    }
    default: {
      return `(max-width: ${MediaQueriesEnum.XS}px)`;
    }
  }
};

const getMediaQueryStyles = (
  media: keyof typeof MediaQueriesEnum,
  columnValue: ColumnValueProps,
) => {
  return {
    [`@media ${createMediaQueryCondition(media)}`]: {
      ...buildGridStyle(columnValue),
    },
  };
};

type MediaQueryProps = {
  [key in keyof typeof MediaQueriesEnum]: string;
};

const MEDIA_QUERIES: MediaQueryProps = {
  XXL: `@media ${createMediaQueryCondition('XXL')}`,
  XL: `@media ${createMediaQueryCondition('XL')}`,
  LG: `@media ${createMediaQueryCondition('LG')}`,
  MD: `@media ${createMediaQueryCondition('MD')}`,
  SM: `@media ${createMediaQueryCondition('SM')}`,
  XS: `@media ${createMediaQueryCondition('XS')}`,
};

export { getMediaQueryStyles, MEDIA_QUERIES };
