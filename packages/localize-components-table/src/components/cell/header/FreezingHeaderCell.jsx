import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  DEFAULT_CELL_BORDER_STYLE,
  DEFAULT_HEADER_ROW_STYLE,
  BORDER_COLOR,
} from '../../constants';
import commonStyles from '../Cell.scss';
import headerStyles from './HeaderCell.scss';
import freezingStyles from './FreezingHeaderCell.scss';

import { getFlexAlign } from '../../utils/TableHelperUtils';

const EMPTY_CELL_VALUE = '-';

class FreezingHeaderCell extends Component {
  static propTypes = {
    cellIndex: PropTypes.number.isRequired,
    rowIndex: PropTypes.number.isRequired,
    column: PropTypes.shape({
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

    align: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.cellRef = null;
  }

  setCellRef = (cellRef) => {
    this.cellRef = cellRef;
  }

  handleOnClickHeaderRow = (event, name) => {
    this.props.onClickSortBy(name);
    event.stopPropagation();
  }

  renderSortByIcon = orderBy => (
    <span>
      <i className='material-icons accent1 md-18'>
        {`arrow_drop_${orderBy.toLowerCase() === 'desc' ? 'down' : 'up'}`}
      </i>
    </span>
  );

  renderCell = (renderHeader, rowIndex) => {
    try {
      const renderCell = renderHeader[rowIndex];
      if (typeof renderBodyItem === 'function') {
        return `${renderCell()}` || EMPTY_CELL_VALUE;
      }
      return `${renderCell}` || EMPTY_CELL_VALUE;
    } catch (error) {
      return EMPTY_CELL_VALUE;
    }
  }

  render() {
    const {
      align,
      cellIndex,
      column,
      onBlurHeaderRow,
      onFocusHeaderRow,
      orderBy,
      rowIndex,
      sortBy,
      style,
    } = this.props;
    const {
      isSortable,
      name,
      renderHeader,
    } = column;

    const isSorted = isSortable && name === sortBy;
    const isSortedCellStyle = isSorted ? headerStyles.active : '';

    let DEFAULT_CELL_STYLE = {
      ...DEFAULT_HEADER_ROW_STYLE,
      ...DEFAULT_CELL_BORDER_STYLE,
    };

    if (cellIndex === 0) {
      DEFAULT_CELL_STYLE = {
        ...DEFAULT_CELL_STYLE,
        borderLeft: `1px solid ${BORDER_COLOR}`,
      };
    }

    return (
      <div
        ref={this.setCellRef}
        role='presentation'
        className={classnames(
          commonStyles.Cell,
          headerStyles.HeaderCell,
          freezingStyles.FreezingCell,
          isSortedCellStyle,
        )}

        onClick={event => this.handleOnClickHeaderRow(event, name)}
        onBlur={onBlurHeaderRow}
        onFocus={onFocusHeaderRow}
        style={{
          ...DEFAULT_CELL_STYLE,
          ...style,
          cursor: isSortable ? 'pointer' : '',
          justifyContent: getFlexAlign(align),
        }}
      >
        {this.renderCell(renderHeader, rowIndex)}
        {isSorted && !rowIndex
          ? this.renderSortByIcon(orderBy)
          : null
        }
      </div>
    );
  }
}

export default FreezingHeaderCell;
