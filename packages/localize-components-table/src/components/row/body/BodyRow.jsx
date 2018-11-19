import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BodyCell } from '../../cell';
import styles from './BodyRow.scss';

class BodyRow extends Component {
  static propTypes = {
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

    // isNotRequired
    rowStyle: PropTypes.object,
  };

  static defaultProps = {
    rowStyle: {},
  }

  constructor(props) {
    super(props);
    this.bodyRowRef = null;
    this.bodyRowRef = React.createRef();
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
    } = this.props;

    if (
      cellIndex === selectedBodyCellIndex &&
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
      selectedBodyCellIndex,
      selectedBodyRowIndex,
    } = this.props;

    if (rowIndex === selectedBodyRowIndex) {
      if (cellIndex === selectedBodyCellIndex) {
        this.props.onClickBodyCell(event, -1, -1);
        return;
      }
      this.props.onClickBodyCell(event, rowIndex, cellIndex);
      return;
    }
    this.props.onClickBodyCell(event, rowIndex, cellIndex);
  }

  render() {
    const {
      body,
      rowIndex,
      item,
      onBlurBodyRow,
      onFocusBodyRow,
      rowStyle,
      sortBy,
    } = this.props;

    return (
      <div
        className={styles.TableBodyRows}
        ref={this.bodyRowRef}
        style={{
          ...rowStyle,
        }}
      >
        {body.columns.map((column, cellIndex) => (
          <BodyCell
            {...this.props}
            key={`${column.name + cellIndex}`}
            align={body.align}
            cellIndex={cellIndex}
            column={column}
            item={item}
            onBlurBodyRow={event => onBlurBodyRow(event, rowIndex)}
            onClickBodyCell={event => this.handleOnClickBodyCell(event, rowIndex, cellIndex)}
            onClickBodyRow={event => this.handleOnClickBodyRow(event, rowIndex)}
            onFocusBodyRow={event => onFocusBodyRow(event, rowIndex)}
            sortBy={sortBy}
            style={{
              ...this.getSelectedBodyCellColorStyle(cellIndex),
            }}
          />
        ))}
      </div>
    );
  }
}

export default BodyRow;
