import React from 'react';

export default ({
  size = 20,
  color = '#fff',
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
        d='M17.766 9.5l-5.15-6.18.768-.64 6.267 7.52-6.267 7.52-.768-.64 5.483-6.58H.5v-1h17.266z'
      />
    </svg>
  );
};
