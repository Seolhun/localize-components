import * as React from 'react';
import * as classnames from 'classnames';

// const styles = require('./Preloader.css');
import './Preloader.css';

export interface PreloaderProps {
  type?: PreloaderType;
}

export type PreloaderType = 'default' | 'page';
export const TYPE = {
  PAGE: 'page',
};

const Preloader: React.StatelessComponent<PreloaderProps> = ({ type = '' }) => {
  return (
    <div className={classnames(`_Preloader ${type}`)}>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default Preloader;
