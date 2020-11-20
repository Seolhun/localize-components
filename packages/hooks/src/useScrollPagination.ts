import React from 'react';
import dayjs from 'dayjs';

interface UseScrollPaginationProps {
  /**
   * @default 0
   */
  page?: number;

  /**
   * @default 30
   */
  perPage?: number;

  sortBy?: string;

  orderBy?: 'DESC' | 'ASC';

  from?: dayjs.Dayjs;

  to?: dayjs.Dayjs;

  loading?: boolean;
}

const DEFAULT_PROPS: Required<UseScrollPaginationProps> = {
  page: 1,
  perPage: 30,
  sortBy: '',
  orderBy: 'DESC',
  from: dayjs().startOf('month'),
  to: dayjs(),
  loading: true,
};

const useScrollPagination = (
  props: UseScrollPaginationProps = DEFAULT_PROPS,
) => {
  const {
    page = DEFAULT_PROPS.page,
    perPage = DEFAULT_PROPS.perPage,
    sortBy = DEFAULT_PROPS.sortBy,
    orderBy = DEFAULT_PROPS.orderBy,
    from = DEFAULT_PROPS.from,
    to = DEFAULT_PROPS.to,
    loading = DEFAULT_PROPS.loading,
  } = props;
  /**
   * Pagination Variables
   */
  const [currentPage, setCurrentPage] = React.useState(page);
  const [currentPerPage, setPerPage] = React.useState(perPage);
  const [sortByKey, setSortByKey] = React.useState(sortBy);
  const [orderByKey, setOrderByKey] = React.useState(orderBy);
  const [fromDate, setFromDate] = React.useState(from);
  const [toDate, setToDate] = React.useState(to);
  const [isLoading, setLoading] = React.useState(loading);

  /**
   * Scroll Variables
   */
  const [hasNextPage, setHasNextPage] = React.useState(true);
  const [maxScrollHeight, setMaxScrollHeight] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('scroll', watchScroll);
    return () => {
      window.removeEventListener('scroll', watchScroll);
    };
  }, [currentPage, hasNextPage]);

  const resetAllCurrentPage = () => {
    setCurrentPage(DEFAULT_PROPS.page);
    setLoading(DEFAULT_PROPS.loading);
    setHasNextPage(true);
    setMaxScrollHeight(0);
  };

  const onChangePage = React.useCallback(
    (nextPage: number) => {
      if (currentPage !== nextPage) {
        setCurrentPage(nextPage);
      }
    },
    [currentPage],
  );

  const onChangePerPage = (nextPerPage: number) => {
    setPerPage(nextPerPage);

    if (currentPerPage !== nextPerPage) {
      resetAllCurrentPage();
    }
  };

  const onChangeOrderBy = (sortedKey: string) => {
    if (sortByKey === sortedKey) {
      setOrderByKey(orderByKey === 'ASC' ? 'DESC' : 'ASC');
      return;
    }
    setOrderByKey('DESC');
    resetAllCurrentPage();
  };

  const onChangeFormTo = (from: dayjs.Dayjs, to: dayjs.Dayjs) => {
    onChangeFromDate(from.clone());
    onChangeToDate(to.clone());
    resetAllCurrentPage();
  };

  const onChangeFromDate = React.useCallback(
    (newDate: dayjs.Dayjs) => {
      setFromDate(newDate.clone());
    },
    [fromDate],
  );

  const onChangeToDate = React.useCallback(
    (newDate: dayjs.Dayjs) => {
      setToDate(newDate.clone());
    },
    [toDate],
  );

  const onChangeSortBy = React.useCallback(
    (sortedKey: string) => {
      onChangeOrderBy(sortedKey);
      setSortByKey(sortedKey);
    },
    [orderByKey, sortByKey],
  );

  const watchScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const triggeredScrollHeight = scrollTop + clientHeight;
    if (
      maxScrollHeight !== triggeredScrollHeight &&
      triggeredScrollHeight === scrollHeight
    ) {
      setMaxScrollHeight(triggeredScrollHeight);
      if (hasNextPage) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  return {
    currentPage,
    onChangePage,
    currentPerPage,
    onChangePerPage,
    orderByKey,
    onChangeOrderBy,
    sortByKey,
    onChangeSortBy,
    hasNextPage,
    onChangeHasNextPage: setHasNextPage,
    from: fromDate,
    onChangeFrom: onChangeFromDate,
    to: toDate,
    onChangeTo: onChangeToDate,
    onChangeFormTo,
    loading: isLoading,
    onChangeLoading: setLoading,
  };
};

export { useScrollPagination };
export default useScrollPagination;
