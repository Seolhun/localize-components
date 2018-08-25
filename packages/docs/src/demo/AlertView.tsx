import * as React from 'react';

import { Alert } from '../../../../dist/src';

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
          <div className="col-20">
            <h1>Hr</h1>
          </div>
        </div>
        {/* <Alert
          isShow={isShow}
          message={'top-left'}
          onClickClose={this.handleIsShow}
          position="top-left"
        />
        <Alert
          isShow={isShow}
          message={'top-center'}
          onClickClose={this.handleIsShow}
          position="top-center"
        />
        <Alert
          isShow={isShow}
          message={'top-right'}
          onClickClose={this.handleIsShow}
          position="top-right"
        /> */}
        {/* <Alert
          isShow={isShow}
          message={'left'}
          onClickClose={this.handleIsShow}
          position="left"
        /> */}
        <Alert
          isShow={isShow}
          message={'center'}
          onClickClose={this.handleIsShow}
          position="center"
        />
        {/* <Alert
          isShow={isShow}
          message={'right'}
          onClickClose={this.handleIsShow}
          position="right"
        /> */}
        {/* <Alert
          isShow={isShow}
          message={'bottom-left'}
          onClickClose={this.handleIsShow}
          position="bottom-left"
        />
        <Alert
          isShow={isShow}
          message={'bottom-center'}
          onClickClose={this.handleIsShow}
          position="bottom-center"
        />
        <Alert
          isShow={isShow}
          message={'bottom-right'}
          onClickClose={this.handleIsShow}
          position="bottom-right"
        /> */}
      </section>
    );
  }
}

export default AlertView;
