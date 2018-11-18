
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, LocalizeColor } from '@seolhun/localize-components-atomic';

import { routers } from '../routes';

const MenuView = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          localize-components demo
        </h1>
        {routers.map((router) => {
          return (
            <Link
              key={router.name}
              to={router.path}
            >
              <Button theme={LocalizeColor.PURPLE}>
                {router.label}
              </Button>
            </Link>
          );
        })}
      </header>
    </div>
  )
}

export default MenuView;
