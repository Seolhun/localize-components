import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';

import './index.scss';
import './vendor';

render(
  <BrowserRouter>
    <div className="App">
      <Routes />
    </div>
  </BrowserRouter>,
  document.getElementById('app'),
);
