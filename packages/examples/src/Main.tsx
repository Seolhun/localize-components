import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from 'emotion-theming';
import { LocalizeTheme } from '@seolhun/localize-components-styled-types';
import { Container } from '@seolhun/localize-components';

import MenuView from './views/MenuView';
import Routes from './routes';

import './vendor';
import './Main.scss';

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={LocalizeTheme}>
      <Container isFullWidth>
        <MenuView />
        <Routes />
      </Container>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById('app')
);
