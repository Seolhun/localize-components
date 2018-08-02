import * as React from 'react';

import * as _ from 'lodash';

import './Pagination.scss';

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  onClick: (pageNumber) => any;

  limit?: number;
  range?: number;
}

class Pagination extends React.PureComponent<PaginationProps> {
  public static defaultProps: Partial<PaginationProps> = {
    limit: 10,
    range: 5,
  };

  pagination(pageIndex, totalCount, limit) {
    const current = pageIndex;
    const totalPage = Math.ceil(totalCount / limit);
    const criteriaNumber = Math.floor(limit / 2);

    const rangePage = _.range(1, totalPage + 1);
    const rangePageWithDots: any[] = [];

    const left = current - criteriaNumber < 1 ? 1 : current - criteriaNumber;
    const right =
      current + criteriaNumber > totalPage
        ? totalPage
        : current + criteriaNumber;

    let condition: any = null;
    rangePage.forEach((i) => {
      if ((i >= left && i <= right) || i <= 2 || i >= totalPage - 1) {
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
    const pages = this.pagination(
      this.props.pageIndex,
      this.props.totalCount,
      this.props.limit,
    );
    return pages.map((pageNum, idx) => {
      return (
        <button
          key={idx}
          className={`btn ${
            this.props.pageIndex === pageNum ? 'btn-success' : 'btn-primary'
          } margin-5`}
          onClick={
            _.isNumber(pageNum) ? () => this.props.onClick(pageNum) : () => null
          }
        >
          {pageNum}
        </button>
      );
    });
  }

  render() {
    return (
      <section>
        <div>{this.renderPageBtn()}</div>
      </section>
    );
  }
}

export default Pagination;
