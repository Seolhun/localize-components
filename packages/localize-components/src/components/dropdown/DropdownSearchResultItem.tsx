import React from 'react';

import styled from '@emotion/styled';

import { DropdownSearchResultItemRenderer } from './DropdownSearchResultItemRenderer';

export interface DropdownSearchResultItemProps {
  /**
   * 랜더링 할 Items
   */
  items: any[];

  /**
   * 선택한 아이템
   */
  selectedItem: any;

  /**
   * 선택한 아이템 넘버
   */
  selectedItemIndex: number;

  /**
   * Items 랜더링 함수
   */
  renderItem: (item: any) => React.ReactNode;

  /**
   * Items 랜더링 이후 아이템을 클릭할 경우의 옵션
   */
  onClickItem: (item: any, index: number) => void;

  /**
   * List rednering에 사용되는 고유 값 키
   * */
  uniqukeKey?: string;

  /**
   * Option Data 값이 isFetching인 경우
   * @default false
   * */
  isFetching?: boolean;

  /**
   * isFetching인 경우에 사용 할 Custom Node 값
   * @default ''
   * */
  isFetchingNode?: React.ReactNode;

  /**
   * Item에 값이 없을 경우 보여줄 Node 값
   * */
  noResultNode?: React.ReactNode;
}

const SearchDataItemWrapper = styled.div({
  padding: 0,
});

const SearchNoDataItemContainer = styled.div({
  display: 'flex',
  alignItems: 'center',

  padding: '6px 18px',
  margin: 0,
});

const SearchResultItemContainer = styled.div({
  padding: 0,
  margin: 0,
});

export const DropdownSearchResultItem: React.FC<
  DropdownSearchResultItemProps
> = ({
  items,
  isFetching,
  isFetchingNode,
  noResultNode,
  onClickItem,
  ...props
}) => {
  const isFetchingData = isFetching && items.length === 0;
  const hasNoData =
    !isFetching && (!items || !Array.isArray(items) || items.length === 0);

  if (isFetchingData) {
    return (
      <SearchDataItemWrapper>
        <SearchNoDataItemContainer>{isFetchingNode}</SearchNoDataItemContainer>
      </SearchDataItemWrapper>
    );
  }

  if (hasNoData) {
    return (
      <SearchDataItemWrapper>
        <SearchNoDataItemContainer>{noResultNode}</SearchNoDataItemContainer>
      </SearchDataItemWrapper>
    );
  }

  return (
    <SearchDataItemWrapper>
      <SearchResultItemContainer>
        <DropdownSearchResultItemRenderer
          {...props}
          items={items}
          isFetching={isFetching}
          isFetchingNode={isFetchingNode}
          onClickItem={onClickItem}
        />
      </SearchResultItemContainer>
    </SearchDataItemWrapper>
  );
};

export default DropdownSearchResultItem;
