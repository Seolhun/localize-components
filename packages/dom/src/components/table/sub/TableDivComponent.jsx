import React, { PureComponent, Fragment } from 'react';

import PropTypes from 'prop-types';

import HeaderRow from '../header';
import BodyRow from '../body';

import styles from './TableDivComponent.scss';

class TableDivComponent extends PureComponent {
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

    // isNotRequired, but, already checking Table (HoC)
    onClickSort: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    onClickRow: PropTypes.func.isRequired,
    onFocusRow: PropTypes.func.isRequired,
    onBlurRow: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
  };

  renderHeaderRow() {
    const { entities } = this.props;
    return (
      <div className={styles.divTableHeaderRow}>
        <HeaderRow
          {...this.props}
          header={entities.header}
        />
      </div>
    );
  }

  renderBody() {
    const { entities, items } = this.props;
    return items.map((item, idx) => (
      <div
        className={styles.divTableBodyRow}
        key={`${`table-body-${idx}`}`}
      >
        <BodyRow
          {...this.props}
          index={idx}
          item={item}
          body={entities.body}
        />
      </div>
    ));
  }

  render() {
    return (
      <Fragment>
        {
          this.renderHeaderRow()
        }
        {
          this.renderBody()
        }
      </Fragment>
    );
  }
}

export default TableDivComponent;
