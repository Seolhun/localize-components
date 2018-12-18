import React, { SFC } from 'react';

import classnames from 'classnames';

export interface SpinnerProps {
  className?: string;
  message?: string;
  rect?: string;
  status?: boolean;
  style?: {};
}

const Spinner: SFC<SpinnerProps> = ({
  className = '',
  message = '',
  rect = '25px',
  status = true,
  style = {},
}) => {
  if (!status) {
    return null;
  }

  return (
    <div
      className={classnames(
        className,
        'Spinner',
        '__Localize',
      )}
      style={{
        ...style,
      }}
    >
      <div>
        <svg
          className='Spinner-SVG'
          width={rect}
          height={rect}
          viewBox='0 0 66 66'
        >
          <circle
            className='path'
            fill='none'
            strokeWidth='6'
            strokeLinecap='round'
            cx='33'
            cy='33'
            r='30'
          />
        </svg>
      </div>
      {message && (
        <div className='pd'>
          <span className='Spinner-message subtitle secondary'>
            {message}
          </span>
        </div>
      )}
    </div>
  );
};

export default Spinner;
