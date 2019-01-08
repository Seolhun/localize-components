
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routers } from '../routes';

import { Jumbotron } from '@seolhun/localize-components';
import { Button } from '@seolhun/localize-components-atomic';

class MenuView extends Component {

  render() {
    return (
      <div className='App'>
        <Jumbotron
          title='Hello, Localize-Components'
          description='Localize-Components is made for getting my data rights'
          theme='WHITE'
        >
          <header className='App-header'>
            <h1>
              Localize-Components demo
            </h1>
            <Button
              size='medium'
              disabled
            >
              Hello
            </Button>

            {routers.map((router) => {
              return (
                <Link
                  key={router.label}
                  to={router.path}
                >
                  <Button
                    size='medium'
                    mainColor='DANGER'
                  >
                    {router.label}
                  </Button>
                </Link>
              );
            })}
          </header>
        </Jumbotron>;
      </div>
    );
  }
}

export default MenuView;
