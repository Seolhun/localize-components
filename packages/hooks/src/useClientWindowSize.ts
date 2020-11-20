import React from 'react';

const useClientWindowSize = <T extends HTMLElement>(ref?: React.RefObject<T>) => {
  const [clientWidth, setClientWidth] = React.useState(0);
  const [clientHeight, setClientHeight] = React.useState(0);

  React.useEffect(() => {
    handleclientWindowSize();
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', handleclientWindowSize);
    return () => {
      window.removeEventListener('resize', handleclientWindowSize);
    };
  }, []);

  const handleclientWindowSize = React.useCallback(() => {
    if (ref?.current) {
      const { clientWidth, clientHeight } = ref.current;
      setClientWidth(clientWidth);
      setClientHeight(clientHeight);
      return;
    }
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setClientWidth(width);
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    setClientHeight(height);
  }, [ref, clientWidth, clientHeight]);

  return { clientWidth, clientHeight };
};

export { useClientWindowSize };
export default useClientWindowSize;
