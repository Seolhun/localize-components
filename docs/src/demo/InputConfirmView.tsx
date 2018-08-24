import * as React from 'react';

import { InputConfirm } from '@seolhun/localize-react-components';

interface InputConfirmViewState {
  isShow: boolean;
}

class InputConfirmView extends React.Component<{}, InputConfirmViewState> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  handleIsShow = () => {
    const { isShow } = this.state;
    this.setState({
      isShow: !isShow,
    });
  };

  render() {
    const { isShow } = this.state;

    return (
      <section>
        <div className="row">
          <div className="col-20">
            <h1>Hr</h1>
          </div>
        </div>
        <InputConfirm
          onClickClose={this.handleIsShow}
          message={'top-center'}
          isShow={isShow}
          position="top-center"
        />
        <InputConfirm
          onClickClose={this.handleIsShow}
          message={'center'}
          isShow={isShow}
          position="center"
        />
        <InputConfirm
          onClickClose={this.handleIsShow}
          message={'top-left'}
          isShow={isShow}
          position="top-left"
        />
        <InputConfirm
          htmlFor="Hello"
          onClickClose={this.handleIsShow}
          message={'bottom-right'}
          isShow={isShow}
          position="bottom-right"
        />
        <div className="col-20" />
        <div className="col-20" />
      </section>
    );
  }
}

export default InputConfirmView;
