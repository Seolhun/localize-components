import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from 'emotion-theming';
import { lightTheme } from '@seolhun/localize-components';
import { Container } from '@seolhun/localize-components-grid';

import MenuView from './views/MenuView';
import Routes from './routes';

import './vendor';
import './Main.scss';

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={lightTheme}>
      <Container isFullWidth>
        <MenuView />
        <Routes />
      </Container>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById('app'),
);
