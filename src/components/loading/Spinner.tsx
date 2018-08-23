import * as React from 'react';
import styles from './Spinner.scss';

export interface SpinnerProps {
  type: string;
  rect: string;
  style: {
    display: string;
    alignItems: string;
    justifyContent: string;
    boxSizing: string;
  };
}

export const TYPE = {
  PAGE: 'page',
  SECTION: 'section',
  DEFAULT: 'default',
  CUSTOM: 'custom',
};

export const CUSTOM_STYLE = {
  [TYPE.PAGE]: {
    background: '#f7f8fa',
    width: '100vw',
    height: '100vh',
  },
  [TYPE.SECTION]: {
    background: '#f7f8fa',
    width: '100%',
    height: '100%',
    padding: '30px',
    border: '1px solid rgba(0,0,0,.01)',
  },
  [TYPE.DEFAULT]: {
    width: '100%',
    height: '100%',
    padding: '30px',
  },
  [TYPE.CUSTOM]: {},
};

const Spinner: React.StatelessComponent<SpinnerProps> = ({
  type,
  rect,
  style,
}) => {
  const resizeRect =
    type === TYPE.DEFAULT || type === TYPE.CUSTOM ? rect : '50px';
  return (
    <div
      style={{
        ...style,
        ...CUSTOM_STYLE[type],
      }}
    >
      <svg
        className="_spinner"
        width={rect}
        height={resizeRect}
        viewBox="0 0 66 66"
      >
        <circle
          className={styles.path}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </svg>
    </div>
  );
};

Spinner.defaultProps = {
  type: TYPE.DEFAULT,
  rect: '45px',
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'borderBox',
  },
};

export default Spinner;
