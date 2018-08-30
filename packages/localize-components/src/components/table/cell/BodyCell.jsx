import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cell.scss';

const BodyCell = ({
  item,
  name,
  renderCell,
  sortBy,
}) => {
  const isSortedCellStyle = name === sortBy ? styles.active : '';
  return (
    <div
      className={`${styles.cell} ${isSortedCellStyle}`}
    >
      {renderCell(item)}
    </div>
  );
};

BodyCell.propTypes = {
  /* eslint-disable */
  item: PropTypes.object.isRequired,
  /* eslint-enable */
  name: PropTypes.string.isRequired,
  renderCell: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default BodyCell;
