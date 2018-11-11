import * as React from 'react';

import { Alert } from '@seolhun/localize-components';

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
    this.setState(({ isShow }) => {
      return {
        isShow: !isShow,
      }
    });
  }

  render() {
    const { isShow } = this.state;

    return (
      <section>
        <div className="row">
          <div className="col-20">
            <h1>Alert</h1>
          </div>
          <Alert
            title="Give a Title"
            message="Hello Alert"
            isShow={isShow}
            position="right"
            onClickClose={this.handleIsShow}
          />
          <Alert
            title="Give a Message"
            message="Hello Alert"
            isShow={isShow}
            position="top-center"
            onClickClose={this.handleIsShow}
          />
          <Alert
            title="Give a buttonLabel"
            message="Hello Alert"
            buttonLabel="Button Label"
            isShow={isShow}
            position="left"
            onClickClose={this.handleIsShow}
          />
          <Alert
            title="Give a Color"
            message="Hello Alert"
            color="purple"
            isShow={isShow}
            position="bottom-center"
            onClickClose={this.handleIsShow}
          />
        </div>
      </section>
    );
  }
}

export default AlertView;
