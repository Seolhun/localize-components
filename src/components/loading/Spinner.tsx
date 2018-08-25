import * as React from 'react';

const styles = require('./Spinner.css');

export interface SpinnerProps {
  type?: string;
  rect?: string;
  style?: {
    alignItems?: string,
    display?: string,
    justifyContent?: string,
  };
}

export const TYPE = {
  CUSTOM: 'custom',
  DEFAULT: 'default',
  PAGE: 'page',
  SECTION: 'section',
};

export const CUSTOM_STYLE = {
  [TYPE.CUSTOM]: {},
  [TYPE.DEFAULT]: {
    width: '100%',
    height: '100%',
    padding: '30px',
  },
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
};

const Spinner: React.StatelessComponent<SpinnerProps> = ({
  type = TYPE.DEFAULT,
  rect = '50px',
  style = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}) => {
  return (
    <div
      style={{
        ...style,
        ...CUSTOM_STYLE[type],
      }}
    >
      <svg className="_spinner" width={rect} height={rect} viewBox="0 0 66 66">
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

export default Spinner;
