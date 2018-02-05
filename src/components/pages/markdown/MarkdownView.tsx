import * as React from 'react';
import { Button } from 'reactstrap';

class MarkdownView extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h1>Markdown View</h1>
            <Button color='info'>Show Markdown</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownView;
