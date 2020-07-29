import React from 'react';

const useDisclosure = (defaultIsOpen = false) => {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen);

  const onSet = (isShow: boolean) => setIsOpen(isShow);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);

  return { isOpen, onSet, onOpen, onClose, onToggle };
};

export { useDisclosure };
export default useDisclosure;
