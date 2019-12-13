import React from 'react';
import { Link } from 'react-router-dom';

import { routers } from '../routes';

import { LocalizeJumbotron } from '@seolhun/localize-components';
import { Button } from '@seolhun/localize-components-atomic';

const MenuView = () => {
  return (
    <LocalizeJumbotron
      title='Hello, Localize-Components'
      description='Localize-Components is made for localized style without side-effect'
      mainColor='primary'
    >
      <div>
        <h2>Atomic Components</h2>
        {routers
          .filter((router) => router.type === 0)
          .map((router) => {
            return (
              <Link key={router.label} to={router.path}>
                <Button size='medium' mainColor='white'>
                  {router.label}
                </Button>
              </Link>
            );
          })}
        <h2>Components</h2>
        {routers
          .filter((router) => router.type === 1)
          .map((router) => {
            return (
              <Link key={router.label} to={router.path}>
                <Button size='medium' mainColor='danger'>
                  {router.label}
                </Button>
              </Link>
            );
          })}
      </div>
    </LocalizeJumbotron>
  );
};

export default MenuView;
