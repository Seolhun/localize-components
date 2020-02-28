import React from 'react';
import { Link } from 'react-router-dom';

import { routers } from '../routes';

import { LocalizeJumbotron } from '@seolhun/localize-components';
import { LocalizeButton } from '@seolhun/localize-components-atomic';

const MenuView = () => {
  return (
    <LocalizeJumbotron
      title="Hello, Localize-Components"
      description="Localize-Components is made for localized style without side-effect"
    >
      <div>
        <h2>Atomic Components</h2>
        {routers
          .filter((router) => router.type === 0)
          .map((router) => {
            return (
              <Link key={router.label} to={router.path}>
                <LocalizeButton size="medium">{router.label}</LocalizeButton>
              </Link>
            );
          })}
        <h2>Components</h2>
        {routers
          .filter((router) => router.type === 1)
          .map((router) => {
            return (
              <Link key={router.label} to={router.path}>
                <LocalizeButton size="medium">{router.label}</LocalizeButton>
              </Link>
            );
          })}
      </div>
    </LocalizeJumbotron>
  );
};

export default MenuView;
