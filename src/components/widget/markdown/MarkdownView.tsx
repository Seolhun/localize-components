import * as React from 'react';
import { Button } from 'reactstrap';

import './MarkdownView.scss';

class MarkdownView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isShow: false,
    };
  }

  toggleMarkdown() {
    this.setState({ isShow: !this.state.isShow });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10'>
            <h1>{this.props.title}</h1>
          </div>
          <div className='col-sm-2'>
            <Button
              color={this.state.isShow ? 'success' : 'info'}
              className='marginLeft'
              onClick={() => this.toggleMarkdown()}
            >
              {
                this.state.isShow ? 'Show' : 'Hide'
              }
            </Button>
          </div>
          <div
            className='col-sm-12'
            hidden={this.state.isShow}
          >
            <div className='content' dangerouslySetInnerHTML={{ __html: this.props.content }}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownView;
