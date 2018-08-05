import * as React from 'react';

import { Button } from '@/component';

class ButtonView extends React.Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-24">
            <h1>Button</h1>
          </div>
        </div>
        <div className="col-24">
          <Button
            className="btn-success"
            onClick={() => null}
            style={{
              padding: '10px 20px',
            }}>
            btn-success
          </Button>
          <Button className="btn-outline-success" onClick={() => null}>
            btn-outline-success
          </Button>
          <Button className="btn-lighten-success" onClick={() => null}>
            btn-lighten-success
          </Button>
          <Button className="btn-darken-success" onClick={() => null}>
            btn-darken-success
          </Button>
          <Button className="btn-darken-success" onClick={() => null} disabled>
            disabled
          </Button>
        </div>
      </section>
    );
  }
}

export default ButtonView;
