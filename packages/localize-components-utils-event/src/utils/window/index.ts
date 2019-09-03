export const getClientWindowSize = (element) => {
  if (element) {
    const { clientHeight, clientWidth } = element;
    return {
      clientHeight,
      clientWidth,
    };
  }
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  return {
    clientHeight: height,
    clientWidth: width,
  };
};

export const getScrollSize = () => {
  const { scrollY, scrollX, screenTop, screenLeft } = window;
  return {
    scrollY,
    scrollX,
    screenTop,
    screenLeft,
  };
};
