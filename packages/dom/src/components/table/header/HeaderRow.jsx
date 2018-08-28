import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BasicHeaderRow from './BasicHeaderRow';

import styles from './HeaderRow.scss';

const HEADER_TYPE = {
  BASIC: 'basic',
};
class HeaderRow extends PureComponent {
  static propTypes = {
    // isRequired
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
    onClickSort: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
  };

  renderHeaderRowByType() {
    const { header } = this.props;
    switch (header.type) {
      case HEADER_TYPE.BASIC:
        return (
          <BasicHeaderRow
            {...this.props}
          />
        );
      default:
        return (
          <BasicHeaderRow
            {...this.props}
          />
        );
    }
  }

  render() {
    return (
      <div
        role="presentation"
        className={styles.headerRow}
      >
        {this.renderHeaderRowByType()}
      </div>
    );
  }
}

export default HeaderRow;
