import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import HeaderView from '../components/layout/HeaderView';
import FunctionalView from './pages/funtional/FunctionalView';
import GrammarView from './pages/grammar/GrammarView';
import HomeView from './pages/HomeView';
import DesignPatternView from './pages/pattern/DesignPatternView';

// import './App.scss';

class App extends React.Component<{}> {
  render() {
    return (
      <div className='App' >
        <HeaderView />
        <div className='container content-main'>
          <div className='row'>
            <div className='col-sm-12'>
              <Switch>
                <Route exact path='/' component={HomeView} />
                <Route path='/grammar' component={GrammarView} />
                <Route path='/funtional' component={FunctionalView} />
                <Route path='/pattern' component={DesignPatternView} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
