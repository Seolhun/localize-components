import React from 'react';

export default ({
  size = 20,
  color = '#979797',
  viewBox = `0 0 ${size} ${size}`,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={viewBox}
    >
      <path
        fill={color}
        fillRule='nonzero'
        d='M15.612 6.245l.682.731-6.77 6.318-6.769-6.318.682-.731 6.088 5.682z'/>
    </svg>
  );
};
