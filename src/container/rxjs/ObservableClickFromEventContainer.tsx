import * as React from 'react';

import * as Rx from 'rxjs';

const dummy = require('./_dummy.json');
import schema from './schema';

import { Table } from '@/component/table';

interface ObservableClickFromEventContainerStates {
  query: string;
}

class ObservableClickFromEventContainer extends React.Component<
  {},
  ObservableClickFromEventContainerStates
> {
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
    const clicks = Rx.Observable.fromEvent(button, 'click');
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
    return <Table items={dummy} schema={schema} />;
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <h2>ObservableClickFromEventContainer</h2>
          <div className="row">
            <div>
              <button className="btn btn-success" id="button">
                Button
              </button>
            </div>
            <div className="col-sm-12">{this.state.query}</div>
            <div className="col-sm-12">{this.renderList()}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ObservableClickFromEventContainer;
