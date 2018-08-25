import * as React from 'react';

import { Spinner } from '../../../../dist/src';

class SpinnerView extends React.Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-20">
            <h1>Spinner</h1>
          </div>
        </div>
        <div className="col-20">
          <Spinner type="default" rect="45px" />
        </div>
      </section>
    );
  }
}

export default SpinnerView;
