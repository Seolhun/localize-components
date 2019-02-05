
import React, { Component } from 'react';

import { Input } from '@seolhun/localize-components-atomic';

class ButtonView extends Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h2>Default</h2>
            <Input value='' placeholder='Localize Component' />
            <Input value='' subColor='#000' placeholder='Localize Component' />
          </div>
          <div className='col-sm-12'>
            <h2>Give a mainColor</h2>
            <Input mainColor='danger' value='danger' />
            <Input mainColor='primary' value='primary' />
            <Input mainColor='light_gray' value='light_gray' />
            <Input mainColor='#41FF2B' value='#41FF2B' />
          </div>
          <div className='col-sm-12'>
            <h2>Give a subColor</h2>
            <Input mainColor='danger' subColor='dark_gray' value='dark_gray' />
            <Input mainColor='primary' subColor='gray' value='gray' />
            <Input mainColor='light_gray' subColor='light_gray' value='light_gray' />
            <Input mainColor='#41FF2B' subColor='#000' value='#000' />
          </div>
          <div>
          <h2>Give a renderValue</h2>
          <Input value='Value' renderValue={(value) => `Custom_${value}`} />
          <Input value='Value' renderValue={(value) => `<button>${value}</button>`} />
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonView;
