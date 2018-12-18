
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routers } from '../routes';

import Jumbotron from '../components/jumbotron';

class MenuView extends Component {

  render() {
    return (
      <div className='App'>
        <Jumbotron
          title='Hello, Hermes'
          description='Hermes is made for getting my data rights'
          theme='white'
        >
          <header className='App-header'>
            <h1>
              Hermes demo
            </h1>

            {routers.map((router) => {
              return (
                <Link
                  key={router.label}
                  className='__LocalizeHermes btn btn-primary'
                  to={router.path}
                >
                  {router.label}
                </Link>
              );
            })}
          </header>
        </Jumbotron>
      </div>
    );
  }
}

export default MenuView;
