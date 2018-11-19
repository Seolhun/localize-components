
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '@seolhun/localize-components-atomic';
// import { LocalizeColor } from '@seolhun/localize-components-types';

import { routers } from '../routes';

class MenuView extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            localize-components demo
          </h1>
          {routers.map((router) => {
            return (
              <Link
                key={router.label}
                to={router.path}
              >
                {router.label}
                {/* <Button theme='basic'>
                  {router.label}
                </Button> */}
              </Link>
            );
          })}
        </header>
      </div>
    )
  }
}

export default MenuView;
