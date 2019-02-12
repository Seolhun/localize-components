import React, { Component } from 'react';

import Button from '@seolhun/localize-components-button';
import { ThemesType } from '@seolhun/localize-components-styled-types';

interface DropdownProps {
  onClickListItem: (...args:any[]) => void;
  // isNotRequired
  selectedItem: {
    [key: string]: any,
  },
  itemList: DropdownItem[],
  /**
   * Set this to change CheckBox ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change CheckBox ours subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change CheckBox valueKey
   * @default 'value'
   */
  valueKey?: string;
  /**
   * Set this to change CheckBox labelKey
   * @default 'label'
   */
  labelKey?: string;
}

interface DropdownItem {
  [key: string]: any,
}

class Dropdown extends Component<DropdownProps> {
  private dropdownRef: any;

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
    if (this.dropdownRef && !this.dropdownRef.contains(e.target)) {
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
