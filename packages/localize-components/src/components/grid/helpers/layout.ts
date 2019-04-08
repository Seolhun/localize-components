const GUTTER_SIZE = {
  LG: 30,
  MD: 20,
  SM: 12,
  XS: 10,
};

export default {
  MAX_GRID: 24,
  BREAK_POINT: {
    // Orderized...Never Change Key order
    lg: {
      name: 'lg',
      order: 3,
      maxWidth: 1330,
      gutter: {
        paddingRight: `${GUTTER_SIZE.LG}px`,
      },
    },
    md: {
      name: 'md',
      order: 2,
      maxWidth: 992,
      gutter: {
        paddingRight: `${GUTTER_SIZE.MD}px`,
      },
    },
    sm: {
      name: 'sm',
      order: 1,
      maxWidth: 768,
      gutter: {
        paddingRight: `${GUTTER_SIZE.SM}px`,
      },
    },
    xs: {
      name: 'xs',
      order: 0,
      maxWidth: 576,
      gutter: {
        paddingRight: `${GUTTER_SIZE.XS}px`,
      },
    },
  },
  GUTTER_SIZE,
};
