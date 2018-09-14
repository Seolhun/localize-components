import React from 'react';
import PropTypes from 'prop-types';

import { HeaderCell } from '../cell';

const BasicHeaderRow = ({
  header, onClickSort, sortBy, orderBy,
}) => header.columns.map((column, idx) => (
  <HeaderCell
    key={`${column.name + idx}`}
    onClickSort={onClickSort}
    sortBy={sortBy}
    orderBy={orderBy}
    name={column.name}
    sortable={column.sortable}
    renderCell={column.renderCell}
  />
));

BasicHeaderRow.propTypes = {
  // isRequired
  header: PropTypes.shape({
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

export default BasicHeaderRow;
