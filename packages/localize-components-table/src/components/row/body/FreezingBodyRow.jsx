import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FreezingBodyCell } from '../../cell';
import { TABLE_CELL_SIZE } from '../../constants';

class FreezingBodyRow extends Component {
  static propTypes = {
    // isRequired
    rowIndex: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
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

    // isNotRequired, But, must have values because of already checking Table (HoC)
    isCrossableColor: PropTypes.bool.isRequired,
    onSetCrossableColorStyle: PropTypes.func.isRequired,
    selectedBodyRowIndex: PropTypes.number.isRequired,
    selectedBodyCellIndex: PropTypes.number.isRequired,
    selectedBodyRowStyle: PropTypes.object.isRequired,
    selectedBodyCellStyle: PropTypes.object.isRequired,
    sortBy: PropTypes.string.isRequired,

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

    // IsNotRequired
    freezedCounts: PropTypes.number,
    isFreezingColumns: PropTypes.bool,
    maxBodyCellHeight: PropTypes.number,
    maxCellWidth: PropTypes.number,
    scrollTop: PropTypes.number,
  };

  static defaultProps = {
    freezedCounts: 0,
    isFreezingColumns: false,
    maxBodyCellHeight: TABLE_CELL_SIZE.BODY_HEIGHT,
    maxCellWidth: TABLE_CELL_SIZE.WIDTH,
    scrollTop: 0,
  }

  constructor(props) {
    super(props);
    this.cellContainerRef = React.createRef();
  }

  getSelectedBodyCellColorStyle = (cellIndex) => {
    const {
      isCrossableColor,
      onSetCrossableColorStyle,
      rowIndex,
      selectedBodyCellIndex,
      selectedBodyCellStyle,
      selectedBodyRowIndex,
      selectedBodyRowStyle,
      isFreezingColumns,
      freezedCounts,
    } = this.props;

    const customBodyCellIndex = isFreezingColumns
      ? cellIndex
      : cellIndex + freezedCounts;

    if (
      customBodyCellIndex === selectedBodyCellIndex &&
      rowIndex === selectedBodyRowIndex
    ) {
      return selectedBodyCellStyle;
    }
    if (rowIndex === selectedBodyRowIndex) {
      return selectedBodyRowStyle;
    }
    if (isCrossableColor) {
      return onSetCrossableColorStyle(rowIndex);
    }
    return {};
  }

  getHeightByScrollTop(idx) {
    const {
      maxBodyCellHeight,
      isFreezingColumns,
      scrollTop,
    } = this.props;

    if (isFreezingColumns) {
      return `${Math.round((maxBodyCellHeight * (idx)) - scrollTop)}px`;
    }
    return `${maxBodyCellHeight * idx}px`;
  }

  handleOnClickBodyRow = (event, rowIndex) => {
    const {
      selectedBodyRowIndex,
    } = this.props;

    if (rowIndex === selectedBodyRowIndex) {
      this.props.onClickBodyRow(event, -1);
      return;
    }
    this.props.onClickBodyRow(event, rowIndex);
  }

  handleOnClickBodyCell = (event, rowIndex, cellIndex) => {
    const {
      freezedCounts,
      isFreezingColumns,
      selectedBodyCellIndex,
      selectedBodyRowIndex,
    } = this.props;

    const selectedCellIndex = isFreezingColumns
      ? cellIndex
      : cellIndex + freezedCounts;

    if (rowIndex === selectedBodyRowIndex) {
      if (selectedCellIndex === selectedBodyCellIndex) {
        this.props.onClickBodyCell(event, -1, -1);
        return;
      }
      this.props.onClickBodyCell(event, rowIndex, selectedCellIndex);
      return;
    }
    this.props.onClickBodyCell(event, rowIndex, selectedCellIndex);
  }

  render() {
    const {
      body,
      isFreezingColumns,
      item,
      maxBodyCellHeight,
      maxCellWidth,
      onBlurBodyRow,
      onFocusBodyRow,
      rowIndex,
      sortBy,
    } = this.props;

    return body.columns.map((column, cellIndex) => (
      <FreezingBodyCell
        {...this.props}
        key={`${column.name + cellIndex}`}
        ref={this.cellContainerRef}
        align={body.align}
        cellIndex={isFreezingColumns ? cellIndex : cellIndex + 1}
        column={column}
        item={item}
        name={column.name}
        onBlurBodyRow={event => onBlurBodyRow(event, rowIndex)}
        onClickBodyCell={
          event => this.handleOnClickBodyCell(event, rowIndex, cellIndex)
        }
        onClickBodyRow={event => this.handleOnClickBodyRow(event, rowIndex)}
        onFocusBodyRow={event => onFocusBodyRow(event, rowIndex)}
        sortBy={sortBy}
        style={{
          height: '100%',
          position: 'absolute',
          left: `${maxCellWidth * cellIndex}px`,
          maxHeight: `${maxBodyCellHeight}px`,
          maxWidth: `${maxCellWidth}px`,
          top: this.getHeightByScrollTop(rowIndex),
          width: `${maxCellWidth}px`,
          zIndex: isFreezingColumns ? 6 : 5,
          ...this.getSelectedBodyCellColorStyle(cellIndex),
        }}
      />
    ));
  }
}


export default FreezingBodyRow;
