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
        <div className="col-sm-12">
          <h2>Give a mainColor</h2>
          <LocalizeCheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="danger"
            checked
          />
          <LocalizeCheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="primary"
            checked
          />
          <LocalizeCheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="lightgrey"
            checked
          />
          <LocalizeCheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="#41FF2B"
            checked
          />
        </div>
        <div className="col-sm-12">
          <h2>Give a subColor</h2>
          <LocalizeCheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="danger"
            subColor="yellow"
            checked
          />
          <LocalizeCheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="primary"
            subColor="danger"
            checked
          />
          <LocalizeCheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="lightgrey"
            subColor="purple"
            checked
          />
          <LocalizeCheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="#41FF2B"
            subColor="#000"
            checked
          />
        </div>
      </div>
    </div>
  );
};

export default CheckBoxView;
