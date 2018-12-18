import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DropdownItemContainer from './DropdownItemContainer';
import DropdownItem from './DropdownItem';

import Button from '@seolhun/localize-components-button';

class Dropdown extends Component {
  static propTypes = {
    onClickListItem: PropTypes.func.isRequired,
    // isNotRequired
    selectedItem: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    itemList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    renderList: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    renderNoData: PropTypes.func,
    buttonClassName: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    itemSuffix: PropTypes.string,
    radio: PropTypes.bool,
    wrapperClassName: PropTypes.string,
  };

  static defaultProps = {
    selectedItem: '',
    itemList: [],
    renderList: null,
    renderNoData: () => null,
    buttonClassName: 'btn-sub left ic-flex-right',
    wrapperClassName: '',
    itemSuffix: '',
    className: '',
    disabled: false,
    radio: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDropDownOn: false,
    };
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickDocument);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickDocument);
  }

  handleClickDocument = (e) => {
    if (this.dropdown && !this.dropdown.contains(e.target)) {
      this.setState({ isDropDownOn: false });
    }
  };

  handleClickDropDown = () => {
    if (!this.props.disabled) {
      this.setState({ isDropDownOn: !this.state.isDropDownOn });
    }
  };

  handleClickItem = (e) => {
    this.setState({ isDropDownOn: false });
    this.props.onClickListItem(e);
  };

  renderList = (itemList) => {
    const { selectedItem, itemSuffix, radio } = this.props;
    const dataType = Array.isArray(itemList) ? 'array' : 'object';

    const list = dataType === 'object' ? Object.entries(itemList) : itemList;

    if (this.props.renderList) {
      return this.props.renderList({
        onClick: this.handleClickItem,
        list: itemList,
      });
    }

    if (!list.length) {
      return this.props.renderNoData();
    }

    return list.map((item) => {
      const data = dataType === 'object' ? item[1] : item;
      const viewUnit = dataType === 'object' ? item[0] : item;

      if (!data) {
        return null;
      }
      return (
        <DropdownItem
          radio={radio}
          key={viewUnit}
          viewUnit={viewUnit}
          className={
            String(selectedItem || '').toString() === data.toString()
              ? 'on'
              : ''
          }
          item={`${data}${itemSuffix}`}
          onClick={this.handleClickItem}
        />
      );
    });
  };

  render() {
    const {
      className,
      wrapperClassName,
      buttonClassName,
      disabled,
      selectedItem,
      itemSuffix,
      itemList,
    } = this.props;

    let buttonClassNames = buttonClassName;

    if (disabled) {
      buttonClassNames = buttonClassName.replace('btn-sub', '');
      buttonClassNames += ' btn-disabled';
    }

    return (
      <div className={className}>
        <div
          className={`menu-wrapper ${wrapperClassName}`}
          ref={this.dropdownRef}
        >
          <Button
            style={{ width: '100%' }}
            className={buttonClassNames}
            onClick={this.handleClickDropDown}
          >
            <span className='ic-right'>
              {selectedItem}
              {itemSuffix}
            </span>
            <i className='material-icons md-13 not-ic'>keyboard_arrow_down</i>
          </Button>
          {this.state.isDropDownOn && (
            <DropdownItemContainer>
              {this.renderList(itemList)}
            </DropdownItemContainer>
          )}
        </div>
      </div>
    );
  }
}

export default Dropdown;
