import React from 'react';

import { CheckBox } from '@seolhun/localize-components-form';

const CheckBoxView = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Default</h2>
          <CheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            checked
          />
        </div>
        <div className="col-sm-12">
          <h2>Give a mainColor</h2>
          <CheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="danger"
            checked
          />
          <CheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="primary"
            checked
          />
          <CheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="lightgrey"
            checked
          />
          <CheckBox
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
          <CheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="danger"
            subColor="yellow"
            checked
          />
          <CheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="primary"
            subColor="danger"
            checked
          />
          <CheckBox
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="lightgrey"
            subColor="purple"
            checked
          />
          <CheckBox
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
