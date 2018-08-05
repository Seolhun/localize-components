import * as React from 'react';

import { Alert } from '../../src';

interface AlertViewState {
  isShow: boolean;
}

class AlertView extends React.Component<{}, AlertViewState> {
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
          <div className="col-24">
            <h1>Hr</h1>
          </div>
        </div>
        <Alert
          onClickClose={this.handleIsShow}
          message={'top-center'}
          isShow={isShow}
          position="top-center"
        />
        <Alert
          onClickClose={this.handleIsShow}
          message={'center'}
          isShow={isShow}
          position="center"
        />
        <Alert
          onClickClose={this.handleIsShow}
          message={'top-left'}
          isShow={isShow}
          position="top-left"
        />
        <Alert
          onClickClose={this.handleIsShow}
          message={'bottom-right'}
          isShow={isShow}
          position="bottom-right"
        />
        <div className="col-24" />
        <div className="col-24" />
      </section>
    );
  }
}

export default AlertView;
