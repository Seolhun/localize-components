import * as React from 'react';

import { NewButton } from '../../../../dist/packages/core/src';
import { Button } from '../../../../dist/packages/localize-components/src';

export interface ButtonViewProps {}

export interface ButtonViewState {
  messages: string[];
}
class ButtonView extends React.Component<ButtonViewProps, ButtonViewState> {
  constructor(props: ButtonViewProps) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  handleClick = () => {
    const { messages } = this.state;
    this.setState({
      messages: [...messages, 'onClick'],
    });
  };

  handleFocus = () => {
    const { messages } = this.state;
    this.setState({
      messages: [...messages, 'onFocus'],
    });
  };

  handleonMouseOver = () => {
    const { messages } = this.state;
    this.setState({
      messages: [...messages, 'onMouseOver'],
    });
  };

  handleonMouseOut = (event: Event) => {
    event.preventDefault();
    const { messages } = this.state;
    this.setState({
      messages: [...messages, 'onMouseOut'],
    });
  };

  handleBlur = () => {
    const { messages } = this.state;
    this.setState({
      messages: [...messages, 'onBlur'],
    });
  };

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-20">
            <h1>Button</h1>
          </div>
        </div>
        <div className="col-20">
          <NewButton
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onMouseOver={this.handleonMouseOver}
            onMouseOut={this.handleonMouseOut}
            onBlur={this.handleBlur}
            theme="primary"
          >
            New-Button
          </NewButton>
          <Button
            className="btn-success"
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onMouseOver={this.handleonMouseOver}
            onMouseOut={this.handleonMouseOut}
            onBlur={this.handleBlur}
            style={{
              padding: '10px 20px',
            }}
          >
            btn-success
          </Button>
          <Button
            className="btn-outline-success"
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onMouseOver={this.handleonMouseOver}
            onMouseOut={this.handleonMouseOut}
            onBlur={this.handleBlur}
            style={{
              padding: '10px 20px',
            }}
          >
            btn-outline-success
          </Button>
          <Button
            className="btn-lighten-success"
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onMouseOver={this.handleonMouseOver}
            onMouseOut={this.handleonMouseOut}
            onBlur={this.handleBlur}
            style={{
              padding: '10px 20px',
            }}
          >
            btn-lighten-success
          </Button>
          <Button
            className="btn-darken-success"
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onMouseOver={this.handleonMouseOver}
            onMouseOut={this.handleonMouseOut}
            onBlur={this.handleBlur}
            style={{
              padding: '10px 20px',
            }}
          >
            btn-darken-success
          </Button>
          <Button
            className="btn-darken-success"
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onMouseOver={this.handleonMouseOver}
            onMouseOut={this.handleonMouseOut}
            onBlur={this.handleBlur}
            style={{
              padding: '10px 20px',
            }}
            disabled
          >
            disabled
          </Button>
        </div>
        <div className="col-20">
          {this.state.messages.map((message, idx) => (
            <div key={idx}>{message}</div>
          ))}
        </div>
      </section>
    );
  }
}

export default ButtonView;
