import React, { PureComponent } from 'react';

import { range as _range, isNumber } from 'lodash';

import PropTypes from 'prop-types';

import styles from './ButtonPagination.scss';

class Pagination extends PureComponent {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,

    limit: PropTypes.number,
    range: PropTypes.number,

    activeButton: PropTypes.string,
    basicButton: PropTypes.string,
  };

  static defaultProps = {
    limit: 10,
    range: 5,

    activeButton: 'btn-main',
    basicButton: 'btn-black',
  };

  pagination(pageIndex, totalCount, range) {
    const { limit } = this.props;
    const current = pageIndex;
    const totalPage = Math.ceil(totalCount / limit);
    const criteriaNumber = Math.floor(range / 2);

    const rangePage = _range(1, totalPage + 1);
    const rangePageWithDots = [];

    const left = current - criteriaNumber < 1 ? 1 : current - criteriaNumber;
    const right =
      current + criteriaNumber > totalPage
        ? totalPage
        : current + criteriaNumber;

    let condition = null;
    rangePage.forEach((i) => {
      if ((i >= left && i <= right) || i === 1 || i === totalPage) {
        if (i - condition !== 1) {
          rangePageWithDots.push('....');
        }
        rangePageWithDots.push(i);
        condition = i;
      }
    });
    return rangePageWithDots;
  }

  renderPageBtn() {
    const {
      currentPage,
      totalCount,
      range,
      onClick,
      activeButton,
      basicButton,
    } = this.props;
    const pages = this.pagination(currentPage, totalCount, range);
    return pages.map((pageNum) => (
      <button
        key={pageNum}
        type="button"
        className={`btn ${
          currentPage === pageNum ? basicButton : activeButton
        } ${styles.margin}`}
        onClick={isNumber(pageNum) ? () => onClick(pageNum) : () => {}}
      >
        {pageNum}
      </button>
    ));
  }

  render() {
    return (
      <div>
        <div>{this.renderPageBtn()}</div>
      </div>
    );
  }
}

export default Pagination;
