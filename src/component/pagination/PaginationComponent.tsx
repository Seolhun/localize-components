import React, { Component } from 'react';

import * as _ from 'lodash';

import PropTypes from 'prop-types';

import './PaginationComponent.css';

interface PaginationComponentProps {
  pageIndex: number;
  totalCount: number;
  onClick: () => any;

  limit?: number;
  range?: number;
}

interface PaginationComponentStates {}

class PaginationComponent extends Component<PaginationComponentProps, PaginationComponentStates> {
  public static defaultProps: Partial<PaginationComponentProps> = {
    limit: 5,
    range: 5,
  };

  pagination(pageIndex, totalCount, limit) {
    const current = pageIndex;
    const totalPage = Math.ceil(totalCount / this.props.limit);
    const criteriaNumber = Math.floor(limit / 2);

    const rangePage = _.range(1, totalPage + 1);
    const rangePageWithDots = [];

    const left = current - criteriaNumber < 1 ? 1 : current - criteriaNumber;
    const right = current + criteriaNumber > totalPage ? totalPage : current + criteriaNumber;

    let condition = null;
    for (const i of rangePage) {
      if ((i >= left && i <= right) || ((i === 1 || i === 2)) || ((i === totalPage) || (i === totalPage - 1))) {
        if (i - condition !== 1) {
          rangePageWithDots.push('....');
        }
        rangePageWithDots.push(i);
        condition = i;
      }
    }
    return rangePageWithDots;
  }

  renderPageBtn() {
    const pages = this.pagination(this.props.pageIndex, this.props.totalCount, this.props.range);
    return pages.map((pageNum, idx) => {
      return (
        <button
          key={idx}
          className={`btn ${this.props.pageIndex === pageNum ? 'btn-success' : 'btn-primary'} margin-5`}
          onClick={_.isNumber(pageNum) ? () => this.props.onClick(pageNum) : () => null}
        >
          {pageNum}
        </button>
      );
    });
  }

  render() {
    return (
      <section>
        <div>
          {
            this.renderPageBtn()
          }
        </div>
      </section>
    );
  }
}

export default PaginationComponent;
