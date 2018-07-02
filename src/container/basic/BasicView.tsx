
import * as React from 'react';

import { Button } from 'reactstrap';

import { PromiseTest } from './promise/Promise';

export interface BasicViewProps {

}

export interface BasicViewStates {

}

class BasicView extends React.Component<BasicViewProps, BasicViewStates> {
  promise_test: PromiseTest;

  constructor() {
    super({}, {});
    this.promise_test = new PromiseTest();
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h1>BasicView</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <Button onClick={() => this.promise()} color='primary'>Promise</Button>
          </div>
          <div className='col-sm-3'>
            <Button onClick={() => this.nonPromise()} color='warning'>Non-Promise</Button>
          </div>
          <div className='col-sm-3'>
            <Button onClick={() => this.promiseAll()} color='success'>Promise-All</Button>
          </div>
          <div className='col-sm-3'>
            <Button onClick={() => this.promiseRace()} color='info'>Promise-Race</Button>
          </div>
        </div>
      </div>
    );
  }

  promise() {
    // Object { name: "아반떼", doors: 4 }
    this.promise_test.promiseCreateCar('아반떼', 4).then((car) => {
      console.log(car);
    }).catch((error) => {
      console.log(error);
    });
  }

  nonPromise() {
    // undefined
    const car = this.promise_test.nonPromiseCreateCar('벨로스터', 3);
    console.log(car);
  }

  promiseAll() {
    this.promise_test.promiseAll();
  }

  promiseRace() {
    this.promise_test.promiseRace();
  }
}

export default BasicView;
