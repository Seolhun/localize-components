import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { HeaderRow } from '../row/header';
import { BodyRow } from '../row/body';

class DivTable extends Component {
  static propTypes = {
    // isRequired
    items: PropTypes.array.isRequired,
    entities: PropTypes.shape({
      header: PropTypes.shape({
        align: PropTypes.string,
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
          cellHeights: PropTypes.arrayOf(PropTypes.number),
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

    // isNotRequired, But, must have values because of already checking Table (HoC)
    isCrossableColor: PropTypes.bool.isRequired,
    onSetCrossableColorStyle: PropTypes.func.isRequired,
    noDataMessage: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    renderNoData: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,
    selectedBodyRowIndex: PropTypes.number.isRequired,
    selectedBodyCellIndex: PropTypes.number.isRequired,
    selectedBodyRowStyle: PropTypes.object.isRequired,
    selectedBodyCellStyle: PropTypes.object.isRequired,
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
  };

  renderNoData() {
    const { renderNoData } = this.props;

    if (typeof renderNoData === 'function') {
      return renderNoData();
    }
    return renderNoData;
  }

  render() {
    const { entities, items } = this.props;

    if (items.length === 0) {
      return this.renderNoData();
    }

    return (
      <>
        <HeaderRow
          {...this.props}
          header={entities.header}
        />
        {items.map((item, rowIndex) => (
          <BodyRow
            {...this.props}
            key={`${`table-body-${rowIndex}`}`}
            body={entities.body}
            item={item}
            rowIndex={rowIndex}
          />
        ))}
      </>
    );
  }
}

export default DivTable;
