import * as React from 'react';

import Header from '../container/layout/Header';
import Routes from '../routes';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
