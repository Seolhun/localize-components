import * as React from 'react';

import HeaderView from '../ui/layout/HeaderView';

import './App.scss';

class App extends React.Component<{}> {
  render() {
    return (
      <div className='App' >
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <h1>JavaScript, TypeScript, NodeJS with React</h1>
            </div>
            <div className='col-sm-12'>
              <HeaderView />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
