import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  isEqual,
  debounce,
  throttle,
} from 'lodash';

import {
  Spinner
} from '@seolhun/localize-components-atmic';

import './DropdownSearch.scss';

class DropdownSearch extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    onClickItem: PropTypes.func.isRequired,

    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChangeInput: PropTypes.func,
    onScrollEnd: PropTypes.func,

    selectedItem: PropTypes.string,
    noDataMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    placeholder: PropTypes.string,

    clickItemDelay: PropTypes.number,
    changeInputDebounce: PropTypes.number,
    scrollEndThrottle: PropTypes.number,

    // mount 되었을 때, list가 변경되었을 때 isDropdownOpen을 true로 만듦
    autoFocus: PropTypes.bool,
    spinner: PropTypes.bool,
    isDisabled: PropTypes.bool,
    hasWarning: PropTypes.bool,
    // input value 에 따라 state list 를 변경하여 일부 item만 출력
    hasFilter: PropTypes.bool,
    // item click 이후 input value가 남아있음
    hasRemainInput: PropTypes.bool,
    // item click 이후 isDropdownOpen이 true로 남아있음
    hasRemainList: PropTypes.bool,
  }

  static defaultProps = {
    selectedItem: '',
    noDataMessage: 'No data...',
    placeholder: '',

    onBlur: () => null,
    onFocus: () => null,
    onChangeInput: () => null,
    onScrollEnd: () => null,

    clickItemDelay: 0,
    changeInputDebounce: 0,
    scrollEndThrottle: 0,

    autoFocus: false,
    spinner: false,
    isDisabled: false,
    hasFilter: false,
    hasWarning: false,
    hasRemainInput: false,
    hasRemainList: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.selectedItem,
      warning: false,
      list: this.getFilterdList(this.props.list, this.props.selectedItem),
      isDropdownOpen: this.props.autoFocus,
      cursor: 0,
      bottom: 0,
    };

    this.handleDelayClickItem = throttle(this.handleDelayClickItem, this.props.clickItemDelay, { leading: false, trailing: true });
    this.handleDebounceChangeInput = debounce(this.handleDebounceChangeInput, this.props.changeInputDebounce);
    this.handleThrottleScrollList = throttle(this.handleThrottleScrollList, this.props.scrollEndThrottle);

    // Ref
    this.dropdownRef = React.createRef();
    this.inputRef = React.createRef();
    this.listRef = React.createRef();
  }

  componentDidMount() {
    this.handleOpenLogic();
    document.addEventListener('click', this.handleClickDocument);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedItem !== nextProps.selectedItem) {
      this.setState({
        list: this.getFilterdList(nextProps.list, nextProps.selectedItem),
        value: nextProps.selectedItem,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.isDropdownOpen &&
      !this.state.isDropdownOpen &&
      !this.props.hasRemainList &&
      !this.props.autoFocus
    ) {
      this.setState({ cursor: 0 });
    }

    if (
      !prevState.isDropdownOpen &&
      this.state.isDropdownOpen
    ) {
      this.handleOpenLogic();
    }

    if (!isEqual(prevProps.list, this.props.list)) {
      if (
        this.state.isDropdownOpen &&
        prevProps.spinner
      ) {
        this.list.scrollTop = this.state.bottom - 1;
      } else {
        this.scrollIntoCursor();
      }
      this.setState(state => ({
        isDropdownOpen: state.isDropdownOpen || this.props.autoFocus,
        list: this.getFilterdList(this.props.list),
        cursor: Math.max(0, Math.min(this.props.list.length - 1, state.cursor)),
      }));
    }
  }

  componentWillUnmount() {
    document.removeEventListener(
      'click',
      this.handleClickDocument,
    );
  }

  // Mount 되었을 때와 isDropdownOpen이 true로 토글되었을 때 fire
  handleOpenLogic = () => {
    if (this.props.autoFocus) {
      this.focusIntoInput();
      this.scrollIntoCursor();
    }
  }

  focusIntoInput = () => {
    if (this.input) {
      this.input.focus();
      this.handleFocusInput();
    }
  }

  scrollIntoCursor = () => {
    if (this.list) {
      const item = this.list.children[this.state.cursor];
      if (item) {
        item.scrollIntoViewIfNeeded();
      }
    }
  }

  getFilterdList = (list, selectedItem = this.state.value) => {
    if (!this.props.hasFilter || !selectedItem.length) {
      return list;
    }

    return list.reduce((arr, item) => {
      const val = selectedItem.toLowerCase();

      if (item.name.toLowerCase().includes(val)) {
        return [...arr, item];
      }

      return arr;
    }, []);
  }

  handleClickDocument = (e) => {
    if (this.dropdown && !this.dropdown.contains(e.target)) {
      this.setState({ isDropdownOpen: false });
    }
  }

  handleFocusInput = () => {
    if (!this.state.isDropdownOpen) {
      this.setState({ isDropdownOpen: true });
    }
    this.props.onFocus(this.input);
  }

  handleDelayClickItem = (key) => {
    const { onClickItem } = this.props;
    onClickItem(key);
  }

  handleSelectItem = (item) => {
    const { key, name } = item;
    this.setState({
      warning: false,
      isDropdownOpen: this.props.hasRemainList,
      value: this.props.hasRemainInput ? name : '',
    }, () => {
      this.handleDelayClickItem(key);
    });
  }

  handleClickItem = (item, index) => (e) => {
    if (this.props.hasRemainList || this.props.autoFocus) {
      e.nativeEvent.stopImmediatePropagation();
    }
    this.setState({
      cursor: index,
      value: item,
    }, () => {
      this.handleSelectItem(item);
    });
  }

  handleThrottleScrollList = () => {
    const { onScrollEnd } = this.props;
    const dom = this.list;

    if (dom.scrollHeight - dom.scrollTop <= dom.clientHeight) {
      onScrollEnd();
    }
  }

  handleScrollList = () => {
    if (!this.props.spinner) {
      this.setState({
        bottom: this.list.scrollTop,
      });
    }
    this.handleThrottleScrollList();
  }

  handleDebounceChangeInput = (value) => {
    const warning = this.props.hasWarning && value.length === 0;

    if (warning) {
      const list = this.getFilterdList(this.props.list, '');
      this.setState({
        warning,
        list,
        value: '',
      });

      return;
    }
    const list = this.getFilterdList(this.props.list, value);

    this.setState(({ cursor }) => ({
      list,
      value,
      warning,
      cursor: this.props.hasFilter ? 0 : cursor,
    }), () => {
      this.props.onChangeInput(value);
    });
  };

  handleChangeInput = ({ target: { value } }) => {
    this.setState({
      value,
    }, () => {
      this.handleDebounceChangeInput(value);
    });
  }

  handleBlurInput = (e) => {
    this.props.onBlur(e);
  }

  handleKeyPress = (e) => {
    const {
      cursor,
      list,
    } = this.state;
    const { key } = e;

    if (!this.state.isDropdownOpen) {
      this.setState({ isDropdownOpen: true });
    }

    if (key === 'ArrowUp' || key === 'ArrowDown') {
      if (this.state.isDropdownOpen) {
        const scrollDiff = this.list.children[cursor].getBoundingClientRect().height;
        if (key === 'ArrowUp' && cursor > 0) {
          this.list.scrollTop -= scrollDiff;
          this.setState({ cursor: cursor - 1 });
        }

        if (key === 'ArrowDown' && cursor < list.length - 1) {
          this.list.scrollTop += scrollDiff;
          this.setState({ cursor: cursor + 1 });
        }
      }
    }

    if (key === 'Enter' || key === 'Escape') {
      if (key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        this.input.blur();
        if (cursor >= 0 && cursor <= list.length - 1) {
          this.handleSelectItem(list[cursor]);
        }
      } else {
        this.setState({ isDropdownOpen: false });
      }
    }
  }

  renderDropdownList = () => {
    const { value, list } = this.state;

    return list.map((item, index) => {
      const { key, name } = item;
      const html = value.length ? (
        name.toString().split(value.toString()).join(`<span class="highlight ib v-bottom">${value}</span>`)
      ) : name;
      // handleClickItem은 고차함수
      return (
        <li
          key={key}
          onClick={this.handleClickItem(item, index)}
          className={`${this.state.cursor === index ? 'hoverList' : ''}`}
          role='presentation'
        >
          <span
            data-view-unit={name}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </li>
      );
    });
  }

  render() {
    return (
      <div
        ref={this.dropdownRef}
        className='Localize__Components dropdown-search'
      >
        <input
          ref={this.inputRef}
          type='text'
          className={`dropdown-search-input input description primary ${this.state.warning ? 'invalid' : ''}`}
          placeholder={this.props.placeholder}
          onKeyDown={this.handleKeyPress}
          onChange={this.handleChangeInput}
          onClick={this.handleFocusInput}
          onFocus={this.handleFocusInput}
          onBlur={this.handleBlurInput}
          value={this.state.value}
          autoComplete='off'
          disabled={this.props.isDisabled}
        />
        {this.state.isDropdownOpen && (
          <div className='menu-md'>
            <ul
              ref={this.listRef}
              className='dropdown-search-list'
              onScroll={this.handleScrollList}
            >
              {this.state.list.length === 0 && !this.props.spinner ? (
                <li className='dropdown-search-disabled disabled description'>
                  <p>{this.props.noDataMessage}</p>
                </li>
              ) : this.renderDropdownList()}
              {this.props.spinner && (
                <li className='dropdown-search-disabled disabled dropdown-search-spinner'>
                  <Preloader />
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default DropdownSearch;
