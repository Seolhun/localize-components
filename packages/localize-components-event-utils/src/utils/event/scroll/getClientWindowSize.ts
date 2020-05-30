const getClientWindowSize = (element: HTMLElement) => {
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

export { getClientWindowSize };

export default getClientWindowSize;
