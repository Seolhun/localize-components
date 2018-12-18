import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';

import { FreezingHeaderCell } from '../../cell';
import { TABLE_CELL_ALIGN } from '../../constants';

class FreezingHeaderRow extends Component {
  static propTypes = {
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

    // isNotRequired, But, must have values because of already checking Table (HoC)
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

    isFixed: PropTypes.bool.isRequired,
    maxHeaderCellHeight: PropTypes.number.isRequired,
    maxCellWidth: PropTypes.number.isRequired,
    orderBy: PropTypes.string.isRequired,
    scrollLeft: PropTypes.number.isRequired,
    sortBy: PropTypes.string.isRequired,

    // isNotRequired,
    cellStyle: PropTypes.object,
    freezedCounts: PropTypes.number,
    isFreezingHeader: PropTypes.bool,
  };

  static defaultProps = {
    cellStyle: {},
    freezedCounts: 0,
    isFreezingHeader: false,
  }

  getHeaderCellLeft(idx) {
    const {
      maxCellWidth,
      isFixed,
      isFreezingHeader,
      scrollLeft,
      freezedCounts,
    } = this.props;

    if (isFixed && isFreezingHeader) {
      return `${maxCellWidth * idx}px`;
    }
    if (!isFreezingHeader) {
      return `${(maxCellWidth * (idx + freezedCounts)) - scrollLeft}px`;
    }
    return `${maxCellWidth * idx}px`;
  }

  renderHeaderCellInRow() {
    const {
      cellStyle,
      header,
      isFreezingHeader,
      maxHeaderCellHeight,
      maxCellWidth,
      onClickSortBy,
      onBlurHeaderRow,
      onFocusHeaderRow,
      orderBy,
      sortBy,
    } = this.props;

    const headerColumsLength = header.columns.length;

    const renderHeaderIsArray = header.columns
      .every(column => Array.isArray(column.renderHeader));
    // Default row 0
    let renderHeaderRows = [0];
    if (renderHeaderIsArray && headerColumsLength !== 0) {
      renderHeaderRows = range(header.columns[0].renderHeader.length);
    }

    return renderHeaderRows.map(rowIndex => (
      header.columns.map((column, cellIndex) => (
        <FreezingHeaderCell
          key={`${column.name + cellIndex}`}
          align={!rowIndex ? header.align : TABLE_CELL_ALIGN.RIGHT}
          cellIndex={isFreezingHeader ? cellIndex : cellIndex + 1}
          column={column}
          onClickSortBy={onClickSortBy}
          onBlurHeaderRow={() => onBlurHeaderRow(rowIndex)}
          onFocusHeaderRow={() => onFocusHeaderRow(rowIndex)}
          orderBy={orderBy}
          rowIndex={rowIndex}
          sortBy={sortBy}
          style={{
            ...cellStyle,
            height: `${header.cellHeights[rowIndex] || maxHeaderCellHeight}px`,
            left: !isFreezingHeader
              ? this.getHeaderCellLeft(cellIndex)
              : `${maxCellWidth * cellIndex}px`,
            position: 'absolute',
            top: `${(header.cellHeights[rowIndex + 1] || maxHeaderCellHeight) * rowIndex}px`,
            width: `${maxCellWidth}px`,
            zIndex: column.isFreezing ? 10 : 5,
          }}
        />
      ))
    ));
  }

  render() {
    return this.renderHeaderCellInRow();
  }
}

export default FreezingHeaderRow;
