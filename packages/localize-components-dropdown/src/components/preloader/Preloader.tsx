import React from 'react';
import classnames from 'classnames';

import './Preloader.css';

export interface PreloaderProps {
  type?: PreloaderType;
}

export type PreloaderType = 'default' | 'page';
export const TYPE = {
  PAGE: 'page',
};

const Preloader: React.SFC<PreloaderProps> = ({ type = '' }) => {
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
