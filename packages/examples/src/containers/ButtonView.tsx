
import React, { Component } from 'react';

import { Button } from '@seolhun/localize-components-atomic';

class MenuView extends Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <Button
              size='large'
            >
              Hello
            </Button>
            <Button
              size='medium'
            >
              Hello
            </Button>
            <Button
              size='small'
            >
              Hello
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuView;
