import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';

import {
  DEFAULT_CELL_BORDER_STYLE,
  DEFAULT_BODY_ROW_STYLE,
  TABLE_CELL_ALIGN,
  BORDER_COLOR,
} from '../../constants';

import { getNumberWithCommas } from '../../utils/PrintDataUtils';

import bodyStyles from './BodyCell.css';
import styles from '../Cell.css';

const EMPTY_CELL_VALUE = '-';

class BodyCell extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    cellIndex: PropTypes.number.isRequired,
    column: PropTypes.shape({
      name: PropTypes.string.isRequired,
      renderBody: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
      isFreezing: PropTypes.bool,
    }).isRequired,
    sortBy: PropTypes.string.isRequired,

    // isNotRequired, But, must have values because of already checking Table (HoC)
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

    align: PropTypes.string,
    cellClassName: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    align: TABLE_CELL_ALIGN.RIGHT,
    cellClassName: '',
    style: {},
  };

  handleOnClickBody = (event) => {
    this.props.onClickBodyCell();
    this.props.onClickBodyRow();
    event.stopPropagation();
  }

  renderCell = (renderBody, item, name) => {
    try {
      switch (typeof renderBody) {
        case 'function':
          return !isNil(renderBody(item))
            ? `${renderBody(item)}`
            : EMPTY_CELL_VALUE;
        case 'undefined':
          return !isNil(item[name])
            ? `${item[name]}`
            : EMPTY_CELL_VALUE;
        default:
          return renderBody || EMPTY_CELL_VALUE;
      }
    } catch (error) {
      return EMPTY_CELL_VALUE;
    }
  }

  render() {
    const {
      align,
      cellClassName,
      cellIndex,
      column,
      item,
      onBlurBodyRow,
      onClickBodyCell,
      onClickBodyRow,
      onFocusBodyRow,
      sortBy,
      style,
    } = this.props;
    const { name, renderBody } = column;

    const isSortedCellStyle = name === sortBy ? bodyStyles.active : '';
    // Select data Type
    const renderCell = getNumberWithCommas(this.renderCell(
      renderBody,
      item,
      name,
    ));

    let localCellStyle = {};
    if (cellIndex === 0) {
      localCellStyle = {
        ...DEFAULT_BODY_ROW_STYLE,
        ...DEFAULT_CELL_BORDER_STYLE,
        borderLeft: `1px solid ${BORDER_COLOR}`,
      };
    } else {
      localCellStyle = {
        ...DEFAULT_BODY_ROW_STYLE,
        ...DEFAULT_CELL_BORDER_STYLE,
      };
    }

    return (
      <div
        role='presentation'
        className={classnames(
          cellClassName,
          styles.Cell,
          bodyStyles.BodyCell,
          isSortedCellStyle,
        )}
        style={{
          ...localCellStyle,
          ...style,
          cursor: onClickBodyRow || onClickBodyCell ? 'pointer' : '',
          textAlign: align,
        }}
        onClick={this.handleOnClickBody}
        onBlur={onBlurBodyRow}
        onFocus={onFocusBodyRow}
      >
        {renderCell}
      </div>
    );
  }
}

export default BodyCell;
