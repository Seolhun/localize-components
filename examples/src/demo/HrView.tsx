import * as React from 'react';

import { Hr } from '@seolhun/localize-components-atomic';

class HrView extends React.Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-20">
            <h1>Hr</h1>
          </div>
        </div>
        <div className="col-20">
          <Hr />
        </div>
        <div className="col-20">
          Color : Red
          <Hr color="red" />
        </div>
      </section>
    );
  }
}

export default HrView;
