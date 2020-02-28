import React from 'react';

import { LocalizeCheckBox } from '@seolhun/localize-components-atomic';

const CheckBoxView = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Default</h2>
          <LocalizeCheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            checked
          />
        </div>
      </div>
    </div>
  );
};

export default CheckBoxView;
