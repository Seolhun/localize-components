import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { Container } from '@seolhun/localize-components';

import MenuView from './containers/MenuView';
import Routes from './routes';

import './vendor';
import './Main.scss';

ReactDOM.render(
  <HashRouter>
    <Container isFullWidth>
      <MenuView />
      <Routes />
    </Container>
  </HashRouter>,
  document.getElementById('app')
);
