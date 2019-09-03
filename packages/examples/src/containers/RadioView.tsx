import React from 'react';

import { Radio } from '@seolhun/localize-components-atomic';

const RadioView = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Default</h2>
          <Radio
            item={{
              label: 'label',
              value: 'value',
            }}
            groupName="localize"
          />
          <Radio
            item={{
              label: 'label',
              value: 'value',
            }}
            checked
            groupName="localize"
          />
          <Radio
            item={{
              label: 'label',
              value: 'value',
            }}
            groupName="localize"
          />
        </div>
        <div className="col-sm-12">
          <h2>Give a mainColor</h2>
          <Radio
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="danger"
            checked
          />
          <Radio
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="primary"
            checked
          />
          <Radio
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="light_gray"
            checked
          />
          <Radio
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
          <Radio
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="danger"
            subColor="yellow"
            checked
          />
          <Radio
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="primary"
            subColor="danger"
            checked
          />
          <Radio
            item={{
              label: 'label',
              value: 'value',
            }}
            mainColor="light_gray"
            subColor="purple"
            checked
          />
          <Radio
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

export default RadioView;
