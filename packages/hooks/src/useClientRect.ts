import React from 'react';

const useClientRect = <T extends HTMLElement>(ref: React.RefObject<T>): DOMRect | undefined => {
  const [clientRect, setClientRect] = React.useState<DOMRect | undefined>(undefined);

  React.useEffect(() => {
    handleCurerntDomClientRect();
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', handleCurerntDomClientRect);
    return () => {
      window.removeEventListener('resize', handleCurerntDomClientRect);
    };
  }, []);

  const handleCurerntDomClientRect = React.useCallback(() => {
    if (ref.current) {
      const boindingClientRect = ref.current?.getBoundingClientRect();
      if (boindingClientRect) {
        setClientRect(boindingClientRect);
      }
    }
  }, [ref.current, clientRect]);

  return clientRect;
};

export { useClientRect };
export default useClientRect;
