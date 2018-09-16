import React from 'react';
import PropTypes from 'prop-types';

import { BodyCell } from '../cell';

const BasicBodyRow = ({
  item, body, sortBy,
}) => body.columns.map((column, idx) => (
  <BodyCell
    key={`${column.name + idx}`}
    item={item}
    sortBy={sortBy}
    name={column.name}
    renderCell={column.renderCell}
  />
));

BasicBodyRow.propTypes = {
  // isRequired
  /* eslint-disable */
  item: PropTypes.object.isRequired,
  /* eslint-enable */
  body: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        renderCell: PropTypes.func.isRequired,
      }).isRequired,
    ),
  }).isRequired,

  sortBy: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default BasicBodyRow;
