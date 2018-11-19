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

import { getFlexAlign } from '../../utils/TableHelperUtils';
import { getNumberWithCommas } from '../../utils/PrintDataUtils';

import bodyStyles from './BodyCell.scss';
import styles from './FreezingBodyCell.scss';

const EMPTY_CELL_VALUE = '-';

class FreezingBodyCell extends Component {
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

    // isNotRequired, But, must have values because of already checking Table (HoC)
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

    // isNotRequired
    align: PropTypes.string,
    cellClassName: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    align: TABLE_CELL_ALIGN.RIGHT,
    cellClassName: '',
    style: {},
  };

  constructor(props) {
    super(props);
    this.cellRef = React.createRef();
  }

  handleOnClick = (event) => {
    this.props.onClickBodyCell(event);
    this.props.onClickBodyRow(event);
  }

  renderCell = (renderBody, item, name) => {
    // Select Render Type
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
    // Select data Type
    const renderCell = getNumberWithCommas(this.renderCell(
      renderBody,
      item,
      name,
    ));

    let DEFAULT_CELL_STYLE = {};
    if (cellIndex === 0) {
      DEFAULT_CELL_STYLE = {
        ...DEFAULT_BODY_ROW_STYLE,
        ...DEFAULT_CELL_BORDER_STYLE,
        borderLeft: `1px solid ${BORDER_COLOR}`,
      };
    } else {
      DEFAULT_CELL_STYLE = {
        ...DEFAULT_BODY_ROW_STYLE,
        ...DEFAULT_CELL_BORDER_STYLE,
      };
    }

    return (
      <div
        role='presentation'
        ref={this.cellRef}
        className={classnames(
          cellClassName,
          bodyStyles.BodyCell,
          styles.FreezingBodyCell,
          isSortedCellStyle,
        )}
        onBlur={onBlurBodyRow}
        onClick={this.handleOnClick}
        onFocus={onFocusBodyRow}
        style={{
          ...DEFAULT_CELL_STYLE,
          ...style,
          cursor: onClickBodyRow || onClickBodyCell ? 'pointer' : '',
          justifyContent: getFlexAlign(align),
        }}
      >
        {renderCell}
      </div>
    );
  }
}

export default FreezingBodyCell;
