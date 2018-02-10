import * as React from 'react';
import { Button } from 'reactstrap';

import './MarkdownView.scss';

export interface MarkdownViewProps extends React.Props<MarkdownView> {
  title: string;
  content: string;
}

export interface MarkdownViewState {
  is_show: boolean;
}

class MarkdownView extends React.Component<MarkdownViewProps, MarkdownViewState> {
  constructor(props: MarkdownViewProps) {
    super(props);

    this.state = {
      is_show: false,
    };
  }

  toggleMarkdown() {
    this.setState({ is_show: !this.state.is_show });
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
              color={this.state.is_show ? 'success' : 'info'}
              className='marginLeft'
              onClick={() => this.toggleMarkdown()}
            >
              {
                this.state.is_show ? 'Show' : 'Hide'
              }
            </Button>
          </div>
          <div
            className='col-sm-12'
            hidden={this.state.is_show}
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
