import React from 'react';

import { LocalizeInput } from '@seolhun/localize-components-atomic';

const InputView = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Default</h2>
          <LocalizeInput value="" placeholder="Localize Component" />
          <LocalizeInput value="" placeholder="Localize Component" />
        </div>
        <div className="col-sm-12">
          <h2>Give a mainColor</h2>
          <LocalizeInput value="danger" />
          <LocalizeInput value="primary" />
          <LocalizeInput value="lightgrey" />
          <LocalizeInput value="#41FF2B" />
        </div>
        <div className="col-sm-12">
          <h2>Give a subColor</h2>
          <LocalizeInput value="darkgrey" />
          <LocalizeInput value="grey" />
          <LocalizeInput value="lightgrey" />
          <LocalizeInput value="#000" />
        </div>
        <div className="col-sm-12">
          <h2>Give a renderValue</h2>
          <LocalizeInput
            value="Value"
            renderValue={(value) => `Custom_${value}`}
          />
          <LocalizeInput
            value="Value"
            renderValue={(value) => `<button>${value}</button>`}
          />
        </div>
      </div>
    </div>
  );
};

export default InputView;
