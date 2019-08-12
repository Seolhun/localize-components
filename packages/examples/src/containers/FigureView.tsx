
import React from 'react';

import { Circle } from '@seolhun/localize-components-atomic';

const FigureView = () => {
  return (
    <div className='container'>
      <div className='row'>
        <h1>Circle</h1>
        <div className='col-sm-12'>
          <h2>Default</h2>
          <Circle>Click me</Circle>
        </div>
        <div className='col-sm-12'>
          <h2>Give a mainColor</h2>
          <Circle mainColor='danger'>danger</Circle>
          <Circle mainColor='primary'>primary</Circle>
          <Circle mainColor='light_gray'>light_gray</Circle>
          <Circle mainColor='#41FF2B'>#41FF2B</Circle>
        </div>
        <div className='col-sm-12'>
          <h2>Give a size</h2>
          <Circle size={15}>15</Circle>
          <Circle size={20}>20</Circle>
          <Circle size={30}>30</Circle>
        </div>
      </div>
    </div>
  );
}

export default FigureView;
