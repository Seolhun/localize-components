import * as React from 'react';

import { Button } from '@seolhun/react-simple-components';
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

  handleonMouseOut = () => {
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
          <div className="col-24">
            <h1>Button</h1>
          </div>
        </div>
        <div className="col-24">
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
        <div className="col-24">
          {this.state.messages.map((message, idx) => (
            <div key={idx}>{message}</div>
          ))}
        </div>
      </section>
    );
  }
}

export default ButtonView;
