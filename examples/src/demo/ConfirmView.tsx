import * as React from 'react';

import { Confirm } from '../../../dist/packages/localize-components/src';

interface ConfirmViewViewState {
  isShow: boolean;
  value: string;
}

class ConfirmViewView extends React.Component<{}, ConfirmViewViewState> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      value: '',
    };
  }

  handleIsShow = (event) => {
    event.preventDefault();
    const { isShow } = this.state;
    this.setState({
      isShow: !isShow,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    this.handleIsShow(event);
    alert(`current input value is ${value}`);
  };

  handleInputValue = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({
      value,
    });
  };

  render() {
    const { isShow, value } = this.state;

    return (
      <section>
        <div className="row">
          <div className="col-20">
            <h1>Hr</h1>
          </div>
        </div>
        <Confirm
          htmlFor=""
          onClickClose={this.handleIsShow}
          onClickSubmit={this.handleSubmit}
          onChange={this.handleInputValue}
          isShow={isShow}
          value={value}
          title="Title"
          type="input"
        />
        <Confirm
          htmlFor=""
          onClickClose={this.handleIsShow}
          onClickSubmit={this.handleSubmit}
          onChange={this.handleInputValue}
          isShow={isShow}
          value={value}
          title="Title"
          message="Message"
          position="top-left"
        />
      </section>
    );
  }
}

export default ConfirmViewView;
