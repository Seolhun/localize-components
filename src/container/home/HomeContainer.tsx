import * as React from 'react';

import Button from '@/component/button';

class HomeContainer extends React.Component {
  render() {
    return (
      <section className="row">
        <div className="col-sm-12">
          <h1>Hello, I'm Home.</h1>
        </div>
        <Button className="btn btn-main" padding="10px 20px">
          Hello
        </Button>
      </section>
    );
  }
}

export default HomeContainer;
