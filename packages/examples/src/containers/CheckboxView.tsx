
import React, { Component } from 'react';

import { CheckBox } from '@seolhun/localize-components-atomic';

class CheckBoxView extends Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h2>Default</h2>
            <CheckBox
              item={{
                label: 'label',
                value: 'value',
              }}
              checked
            />
          </div>
          <div className='col-sm-12'>
            <h2>Give a mainColor</h2>
            <CheckBox
              mainColor='danger'
              item={{
                label: 'label',
                value: 'value',
              }}
              checked
            />
            <CheckBox
              mainColor='primary'
              item={{
                label: 'label',
                value: 'value',
              }}
              checked
            />
            <CheckBox
              mainColor='light_gray'
              item={{
                label: 'label',
                value: 'value',
              }}
              checked
            />
            <CheckBox
              mainColor='#41FF2B'
              item={{
                label: 'label',
                value: 'value',
              }}
              checked
            />
          </div>
          <div className='col-sm-12'>
            <h2>Give a subColor</h2>
            <CheckBox
              mainColor='danger'
              subColor='dark_gray'
              item={{
                label: 'label',
                value: 'value',
              }}
              checked
            />
            <CheckBox
              mainColor='primary'
              subColor='gray'
              item={{
                label: 'label',
                value: 'value',
              }}
              checked
            />
            <CheckBox
              mainColor='light_gray'
              subColor='light_gray'
              item={{
                label: 'label',
                value: 'value',
              }}
              checked
            />
            <CheckBox
              mainColor='#41FF2B'
              subColor='#000'
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
  }
}

export default CheckBoxView;
