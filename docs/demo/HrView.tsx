import * as React from 'react';

import { Hr } from '../../src';

class HrView extends React.Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-24">
            <h1>Hr</h1>
          </div>
        </div>
        <div className="col-24">
          <Hr />
        </div>
        <div className="col-24">
          Color : Red
          <Hr color="red" />
        </div>
      </section>
    );
  }
}

export default HrView;
