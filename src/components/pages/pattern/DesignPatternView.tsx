
import * as React from 'react';
import { Button, InputGroup } from 'reactstrap';
import Singleton from './structural/Singletone';

// const Example = require('./Example.md');

class DesignPatternView extends React.Component<any, any> {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h1>DesignPatternView</h1>
            <InputGroup>
              <Button onClick={() => this.singleton('onClick : ')} color='info'>Singleton</Button>
            </InputGroup>
          </div>
        </div>
      </div>
    );
  }

  print(query: string) {
    console.log(`${query} ${new Date()}`);
  }

  private singleton(query: string) {
    console.log('1.new Singleton() === new Singleton() : ', new Singleton() === new Singleton());
    console.log('==============================');
    console.log('2.Singleton.getInstance === new Singleton() : ', Singleton.getInstance === new Singleton());
    console.log('==============================');
    console.log('3.new Singleton() === Singleton.getInstance : ', new Singleton() === Singleton.getInstance);
    console.log('==============================');
    console.log('4.Singleton.getInstance === Singleton : ', Singleton.getInstance === Singleton);
    console.log('==============================');
    console.log('5.Singleton.getInstance === Singleton.getInstance : ', Singleton.getInstance === Singleton.getInstance);
    console.log('==============================');
    console.log('6.Singleton === Singleton : ', Singleton === Singleton);
    console.log('==============================');
    this.setState({ compare: Singleton.getInstance === Singleton.getInstance });
    return Singleton.lazyFunction(() => this.print(query));
  }
}

export default DesignPatternView;
