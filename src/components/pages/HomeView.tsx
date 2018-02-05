import * as React from 'react';
import { Alert } from 'reactstrap';

class HomeView extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <h1>JavaScript, TypeScript, NodeJS with React</h1>
          <h3>HomeView</h3>
        </div>
        <Alert color='danger'>
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
        </Alert>
      </div>
    );
  }
}

export default HomeView;
