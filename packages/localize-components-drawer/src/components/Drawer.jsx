import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Drawer.scss';

class Drawer extends Component {
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
  };

  render() {
    const { className, children, onClickClose } = this.props;

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
              onClick={onClickClose}
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

Drawer.propTypes = {
  onClickClose: PropTypes.func.isRequired,
  // isNotRequired
  className: PropTypes.string,
  children: PropTypes.node,
};

Drawer.defaultProps = {
  // isNotRequired
  className: '',
  children: <div />,
};

export default Drawer;
