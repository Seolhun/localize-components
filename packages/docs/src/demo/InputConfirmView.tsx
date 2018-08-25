import * as React from 'react';

import { InputConfirm } from '@seolhun/localize-react-components';

interface InputConfirmViewState {
  isShow: boolean;
  value: string;
}

class InputConfirmView extends React.Component<{}, InputConfirmViewState> {
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
        <InputConfirm
          htmlFor=""
          onClickClose={this.handleIsShow}
          onClickSubmit={this.handleIsShow}
          onChange={this.handleInputValue}
          isShow={isShow}
          position="top-center"
          value={value}
        />
      </section>
    );
  }
}

export default InputConfirmView;
