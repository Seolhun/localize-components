import React from 'react';

const CLASSNAME = '__Localize__Window__LockScroll';

const useLockScroll = (isOpen: boolean) => {
  React.useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add(CLASSNAME);
      document.body.classList.add(CLASSNAME);
    } else {
      document.documentElement.classList.remove(CLASSNAME);
      document.body.classList.remove(CLASSNAME);
    }
  }, [isOpen]);
};

export { useLockScroll };
export default useLockScroll;
