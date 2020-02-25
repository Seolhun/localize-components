import React from 'react';

import { LocalizeInput } from '@seolhun/localize-components-atomic';

const InputView = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Default</h2>
          <LocalizeInput value="" placeholder="Localize Component" />
          <LocalizeInput
            value=""
            subColor="#000"
            placeholder="Localize Component"
          />
        </div>
        <div className="col-sm-12">
          <h2>Give a mainColor</h2>
          <LocalizeInput mainColor="danger" value="danger" />
          <LocalizeInput mainColor="primary" value="primary" />
          <LocalizeInput mainColor="lightgrey" value="lightgrey" />
          <LocalizeInput mainColor="#41FF2B" value="#41FF2B" />
        </div>
        <div className="col-sm-12">
          <h2>Give a subColor</h2>
          <LocalizeInput
            mainColor="danger"
            subColor="yellow"
            value="darkgrey"
          />
          <LocalizeInput mainColor="primary" subColor="danger" value="grey" />
          <LocalizeInput
            mainColor="lightgrey"
            subColor="purple"
            value="lightgrey"
          />
          <LocalizeInput mainColor="#41FF2B" subColor="#000" value="#000" />
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
