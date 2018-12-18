import React from 'react';

export default ({
  size = 15,
  color = 'none',
  viewBox = `0 0 ${size - 2} ${size - 2}`,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={viewBox}
    >
      <g
        stroke='none'
        strokeWidth='1'
        fill={color}
        fillRule='evenodd'
      >
        <g
          transform='translate(-340.000000, -32.000000)'
          fill='#ffffff'
        >
          <polygon points='350.656537 44 346 39.343463 341.343463 44 340 42.656537 344.656537 38 340 33.343463 341.343463 32 346 36.656537 350.656537 32 352 33.343463 347.343463 38 352 42.656537' />
        </g>
      </g>
    </svg>
  );
};
