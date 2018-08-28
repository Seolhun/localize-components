import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { TableDivComponent } from './sub';

import styles from './Table.scss';

export const TABLE_TYPE = {
  TABLE: 'table',
  DIV: 'div',
};

class Table extends PureComponent {
  static propTypes = {
    // isRequired
    items: PropTypes.array.isRequired,
    entities: PropTypes.shape({
      header: PropTypes.shape({
        type: PropTypes.string.isRequired,
        columns: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            sortable: PropTypes.bool.isRequired,
            renderCell: PropTypes.func.isRequired,
          }).isRequired,
        ),
      }).isRequired,
      body: PropTypes.shape({
        type: PropTypes.string.isRequired,
        columns: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            renderCell: PropTypes.func.isRequired,
          }).isRequired,
        ),
      }).isRequired,
    }).isRequired,

    // isNotRequired
    onClickSort: PropTypes.func,
    sortBy: PropTypes.string,
    orderBy: PropTypes.string,
    onClickRow: PropTypes.func,
    onFocusRow: PropTypes.func,
    onBlurRow: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    selectedIndex: PropTypes.number,
  };

  static defaultProps = {
    onClickSort: () => null,
    sortBy: '',
    orderBy: '',
    onClickRow: () => null,
    onFocusRow: () => null,
    onBlurRow: () => null,
    type: TABLE_TYPE.DIV,
    className: '',
    selectedIndex: -1,
  };

  renderTableByType() {
    const { type } = this.props;
    switch (type) {
      case TABLE_TYPE.TABLE:
        return (
          <TableDivComponent {...this.props} />
        );
      default:
        return (
          <TableDivComponent {...this.props} />
        );
    }
  }

  render() {
    return (
      <div className={styles.table}>
        {this.renderTableByType()}
      </div>
    );
  }
}

export default Table;
