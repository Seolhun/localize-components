import React from 'react';

import { LocalizeButton } from '@seolhun/localize-components-atomic';

const ButtonView = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Default</h2>
          <LocalizeButton>Click me</LocalizeButton>
        </div>
        <div className="col-sm-12">
          <h2>Give a size</h2>
          <LocalizeButton size="sm">small</LocalizeButton>
          <LocalizeButton size="md">medium</LocalizeButton>
          <LocalizeButton size="lg">large</LocalizeButton>
        </div>
      </div>
    </div>
  );
};

export default ButtonView;
