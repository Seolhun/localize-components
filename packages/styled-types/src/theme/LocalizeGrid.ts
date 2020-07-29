enum MediaQueriesEnum {
  XL = 1440,
  LG = 1200,
  MD = 960,
  SM = 768,
  XS = 480,
}

interface ResponsiveValueProps {
  span: number;
  offset?: number;
  css?: {};
}

type ColumnValueProps = number | ResponsiveValueProps;

interface LocalizeThemeGridProps {
  containerGutter: {
    right: string;
    left: string;
  };
  rowGutter: {
    top: string;
    right: string;
    left: string;
    bottom: string;
  };
  columnGutter: {
    top: string;
    right: string;
    left: string;
    bottom: string;
  };
}

const localizeGrid: LocalizeThemeGridProps = {
  containerGutter: {
    right: '0',
    left: '0',
  },
  rowGutter: {
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
  },
  columnGutter: {
    top: '0',
    right: '1rem',
    left: '1rem',
    bottom: '1rem',
  },
}

export {
  MediaQueriesEnum,
  ColumnValueProps,
  LocalizeThemeGridProps,
  localizeGrid
};
