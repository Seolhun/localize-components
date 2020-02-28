import React from 'react';

import { LocalizeCircle } from '@seolhun/localize-components-atomic';

const FigureView = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Circle</h1>
        <div className="col-sm-12">
          <h2>Default</h2>
          <LocalizeCircle>Click me</LocalizeCircle>
        </div>
        <div className="col-sm-12">
          <h2>Give a size</h2>
          <LocalizeCircle size={15}>15</LocalizeCircle>
          <LocalizeCircle size={20}>20</LocalizeCircle>
          <LocalizeCircle size={30}>30</LocalizeCircle>
        </div>
      </div>
    </div>
  );
};

export default FigureView;
