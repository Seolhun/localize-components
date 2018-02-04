import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import ErrorView from '../common/ErrorView';
import MarkdownView from '../pages/markdown/MarkdownView';
// const paging = require('../../scripts/node/publishing/README.md');

class HeaderView extends React.Component<{}> {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/error'>Error</Link></li>
            <li><Link to='/markdown'>MarkdownView</Link></li>
          </ul>
          <hr />
          <div>
            {/* <Route exact path='/' component={Home} /> */}
            <Route path='/error' component={ErrorView} />
            <Route path='/markdown' component={MarkdownView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default HeaderView;
