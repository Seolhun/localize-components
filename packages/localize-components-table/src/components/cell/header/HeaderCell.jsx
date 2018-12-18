import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  DEFAULT_CELL_BORDER_STYLE,
  DEFAULT_HEADER_ROW_STYLE,
  TABLE_CELL_ALIGN,
  BORDER_COLOR,
} from '../../constants';

import headerStyles from './HeaderCell.css';
import styles from '../Cell.css';

const EMPTY_CELL_VALUE = '-';

class HeaderCell extends Component {
  static propTypes = {
    cellIndex: PropTypes.number.isRequired,
    column: PropTypes.shape({
      align: PropTypes.string,
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
    orderBy: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,

    // isNotRequired
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  handleClickSort = (isSortable, name) => {
    const { onClickSortBy } = this.props;

    if (isSortable && onClickSortBy) {
      onClickSortBy(name);
    }
  }

  renderSortByIcon = orderBy => (
    <span style={{ justifyContent: 'flex-end' }}>
      <i className='material-icons accent1 md-18'>
        {`arrow_drop_${orderBy.toLowerCase() === 'desc' ? 'down' : 'up'}`}
      </i>
    </span>
  );

  renderCell = (renderHeader) => {
    try {
      if (typeof renderHeader === 'function') {
        return `${renderHeader()}` || EMPTY_CELL_VALUE;
      }
      return `${renderHeader}` || EMPTY_CELL_VALUE;
    } catch (error) {
      return EMPTY_CELL_VALUE;
    }
  }

  render() {
    const {
      cellIndex,
      className,
      column,
      onBlurHeaderRow,
      onFocusHeaderRow,
      orderBy,
      sortBy,
    } = this.props;
    const {
      align = TABLE_CELL_ALIGN.CENTER,
      isSortable,
      name,
      renderHeader,
    } = column;

    const isSorted = name === sortBy;
    const isSortedCellStyle = isSorted ? headerStyles.active : '';

    let cellStyle = {
      ...DEFAULT_HEADER_ROW_STYLE,
      ...DEFAULT_CELL_BORDER_STYLE,
    };
    if (cellIndex === 0) {
      cellStyle = {
        ...cellStyle,
        borderLeft: `1px solid ${BORDER_COLOR}`,
      };
    }

    return (
      <div
        role='presentation'
        className={classnames(
          className,
          styles.Cell,
          headerStyles.HeaderCell,
          isSortedCellStyle,
        )}
        onClick={() => this.handleClickSort(isSortable, name)}
        onBlur={onBlurHeaderRow}
        onFocus={onFocusHeaderRow}
        style={{
          ...cellStyle,
          cursor: `${isSortable ? 'pointer' : ''}`,
          textAlign: align,
        }}
      >
        {this.renderCell(renderHeader)}
        {isSorted ? this.renderSortByIcon(orderBy) : null}
      </div>
    );
  }
}

export default HeaderCell;
