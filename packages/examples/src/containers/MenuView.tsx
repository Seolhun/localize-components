
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routers } from '../routes';

import { Jumbotron } from '@seolhun/localize-components';
import { Button } from '@seolhun/localize-components-atomic';

class MenuView extends Component {

  render() {
    return (
      <Jumbotron
        title='Hello, Localize-Components'
        description='Localize-Components is made for getting my data rights'
        theme='primary'
      >
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
                mainColor='WHITE'
              >
                {router.label}
              </Button>
            </Link>
          );
        })}
      </Jumbotron>
    );
  }
}

export default MenuView;
