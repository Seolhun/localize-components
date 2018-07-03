import * as React from 'react';

import Header from '@/container/layout/Header';
import Routes from '@/routes';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <main className='m-5'>
            <Routes />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
