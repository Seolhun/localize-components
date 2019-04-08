import breakpoint from './breakpoint';
import layout from './layout';

const { MAX_GRID, BREAK_POINT } = layout;

const getGridWidthRatio = (gridNum) => {
  const widthRatio = `${(100 / MAX_GRID) * gridNum}%`;
  return widthRatio;
};

const getSmallerBreakpoint = (targetPointObj) => {
  const smallerBreaks = Object.values(BREAK_POINT).filter((point) => {
    return targetPointObj.order > point.order;
  }).map((point) => {
    return point.name;
  });
  return smallerBreaks;
};

const getBiggerBreakpoint = (targetPointObj) => {
  const biggerBreaks = Object.values(BREAK_POINT).filter((point) => {
    return targetPointObj.order < point.order;
  }).map((point) => {
    return point.name;
  });
  return biggerBreaks;
};

const setBreakPoint = (key, widthRatio) => {
  const upperKey = key.toUpperCase();
  const gridStyle = {
    [breakpoint[upperKey]]: {
      ...BREAK_POINT[key].gutter,

      flex: `0 0 ${widthRatio}`,
      maxWidth: widthRatio,
      width: widthRatio,
    },
  };
  return gridStyle;
};

const getBreakPointStyle = (breakParams, offsetParams) => {
  const activeBreakPoints = Object.keys(breakParams).filter((key) => {
    const breakPoint = breakParams[key];
    return breakPoint > 0 && breakPoint <= MAX_GRID;
  });
  const gridStyle = activeBreakPoints.reduce((prevStyleObj, key, idx) => {
    const breakPoint = breakParams[key];
    const widthRatio = getGridWidthRatio(breakPoint);
    const style = setBreakPoint(key, widthRatio);

    if (idx === 0) {
      const biggerBreaks = getBiggerBreakpoint(BREAK_POINT[key]);
      const biggerStyles = biggerBreaks.reduce((biggerObj, biggerKey) => {
        const bigBreakPoint = breakParams[biggerKey];
        if (!bigBreakPoint) {
          return {
            ...biggerObj,
            ...setBreakPoint(biggerKey, widthRatio),
          };
        }
        return biggerObj;
      }, {});

      return {
        ...prevStyleObj,
        ...biggerStyles,
        ...style,
      };
    }

    const smallerBreaks = getSmallerBreakpoint(BREAK_POINT[key]);
    const smallerStyles = smallerBreaks.reduce((smallerObj, smallerKey) => {
      const smallBreakPoint = breakParams[smallerKey];
      if (!smallBreakPoint) {
        return {
          ...smallerObj,
          ...setBreakPoint(smallerKey, '100%'),
        };
      }
      return smallerObj;
    }, {});

    return {
      ...prevStyleObj,
      ...smallerStyles,
      ...style,
    };
  }, {});
  return gridStyle;
};

export const getBreakPoint = (breakParams, offsetParams) => {
  const gridStyle = getBreakPointStyle(breakParams, offsetParams);
  return gridStyle;
};
