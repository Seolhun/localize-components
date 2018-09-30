import * as React from 'react';

import { Preloader } from '../../../dist/packages/localize-components/src';

class PreloaderView extends React.Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-20">
            <h1>Preloader</h1>
          </div>
        </div>
        <div className="col-20">
          <Preloader />
        </div>
      </section>
    );
  }
}

export default PreloaderView;
