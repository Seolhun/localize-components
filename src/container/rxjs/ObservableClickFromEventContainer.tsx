import React, { Component, Fragment } from 'react';

import { Observable } from 'rxjs';

const dummy = require('./_dummy.json');
import schema from './schema';

import TableComponent from '@/component/table';

interface ObservableClickFromEventContainerStates {
  query: string;
}

class ObservableClickFromEventContainer extends Component<{}, ObservableClickFromEventContainerStates> {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    const button = document.getElementById('button');
    if (!button) {
      return;
    }
    const clicks = Observable.fromEvent(button, 'click');
    const points = clicks.map((event: MouseEvent) => {
      return { x: event.clientX, y: event.clientY };
    });
    // const subscription = points.forEach(
    //   onNext => (point) {
    //     alert(`clicked: ${JSON.stringify(point)}`)
    //     subscription.dispose();
    //   },
    //   function onError(error) {
    //     console.error(error);
    //   },
    //   function onCompleted() {
    //     console.log('Done');
    //   }
    // );
    console.log(points);
  }

  handleChangeQuery = ({ target: { value } }) => {
    this.setState({
      query: value,
    });
  }

  renderList() {
    return (
      <TableComponent
        items={dummy}
        schema={schema}
      />
    );
  }

  render() {
    return (
      <Fragment>
        <section>
          <h2>ObservableClickFromEventContainer</h2>
          <div className='row'>
            <div>
              <button
                className='btn btn-success'
                id='button'
              >
                Button
              </button>
            </div>
            <div className='col-sm-12'>
              {this.state.query}
            </div>
            <div className='col-sm-12'>
              {this.renderList()}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ObservableClickFromEventContainer;
