import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import './vendor';
import './Main.scss';

render(
  <BrowserRouter>
    <div className="App">
      <Routes />
    </div>
  </BrowserRouter>,
  document.getElementById('app'),
);
