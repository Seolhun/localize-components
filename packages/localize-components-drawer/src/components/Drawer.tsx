import React, { Component, ReactNode } from 'react';

import classnames from 'classnames';

const styles = require('./Drawer.scss');

interface DrawerProps {
  onClickClose: (args?: any[]) => void;
  // isNotRequired
  className: string;
  children: ReactNode;
}

class Drawer extends Component<DrawerProps> {
  componentDidMount() {
    document.addEventListener('keydown', this.handleESCtoCloseDrawer, false);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleESCtoCloseDrawer, false);
    document.body.style.overflow = null;
  }

  handleESCtoCloseDrawer = ({ key }) => {
    if (key === 'Escape') {
      this.props.onClickClose();
    }
  }

  handleClickCloseDrawer = () => {
    this.props.onClickClose();
  }

  render() {
    const {
      className,
      children,
    } = this.props;

    return (
      <>
        <div
          className={styles.drawerBackground}
          onClick={this.handleClickCloseDrawer}
          role='presentation'
        />
        <div
          className={classnames(
            styles.drawer,
            'v-top',
            'slideInRight',
            'width-100',
            'overflow-auto',
            className,
          )}
        >
          <div className='row'>
            <div
              className='drawerClose col-xs-1 mz ib v-top right height-100vh'
              onClick={this.handleClickCloseDrawer}
              role='presentation'
            >
              <div className='pd'>
                <button
                  type='button'
                  className='link-white'
                >
                  <i className='material-icons md-36'>close</i>
                </button>
              </div>
            </div>
            <div
              className='drawerBody col-xs-11 mz ib v-top overflow-auto height-100vh'
              style={{
                backgroundColor: 'white',
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export {
  DrawerProps,
};

export default Drawer;
