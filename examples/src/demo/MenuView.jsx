
import React from 'react';

import { Button } from '@seolhun/localize-components-atomic';

const MenuView = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          localize-components demo
        </h1>
        <Button className="btn btn-primary">
          Learn React
        </Button>
        <Button className="btn btn-danger">
          Learn React
        </Button>
        <Button className="btn btn-outline-success">
          Learn React
        </Button>
      </header>
    </div>
  )
}

export default MenuView;
