import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TABLE_CELL_SIZE } from '../constants';

import { FreezingHeaderRow } from '../row/header';
import { FreezingBodyRow } from '../row/body';

import styles from './FreezingTable.scss';

class FreezingTable extends Component {
  static propTypes = {
    // isRequired
    items: PropTypes.array.isRequired,
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
    maxHeight: PropTypes.number.isRequired,
    maxFreezingCounts: PropTypes.number.isRequired,

    // isNotRequired, But, must have values because of already checking Table (HoC)
    onSetCrossableColorStyle: PropTypes.func.isRequired,
    noDataMessage: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    renderNoData: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,
    isCrossableColor: PropTypes.bool.isRequired,
    selectedBodyCellIndex: PropTypes.number.isRequired,
    selectedBodyCellStyle: PropTypes.object.isRequired,
    selectedBodyRowIndex: PropTypes.number.isRequired,
    selectedBodyRowStyle: PropTypes.object.isRequired,
    sortBy: PropTypes.string.isRequired,
    tableType: PropTypes.string.isRequired,

    // Event Header
    onClickSortBy: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,
    onBlurHeaderRow: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,
    onFocusHeaderRow: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,

    // Event Body
    onBlurBodyRow: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,
    onClickBodyCell: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,
    onClickBodyRow: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,
    onFocusBodyRow: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,

    // Local Freezing Table Props
    isFixed: PropTypes.bool,
    isFreezingColumns: PropTypes.bool,
    isFreezingHeader: PropTypes.bool,
  };

  static defaultProps = {
    isFixed: false,
    isFreezingColumns: false,
    isFreezingHeader: false,
  }

  constructor(props) {
    super(props);
    this.tableRef = null;
    this.unFreezingBodyScrollRef = null;
    this.freezingColumnsRef = null;

    const dividedEntities = this.getEntitiesDividingFreezing(props.entities);
    const freezedCounts = dividedEntities.freezingBody.columns.length;
    const isUnFrozen = props.maxFreezingCounts <= freezedCounts;
    this.state = {
      cellLength: props.entities.header.columns.length || 0,
      dividedEntities,
      freezedCounts,
      isUnFrozen,
      maxBodyCellHeight: TABLE_CELL_SIZE.BODY_HEIGHT,
      maxCellWidth: TABLE_CELL_SIZE.WIDTH,
      maxHeaderCellHeight: TABLE_CELL_SIZE.HEADER_HEIGHT,
      maxHeaderRowsHeight: this.getHeaderRowsHeight(),
      scrollLeft: 0,
      scrollTop: 0,
    };
  }

  componentDidMount() {
    // Init once Table Cell Width
    this.setMaxCellWidthCell();

    window.addEventListener('resize', this.setMaxCellWidthCell);
    if (this.tableRef && this.state.isUnFrozen) {
      this.tableRef.addEventListener(
        'wheel',
        this.handleTableMouseWheel,
      );
    }
    if (this.unFreezingBodyScrollRef) {
      this.unFreezingBodyScrollRef.addEventListener(
        'scroll',
        this.handleOnScrollTableValues,
      );
    }
    if (this.freezingColumnsRef) {
      this.freezingColumnsRef.addEventListener(
        'wheel',
        this.handleOnFreezingColumnMouseWheel,
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setMaxCellWidthCell);
    if (this.tableRef && this.state.isUnFrozen) {
      this.tableRef.removeEventListener(
        'wheel',
        this.handleTableMouseWheel,
      );
    }
    if (this.unFreezingBodyScrollRef) {
      this.unFreezingBodyScrollRef.removeEventListener(
        'scroll',
        this.handleOnScrollTableValues,
      );
    }
    if (this.freezingColumnsRef) {
      this.freezingColumnsRef.removeEventListener(
        'wheel',
        this.handleOnBodyScrollMouseWheel,
      );
    }
  }

  setTableRef = (ref) => {
    this.tableRef = ref;
  }

  setUnFreezingBodyScrollRef = (ref) => {
    this.unFreezingBodyScrollRef = ref;
  }

  setFreezingColumnsRef = (ref) => {
    this.freezingColumnsRef = ref;
  }

  getEntitiesDividingFreezing = (entities) => {
    const headerColumns = entities.header.columns.reduce((acc, column) => {
      if (column.isFreezing) {
        return {
          ...acc,
          freezingHeader: [...acc.freezingHeader, column],
        };
      }
      return {
        ...acc,
        header: [...acc.header, column],
      };
    }, {
      header: [],
      freezingHeader: [],
    });
    const header = {
      ...entities.header,
      columns: headerColumns.header,
    };
    const freezingHeader = {
      ...entities.header,
      columns: headerColumns.freezingHeader,
    };

    const bodyColumns = entities.body.columns.reduce((acc, column) => {
      if (column.isFreezing) {
        return {
          ...acc,
          freezingBody: [...acc.freezingBody, column],
        };
      }
      return {
        ...acc,
        body: [...acc.body, column],
      };
    }, {
      body: [],
      freezingBody: [],
    });
    const body = {
      ...entities.body,
      columns: bodyColumns.body,
    };
    const freezingBody = {
      ...entities.body,
      columns: bodyColumns.freezingBody,
    };

    return {
      header,
      freezingHeader,
      body,
      freezingBody,
    };
  }

  getHeaderRowsHeight() {
    const { entities } = this.props;

    return entities.header.cellHeights.reduce((acc, cellHeight) => acc + (
      cellHeight || TABLE_CELL_SIZE.HEADER_HEIGHT
    ));
  }

  getResponsiveTableHeight(items, maxHeight) {
    const bodyHeight = this.state.maxBodyCellHeight * items.length;
    const headerHeight = this.state.maxHeaderRowsHeight;
    const rowsHeight = headerHeight + bodyHeight;

    const customedMinHeight = maxHeight > rowsHeight
      ? rowsHeight
      : maxHeight;
    const tableHeight = maxHeight > customedMinHeight
      ? customedMinHeight
      : maxHeight;
    return tableHeight;
  }

  setMaxCellWidthCell = () => {
    if (!this.tableRef) {
      return;
    }

    this.setState(({ cellLength }) => {
      const tableWidth = TABLE_CELL_SIZE.WIDTH * cellLength;
      const { clientWidth } = this.tableRef;
      if (tableWidth < clientWidth) {
        return {
          maxCellWidth: Math.floor((clientWidth / cellLength)),
        };
      }
      const maxViewWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      );
      const cellWidth = tableWidth < maxViewWidth
        ? Math.floor((maxViewWidth / cellLength) - 10)
        : TABLE_CELL_SIZE.WIDTH;
      return {
        maxCellWidth: cellWidth,
      };
    });
  }

  handleTableMouseWheel = (event) => {
    const { deltaX, deltaY } = event;
    const isBiggerY = Math.abs(deltaY) > Math.abs(deltaX);
    if (isBiggerY) {
      this.tableRef.scrollTop += deltaY * 5;
    } else {
      this.tableRef.scrollLeft += deltaX * 5;
    }
  }

  handleOnFreezingColumnMouseWheel = (event) => {
    const { deltaX, deltaY } = event;
    const isBiggerY = Math.abs(deltaY) > Math.abs(deltaX);
    if (isBiggerY) {
      this.unFreezingBodyScrollRef.scrollTop += deltaY * 5;
    }
    // Prevent window scroll event by table scroll.
    event.preventDefault();
  }

  handleOnScrollTableValues = (event) => {
    this.setState(() => {
      const { scrollLeft, scrollTop } = this.unFreezingBodyScrollRef;
      return {
        scrollLeft,
        scrollTop,
      };
    });
    // Prevent window scroll event by table scroll.
    event.preventDefault();
  }

  renderNoData() {
    const { renderNoData } = this.props;

    if (typeof renderNoData === 'function') {
      return renderNoData();
    }
    return renderNoData;
  }

  renderFreezingHeaders(entities, freezedCounts) {
    const {
      isFixed,
      // Event Header
      onBlurHeaderRow,
      onFocusHeaderRow,
    } = this.props;

    return (
      <div
        className={styles.TableFixedHeaders}
        style={{
          height: `${this.state.maxHeaderRowsHeight}px`,
          width: `${this.state.maxCellWidth * freezedCounts}px`,
        }}
        onBlur={onBlurHeaderRow}
        onFocus={onFocusHeaderRow}
      >
        <div
          className={styles.InnerScrollContainer}
          style={{
            height: `${this.state.maxHeaderRowsHeight}px`,
            width: `${this.state.maxCellWidth * freezedCounts}px`,
          }}
        >
          <FreezingHeaderRow
            {...this.props}
            isFixed={isFixed}
            isFreezingHeader
            cellLength={this.state.cellLength}
            header={entities.freezingHeader}
            maxHeaderCellHeight={this.state.maxHeaderCellHeight}
            maxCellWidth={this.state.maxCellWidth}
            onResizeCell={this.handleOnMaxCellSize}
            scrollLeft={this.state.scrollLeft}
            scrollTop={this.state.scrollTop}
            tableType={entities.tableType}
          />
        </div>
      </div>
    );
  }

  renderHeaders(entities, freezedCounts) {
    const {
      isFixed,
      // Event Header
      onBlurHeaderRow,
      onFocusHeaderRow,
    } = this.props;

    return (
      <div
        className={styles.TableHeaders}
        style={{
          height: `${this.state.maxHeaderRowsHeight}px`,
        }}
        onBlur={onBlurHeaderRow}
        onFocus={onFocusHeaderRow}
      >
        <div className={styles.InnerScrollContainer}>
          <FreezingHeaderRow
            {...this.props}
            isFixed={isFixed}
            cellLength={this.state.cellLength}
            freezedCounts={freezedCounts}
            header={entities.header}
            maxHeaderCellHeight={this.state.maxHeaderCellHeight}
            maxCellWidth={this.state.maxCellWidth}
            onResizeCell={this.handleOnMaxCellSize}
            scrollLeft={this.state.scrollLeft}
            scrollTop={this.state.scrollTop}
            tableType={entities.tableType}
          />
        </div>
      </div>
    );
  }

  renderFreezingColumns(
    entities,
    tableHeight,
    freezedCounts,
  ) {
    const {
      items,
      // Event Body
      onBlurBodyRow,
      onClickBodyCell,
      onClickBodyRow,
      onFocusBodyRow,
    } = this.props;

    return (
      <div
        ref={this.setFreezingColumnsRef}
        className={styles.TableFixedColumns}
        style={{
          height: `${(tableHeight - (this.state.maxHeaderRowsHeight)) + 4}px`,
          left: '0',
          top: `${this.state.maxHeaderRowsHeight}px`,
          width: `${this.state.maxCellWidth * freezedCounts}px`,
        }}
      >
        <div
          className={styles.InnerScrollContainer}
          style={{
            height: `${this.state.maxBodyCellHeight * items.length}px`,
            width: `${this.state.maxCellWidth * freezedCounts}px`,
          }}
        >
          {items.map((item, rowIndex) => (
            <FreezingBodyRow
              {...this.props}
              key={`${`table-body-${rowIndex}`}`}
              body={entities.freezingBody}
              cellLength={this.state.cellLength}
              isFreezingColumns
              item={item}
              maxBodyCellHeight={this.state.maxBodyCellHeight}
              maxCellWidth={this.state.maxCellWidth}
              onBlurBodyRow={onBlurBodyRow}
              onClickBodyCell={onClickBodyCell}
              onClickBodyRow={onClickBodyRow}
              onFocusBodyRow={onFocusBodyRow}
              onResizeCell={this.handleOnMaxCellSize}
              rowIndex={rowIndex}
              scrollLeft={this.state.scrollLeft}
              scrollTop={this.state.scrollTop}
            />
          ))}
        </div>
      </div>
    );
  }

  render() {
    const {
      items,
      maxHeight,
      onBlurBodyRow,
      onClickBodyCell,
      onClickBodyRow,
      onFocusBodyRow,
    } = this.props;

    const {
      dividedEntities,
      freezedCounts,
      isUnFrozen,
    } = this.state;

    if (items.length === 0) {
      return this.renderNoData();
    }

    const tableHeight = this.getResponsiveTableHeight(items, maxHeight);

    return (
      <div
        className={styles.FreezingTable}
        style={isUnFrozen
          ? {
            overflow: 'scroll',
          }
          : {}
        }
        ref={this.setTableRef}
      >
        <div
          className={isUnFrozen
            ? styles.UnFrozenTable
            : styles.FreezingTableBody
          }
          style={{
            width: (isUnFrozen &&
              this.state.maxCellWidth * this.state.cellLength
            ),
            height: `${tableHeight + 4}px`,
          }}
        >
          {/* UnFreezingBodyRows */}
          <div
            className={styles.TableScrollBody}
            style={{
              top: `${this.state.maxHeaderRowsHeight}px`,
              height: `calc(100% - ${this.state.maxHeaderRowsHeight}px)`,
              left: `${this.state.maxCellWidth * freezedCounts}px`,
              width: `calc(100% - ${this.state.maxCellWidth * freezedCounts}px)`,
            }}
            ref={this.setUnFreezingBodyScrollRef}
          >
            {items.map((item, rowIndex) => (
              <FreezingBodyRow
                {...this.props}
                key={`${`table-body-${rowIndex}`}`}
                body={dividedEntities.body}
                cellLength={this.state.cellLength}
                freezedCounts={freezedCounts}
                item={item}
                maxBodyCellHeight={this.state.maxBodyCellHeight}
                maxHeaderCellHeight={this.state.maxHeaderCellHeight}
                maxCellWidth={this.state.maxCellWidth}
                onBlurBodyRow={onBlurBodyRow}
                onClickBodyCell={onClickBodyCell}
                onClickBodyRow={onClickBodyRow}
                onFocusBodyRow={onFocusBodyRow}
                onResizeCell={this.handleOnMaxCellSize}
                rowIndex={rowIndex}
                scrollLeft={this.state.scrollLeft}
                scrollTop={this.state.scrollTop}
              />
              ))}
          </div>
          {/* Freezing FixedHeaders */}
          {this.renderFreezingHeaders(
            dividedEntities,
            freezedCounts,
          )}
          {/* Freezing Header */}
          {this.renderHeaders(
            dividedEntities,
            freezedCounts,
          )}
          {/* Freezing BodyColumn */}
          {this.renderFreezingColumns(
            dividedEntities,
            tableHeight,
            freezedCounts,
          )}
          <div id='selectedItems' />
        </div>
      </div>
    );
  }
}

export default FreezingTable;
