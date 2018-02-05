import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as marked from 'marked';

import App from './components//App';

import 'bootstrap/dist/css/bootstrap.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('app'),
);
