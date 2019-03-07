import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import MenuView from './containers/MenuView';
import Routes from './routes';

import './vendor';

import './Main.scss';

console.error('@@@@@@@')

ReactDOM.render(
  <HashRouter>
    <section>
      <MenuView />
      <Routes />
    </section>
  </HashRouter>,
  document.getElementById('app'),
);
