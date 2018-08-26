import * as React from 'react';

import { Alert } from '../../../../dist/src';

export interface AlertViewState {
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
          <div className="col-20">
            <h1>Hr</h1>
          </div>
        </div>
        <Alert
          isShow={isShow}
          message={'top-center'}
          onClickClose={this.handleIsShow}
          position="top-center"
        />
        <Alert
          isShow={isShow}
          message={'center'}
          onClickClose={this.handleIsShow}
          position="center"
        />
      </section>
    );
  }
}

export default AlertView;
