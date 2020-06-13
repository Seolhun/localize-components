type BDSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type BDSizeObject = {
  [key in BDSize]: string;
};

export { BDSize, BDSizeObject };
