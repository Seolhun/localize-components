import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from 'emotion-theming';
import { localizeLightTheme } from '@seolhun/localize-components-styled-types';
import { LocalizeContainer } from '@seolhun/localize-components-grid';

import MenuView from './views/MenuView';
import Routes from './routes';

import './vendor';
import './Main.scss';

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={localizeLightTheme}>
      <LocalizeContainer isFullWidth>
        <MenuView />
        <Routes />
      </LocalizeContainer>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById('app'),
);
