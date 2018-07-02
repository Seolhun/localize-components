import React, { Component } from 'react';

import Routes from '@/routes';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
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
