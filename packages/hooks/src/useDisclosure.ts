import React from 'react';

const useDisclosure = (defaultVisible = false) => {
  const [visible, setVisible] = React.useState(defaultVisible);

  const onSetVisible = (visible: boolean) => setVisible(visible);
  const onVisible = () => setVisible(true);
  const onInvisible = () => setVisible(false);
  const onToggle = () => setVisible(!visible);

  return { visible, onSetVisible, onVisible, onInvisible, onToggle };
};

export { useDisclosure };
export default useDisclosure;
