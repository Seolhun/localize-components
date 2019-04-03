import React, { Component } from 'react';

import { Modal } from '@seolhun/localize-components';
import Button from '@seolhun/localize-components-button';

export interface ModalViewState {
  isShow: boolean;
}

class ModalView extends Component<null, ModalViewState> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    }
  }

  handleIsShow = () => {
    this.setState(({ isShow }) => {
      return {
        isShow: !isShow,
      }
    })
  }


  render() {
    const {
      isShow,
    } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <Button onClick={this.handleIsShow}>Open Modal</Button>
            <Modal
              header='Header'
              body='Body'
              footer='Footer'
              onClick={this.handleIsShow}
              isShow={isShow}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ModalView;
