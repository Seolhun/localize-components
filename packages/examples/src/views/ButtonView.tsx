import React from 'react';

import { Button } from '@seolhun/localize-components-atomic';

const ButtonView = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <h2>Default</h2>
          <Button>Click me</Button>
        </div>
        <div className='col-sm-12'>
          <h2>Give a mainColor</h2>
          <Button mainColor='danger'>danger</Button>
          <Button mainColor='primary'>primary</Button>
          <Button mainColor='lightgrey'>lightgrey</Button>
          <Button mainColor='#41FF2B'>#41FF2B</Button>
        </div>
        <div className='col-sm-12'>
          <h2>Give a size</h2>
          <Button size='small'>small</Button>
          <Button size='medium'>medium</Button>
          <Button size='large'>large</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonView;
