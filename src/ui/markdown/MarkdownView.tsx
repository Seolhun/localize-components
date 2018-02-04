import * as React from 'react';
import './MarkdownView.scss';

import * as renderHTML from 'react-render-html';

class MarkdownView extends React.Component {
  render() {
    return (
      <div className='MarkdownView' >
        <div id='markdown'>
          {renderHTML(this.props.children)}
        </div>
      </div>
    );

  }
}

export default MarkdownView;
