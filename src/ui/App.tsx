import * as React from 'react';
import './App.scss';
import MarkdownView from './markdown/MarkdownView';
const paging = require('../scripts/node/publishing/README.md');

class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <div className='App' >
          <h1>First React Examples</h1>
        </div>
        <div>
          <div>
            <MarkdownView children={paging} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
