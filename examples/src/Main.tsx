import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Routes from './routes';

import './vendor';
import './Main.scss';

render(
  <HashRouter>
    <div className="App">
      <Routes />
    </div>
  </HashRouter>,
  document.getElementById('app'),
);
