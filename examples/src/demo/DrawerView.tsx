import React from 'react';

import { Drawer, } from '@seolhun/localize-components';
import { Button } from '@seolhun/localize-components-atomic';

interface DrawerViewState {
  isShow: boolean;
}

class DrawerView extends React.Component<{}, DrawerViewState> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  handleToggleDrawer = () => {
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
        {isShow
          ? (
            <Drawer
              className='LogExport_Drawer_container'
              onClickClose={this.handleToggleDrawer}
            >
              <h2>Hello Drawer</h2>
            </Drawer>
          )
          : (
            <Button
              className="btn-outline-black"
              onClick={this.handleToggleDrawer}
              style={{
                padding: '10px 20px',
              }}
            >
              Open Drawer
            </Button>
          )
        }

      </section>
    );
  }
}

export default DrawerView;
