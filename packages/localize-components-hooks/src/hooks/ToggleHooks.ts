import { useState, useCallback } from 'react';

export const useToggle = (
  initState: boolean = false
): [boolean, (isOn: boolean) => void] => {
  const [isOn, setIsOn] = useState(initState);

  const handleToggleIsOn = useCallback(() => {
    setIsOn(!isOn);
  }, [isOn]);

  return [isOn, handleToggleIsOn];
};

export default {
  useToggle,
};
