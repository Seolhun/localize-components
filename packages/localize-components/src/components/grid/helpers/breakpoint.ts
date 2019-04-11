import layout from './layout';

const { BREAK_POINT } = layout;

const mediaQuery = '@media only screen and';

const breakpoint = {
  LG: `${mediaQuery} (min-width: ${BREAK_POINT.md.maxWidth + 1}px)`,
  MD: `${mediaQuery} (min-width: ${BREAK_POINT.sm.maxWidth + 1}px) and (max-width: ${BREAK_POINT.md.maxWidth}px)`,
  SM: `${mediaQuery} (min-width: ${BREAK_POINT.xs.maxWidth + 1}px) and (max-width: ${BREAK_POINT.sm.maxWidth}px)`,
  XS: `${mediaQuery} (min-width: 0px) and (max-width: ${BREAK_POINT.xs.maxWidth}px)`,

  FROM_LG: `${mediaQuery} (min-width: ${BREAK_POINT.md.maxWidth + 1}px)`,
  FROM_MD: `${mediaQuery} (min-width: ${BREAK_POINT.sm.maxWidth + 1}px)`,
  FROM_SM: `${mediaQuery} (min-width: ${BREAK_POINT.xs.maxWidth + 1}px)`,
  FROM_XS: `${mediaQuery} (min-width: 0px)`,

  TO_MD: `and (max-width: ${BREAK_POINT.md.maxWidth}px)`,
  TO_SM: `and (max-width: ${BREAK_POINT.sm.maxWidth}px)`,
  TO_XS: `and (max-width: ${BREAK_POINT.xs.maxWidth}px)`,
};

export default breakpoint;
