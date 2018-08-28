import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BasicBodyRow from './BasicBodyRow';

import styles from './BodyRow.scss';

export const ROW_TYPE = {
  BASIC: 'basic',
};

class BodyRow extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    /* eslint-disable */
    item: PropTypes.object.isRequired,
    /* eslint-enable */
    body: PropTypes.shape({
      type: PropTypes.string.isRequired,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          renderCell: PropTypes.func.isRequired,
        }).isRequired
      ),
    }).isRequired,
    sortBy: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    onClickRow: PropTypes.func.isRequired,
    onFocusRow: PropTypes.func.isRequired,
    onBlurRow: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
  };

  handleOnClickRowWithItem = (event, item) => {
    event.stopPropagation();
    const { onClickRow } = this.props;
    // Will be Fixed
    if (event.target.parentNode.nodeName !== 'A') {
      onClickRow(item);
    }
  };

  renderBodyRowByType() {
    const { body } = this.props;
    switch (body.type) {
      case ROW_TYPE.BASIC:
        return <BasicBodyRow {...this.props} />;
      default:
        return <BasicBodyRow {...this.props} />;
    }
  }

  render() {
    const { index, onFocusRow, onBlurRow, item } = this.props;
    return (
      <div
        role="presentation"
        className={`${styles.tableBodyRow} ${
          index % 2 === 0 ? styles.evenBodyRow : styles.oddBodyRow
        }`}
        onClick={(event) => this.handleOnClickRowWithItem(event, item)}
        onFocus={onFocusRow}
        onBlur={onBlurRow}
      >
        {this.renderBodyRowByType()}
      </div>
    );
  }
}

export default BodyRow;
