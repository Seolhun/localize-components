import * as React from 'react';

import { Loading } from '../../../../dist/src';

class LoadingView extends React.Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-20">
            <h1>Loading</h1>
          </div>
        </div>
        <div className="col-20">
          <Loading />
        </div>
      </section>
    );
  }
}

export default LoadingView;
