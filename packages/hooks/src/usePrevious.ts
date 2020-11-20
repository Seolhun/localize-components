import React from 'react';
function usePrevious<T = any>(value: T) {
  const ref = React.useRef<T>();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export { usePrevious };
export default usePrevious;
