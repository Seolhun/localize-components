import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownItemContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    const target = this.node.getElementsByClassName('on')[0];

    if (target !== undefined) {
      target.parentNode.scrollTop =
        target.offsetTop - target.parentNode.offsetTop;
    }
  }

  render() {
    const { children, ...prop } = this.props;
    return (
      <div className='menu-md'>
        <ul
          ref={(c) => {
            this.node = c;
          }}
          {...prop}
        >
          {children}
        </ul>
      </div>
    );
  }
}

export default DropdownItemContainer;
