import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { DivTable, FreezingTable } from './tables';
import { TABLE_TYPE, TABLE_CELL_SIZE } from './constants';

import styles from './Table.scss';

class Table extends Component {
  static propTypes = {
    // isRequired
    /**
     * The items to render with entities render functions.
    */
    items: PropTypes.array.isRequired,
    /**
     * Definition how to render items as table.
    */
    entities: PropTypes.shape({
      header: PropTypes.shape({
        align: PropTypes.string,
        cellHeights: PropTypes.arrayOf(PropTypes.number),
        columns: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          renderHeader: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.oneOfType([
              PropTypes.func,
              PropTypes.node,
              PropTypes.string,
              PropTypes.number,
              PropTypes.bool,
            ])),
            PropTypes.oneOfType([
              PropTypes.func,
              PropTypes.node,
              PropTypes.string,
              PropTypes.number,
              PropTypes.bool,
            ]),
          ]),
          isSortable: PropTypes.bool,
          isFreezing: PropTypes.bool,
        }).isRequired),
      }).isRequired,
      body: PropTypes.shape({
        align: PropTypes.string,
        columns: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          renderBody: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.node,
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
          ]),
          isFreezing: PropTypes.bool,
        }).isRequired),
      }).isRequired,
    }).isRequired,

    // isNotRequired
    /**
     * Changed background-color by body-row-index(odd and even)
    */
    isCrossableColor: PropTypes.bool,
    /**
     * Changed background-color by body-row-index(odd and even)
    */
    onSetCrossableColorStyle: PropTypes.func,
    /**
     * Table columns is fixed or not(using table-layout css)
    */
    isLayoutFixed: PropTypes.bool,
    /**
     * If items length is 0, render this message.
    */
    noDataMessage: PropTypes.string,
    /**
     * Render arrow icon on header cell. And, chnage background color all selected columns follwing sorted column state.
    */
    orderBy: PropTypes.string,
    /**
     * Custom render when items length is 0.
     */
    renderNoData: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    /**
     * Selected row index changed row colors.
     */
    selectedBodyRowIndex: PropTypes.number,
    /**
     * Selected cell index changed row colors in selectedBodyRowIndex.
     */
    selectedBodyCellIndex: PropTypes.number,
    /**
     * Selected row index style changed this style.
     */
    selectedBodyRowStyle: PropTypes.object,
    /**
     * Selected row index style changed this className.
     */
    selectedBodyRowClassName: PropTypes.string,
    /**
     * Selected cell index style changed this style in selectedBodyRowIndex.
     */
    selectedBodyCellStyle: PropTypes.object,
    /**
     * Selected row index style changed this className.
     */
    selectedBodyCellClassName: PropTypes.string,
    /**
     * If equlas entities.header, entities.body names. This is change columns background-color,
     */
    sortBy: PropTypes.string,
    /**
     * Definition what table components type to render.
     */
    tableType: PropTypes.string,

    // Event Header
    /**
     * Custom onblur handler by bluring header row
     */
    onBlurHeaderRow: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]),
    /**
     * Custom onclick sort handler by clicking header cell
     */
    onClickSortBy: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]),
    /**
     * Custom onfocus handler by focusing header row
     */
    onFocusHeaderRow: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]),

    // Event Body
    /**
     * Custom onblur handler by bluring body row
     */
    onBlurBodyRow: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]),
    /**
     * Custom onclick handler by clicking body cell
     */
    onClickBodyCell: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]),
    /**
     * Custom onclick handler by clicking body row
     */
    onClickBodyRow: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]),
    /**
     * Custom onfocus handler by focusing body row
     */
    onFocusBodyRow: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]),
    /**
     * Custom onscroll handler by scrolling grid layout.
     */
    onScroll: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]),

    // Style
    /**
     * Definition berak freezing when groupby column width over window width.
     */
    maxFreezingCounts: PropTypes.number,
    /**
     * Definition max height for table grid layout.
     */
    maxHeight: PropTypes.number,
    /**
     * Definition min height for table grid layout.
     */
    minHeight: PropTypes.number,
    /**
     * Definition style className for table grid layout.
     */
    tableGridClassName: PropTypes.string,
    /**
     * Definition style object for table grid layout.
     */
    tableGridStyle: PropTypes.object,
    /**
     * Definition style object for table wrapper layout.
     */
    wrapperClassName: PropTypes.string,
    /**
     * Definition style object for table wrapper layout.
     */
    wrapperStyle: PropTypes.object,
  };

  static defaultProps = {
    isCrossableColor: false,
    isLayoutFixed: false,
    noDataMessage: 'No Data',
    onSetCrossableColorStyle: () => {},
    orderBy: '',
    renderNoData: null,
    selectedBodyRowIndex: -1,
    selectedBodyCellIndex: -1,
    selectedBodyRowStyle: {},
    selectedBodyRowClassName: '',
    selectedBodyCellStyle: {},
    selectedBodyCellClassName: '',
    sortBy: '',
    tableType: TABLE_TYPE.BASIC,

    // Event Body
    onBlurBodyRow: () => null,
    onClickBodyCell: () => null,
    onClickBodyRow: () => null,
    onFocusBodyRow: () => null,

    // Event Header
    onBlurHeaderRow: () => null,
    onClickSortBy: () => null,
    onFocusHeaderRow: () => null,
    onScroll: () => null,

    // Style
    tableGridClassName: '',
    tableGridStyle: {},
    wrapperClassName: '',
    wrapperStyle: {},
    minHeight: 600,
    maxHeight: 600,
    maxFreezingCounts: 1000,
  };

  constructor(props) {
    super(props);
    this.state = {
      isFixed: false,
    };
    this.tableGridRef = React.createRef();;
  }

  componentDidMount() {
    this.tableGridRef.addEventListener('scroll', this.handleOnScrollIsFixed);
    window.addEventListener('resize', this.handleWindowSize);
  }

  componentWillUnmount() {
    this.tableGridRef.removeEventListener('scroll', this.handleOnScrollIsFixed);
    window.removeEventListener('resize', this.handleWindowSize);
  }

  handleOnScrollIsFixed = (event) => {
    this.setState(() => {
      const isFixed = this.tableGridRef.scrollTop > TABLE_CELL_SIZE.HEADER_HEIGHT * 2;
      return {
        isFixed,
      };
    });
    this.props.onScroll(event);
  }

  renderDefaultNoData = () => {
    const { renderNoData } = this.props;

    if (!renderNoData) {
      return (
        <div className='pd-lg center'>
          <p className='description secondary'>{this.props.noDataMessage}</p>
        </div>
      );
    }
    return renderNoData;
  }

  renderTableByType = (tableType) => {
    switch (tableType) {
      case TABLE_TYPE.FREEZING:
        return (
          <FreezingTable
            {...this.props}
            renderNoData={this.renderDefaultNoData}
            isFixed={this.state.isFixed}
          />
        );
      default:
        // Basic, Fixed is implemented in DivTable checkint tableType
        return (
          <DivTable
            {...this.props}
            renderNoData={this.renderDefaultNoData}
          />
        );
    }
  }

  render() {
    const {
      isLayoutFixed,
      tableGridClassName,
      tableGridStyle,
      wrapperClassName,
      wrapperStyle,
      tableType,
    } = this.props;

    return (
      <div
        className={classnames(
          wrapperClassName,
          styles.TableWrapper,
          tableType === TABLE_TYPE.FREEZING
            ? styles.FreezingTableWrapper
            : '',
        )}
        style={{
          ...wrapperStyle,
        }}
      >
        <div
          ref={this.tableGridRef}
          className={classnames(tableGridClassName, styles.TableGridContainer)}
          style={{
            ...tableGridStyle,
            display: (tableType !== TABLE_TYPE.FREEZING && 'table'),
            tableLayout: (isLayoutFixed && 'fixed'),
          }}
        >
          {this.renderTableByType(tableType)}
        </div>
      </div>
    );
  }
}

export default Table;
