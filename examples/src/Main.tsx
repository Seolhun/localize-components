import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import MenuView from './demo/MenuView';
import Routes from './routes';

import './vendor';
import './Main.scss';

render(
  <HashRouter>
    <div className="App">
      <MenuView />
      <Routes />
    </div>
  </HashRouter>,
  document.getElementById('app'),
);
