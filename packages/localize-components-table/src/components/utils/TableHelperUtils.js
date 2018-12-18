export const getFlexAlign = (align) => {
  switch (align) {
    case 'right':
      return 'flex-end';
    case 'left':
      return 'flex-start';
    default:
      return 'center';
  }
};

