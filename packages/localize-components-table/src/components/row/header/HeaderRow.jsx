import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';

import { HeaderCell } from '../../cell';
import styles from './HeaderRow.scss';

const HeaderRow = ({
  header,
  isFixed,
  onBlurHeaderRow,
  onClickSortBy,
  onFocusHeaderRow,
  orderBy,
  rowStyle,
  sortBy,
}) => {
  const allRenderHeaderIsArray = header.columns
    .every(column => Array.isArray(column.renderHeader));
  let renderHeaderRows = [0];
  if (allRenderHeaderIsArray) {
    renderHeaderRows = range(header.columns[0].renderHeader.length);
  }

  return (
    <div
      className={styles.TableHeaerRows}
      style={{
      ...rowStyle,
    }}
    >
      {renderHeaderRows.map(rowIndex => (
        header.columns.map((column, cellIndex) => (
          <HeaderCell
            key={`${column.name + cellIndex}`}
            align={header.align}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            isFixed={isFixed}
            column={column}
            onClickSortBy={onClickSortBy}
            onBlurHeaderRow={() => onBlurHeaderRow(rowIndex)}
            onFocusHeaderRow={() => onFocusHeaderRow(rowIndex)}
            orderBy={orderBy}
            sortBy={sortBy}
          />
      ))))}
    </div>
  );
};

HeaderRow.propTypes = {
  // isRequired
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
    }).isRequired),
  }).isRequired,

  // isNotRequired, But, must have values because of already checking Table (HoC)
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
  orderBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,

  // isNotRequired
  isFixed: PropTypes.bool,
  rowStyle: PropTypes.object,
};

HeaderRow.defaultProps = {
  isFixed: false,
  rowStyle: {},
};

export default HeaderRow;
