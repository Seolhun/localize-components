
import React, { Component } from 'react';

import { Radio } from '@seolhun/localize-components-atomic';

class RadioView extends Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h2>Default</h2>
            <Radio
              item={{
                label: 'label1',
                value: 'value1',
              }}
              subColor='danger'
              mainColor='primary'
              checked
            />
            <Radio
              item={{
                label: 'label2',
                value: 'value2',
              }}
              mainColor='#FFF'
              subColor='primary'
            />
            <Radio
              item={{
                label: 'label3',
                value: 'value3',
              }}
              mainColor='#FFF'
              subColor='primary'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <h2>Give a main & subColor</h2>
            <Radio
              item={{
                label: 'label',
                value: 'value',
              }}
              mainColor='danger'
              subColor='dark_gray'
              checked
            />
            <Radio
              item={{
                label: 'label',
                value: 'value',
              }}
              mainColor='primary'
              subColor='gray'
              checked
            />
            <Radio
              item={{
                label: 'label',
                value: 'value',
              }}
              mainColor='light_gray'
              subColor='purple'
              checked
            />
            <Radio
              item={{
                label: 'label',
                value: 'value',
              }}
              mainColor='#41FF2B'
              subColor='#000'
              checked
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RadioView;
