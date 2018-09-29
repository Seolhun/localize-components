import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Cell.scss';

import Icon from '../../icon';

class HeaderCell extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    sortable: PropTypes.bool.isRequired,
    renderCell: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    onClickSort: PropTypes.func.isRequired,
  };

  renderSortIcon({ sortBy, name, sortable }) {
    const {
      orderBy,
    } = this.props;
    if (!sortable) {
      return null;
    }
    if (name === sortBy) {
      return (
        <Icon
          src={`fas fa-sort-numeric-${orderBy !== 'DESC' ? 'down' : 'up'}`}
          alt="plus logo"
          align="center"
          position="right"
          color="#b0b0b0"
        />
      );
    }
    return null;
  }

  render() {
    const {
      name, renderCell, sortBy, sortable, onClickSort, orderBy,
    } = this.props;
    const isSortedCellStyle = name === sortBy ? styles.active : '';
    return (
      <div
        role="presentation"
        className={`${styles.cell} ${isSortedCellStyle}`}
        onClick={sortable ? () => onClickSort({ sortBy: name, orderBy }) : null}
        style={{
          cursor: `${sortable ? 'pointer' : ''}`,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
          }}
        >
          {renderCell()}
          {this.renderSortIcon({ sortBy, name, sortable })}
        </div>
      </div>
    );
  }
}

export default HeaderCell;
