// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './ArrowPagination.scss';

class ArrowPagination extends PureComponent {
  static propTypes = {
    totalPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,

    range: PropTypes.number,
  };

  static defaultProps = {
    range: 9,
  }

  handleClickPageIndex = (e) => {
    const { onClick } = this.props;
    e.preventDefault();
    const page = parseInt(
      e.target.getAttribute('data-page-index'),
      10,
    );
    onClick(page);
  };

  handleClickFirstPage = () => {
    const { onClick } = this.props;
    const page = 0;
    onClick(page);
  };

  handleClickPreviousPage = () => {
    const { currentPage, onClick } = this.props;
    const page = currentPage === 0
      ? currentPage
      : currentPage - 1;
    onClick(page);
  };

  handleClickNextPage = () => {
    const {
      currentPage, totalPage, onClick,
    } = this.props;

    const page = currentPage === totalPage - 1
      ? currentPage
      : currentPage + 1;
    onClick(page);
  };

  handleClickLastPage = () => {
    const { totalPage, onClick } = this.props;
    const page = totalPage - 1;
    onClick(page);
  };

  renderPageList() {
    const {
      totalPage,
      currentPage,
      range,
    } = this.props;
    const pageList = [];
    const showingLength = range;
    if (showingLength < 1) {
      throw new Error('too short showingLength.');
    }
    let leftGap = Math.floor(showingLength / 2);
    if (showingLength % 2 === 0) {
      // is even
      leftGap -= 1;
    }
    const rightGap = showingLength - leftGap - 1;

    let showingPageStart = 0;
    let showingPageEnd = totalPage;
    if (currentPage - leftGap > 0) {
      // 왼쪽이 여유있는 상황(index 4, 보이는것 5이상)에는 시작점을 당긴다.
      showingPageStart = currentPage - leftGap;
    }
    if (currentPage + 1 + rightGap - totalPage < 0) {
      // 오른쪽이 여유있는 상황에는 끝점을 당겨온다.
      showingPageEnd = currentPage + 1 + rightGap;
    }

    if (currentPage - leftGap <= 0) {
      // 왼쪽에 여유가 없을때 오른쪽에 그만큼 더 붙여준다.(총량유지를 위함) 단 이때 총량을 넘어가지 않도록 한다.
      const max = showingPageEnd + Math.abs(currentPage - leftGap);
      if (max > totalPage) {
        showingPageEnd = totalPage;
      } else {
        showingPageEnd += Math.abs(currentPage - leftGap);
      }
    }

    if (currentPage + 1 + rightGap - totalPage >= 0) {
      // 오른쪽에 여유가 없을때 왼쪽에 그만큼 더 붙여준다.(총량유지를 위함) 단 이때 총량을 넘어가지 않도록 한다.
      const min = showingPageStart - (currentPage + 1 + rightGap - totalPage);
      if (min < 0) {
        showingPageStart = 0;
      } else {
        showingPageStart -= currentPage + 1 + rightGap - totalPage;
      }
    }

    for (let i = showingPageStart; i < showingPageEnd; i += 1) {
      pageList.push((
        <li key={i}>
          <a
            href={`#${i}`}
            className={`${currentPage === i ? 'active' : ''}`}
            onClick={this.handleClickPageIndex}
            data-page-index={i}
          >
            {i + 1}
          </a>
        </li>
      ));
    }
    return pageList;
  }

  render() {
    const { totalPage } = this.props;
    if (totalPage < 1) {
      return null;
    }

    return (
      <ul className="pagination">
        <li>
          <button
            type="button"
            className="link-btn"
            onClick={this.handleClickFirstPage}
          >
            <i className="fas fa-angle-double-left" />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="link-btn"
            onClick={this.handleClickPreviousPage}
          >
            <i className="fas fa-angle-left" />
          </button>
        </li>
        {this.renderPageList()}
        <li>
          <button
            type="button"
            className="link-btn"
            onClick={this.handleClickNextPage}
          >
            <i className="fas fa-angle-right" />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="link-btn"
            onClick={this.handleClickLastPage}
          >
            <i className="fas fa-angle-double-right" />
          </button>
        </li>
      </ul>
    );
  }
}

export default ArrowPagination;
