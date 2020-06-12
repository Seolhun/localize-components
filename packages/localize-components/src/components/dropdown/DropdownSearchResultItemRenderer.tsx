import React from 'react';

import styled from '@emotion/styled';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

export interface DropdownSearchResultItemRendererProps {
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
   * Items 랜더링 함수
   */
  renderItem: (item: any) => React.ReactNode;

  /**
   * Items 랜더링 이후 아이템을 클릭할 경우의 옵션
   */
  onClickItem: (item: any, index: number) => void;

  /**
   * List rednering에 사용되는 고유 값 키
   * @default id
   * */
  uniqukeKey?: string;
}

const StyledSearchResultItem = styled.div<
  { isMatchIndex: boolean },
  LocalizeThemeProps
>(({ isMatchIndex, theme }) => ({
  padding: '6px 18px',
  cursor: 'pointer',
  color: theme.colors.uiColor08,
  backgroundColor: theme.colors.uiColor02,

  ...(isMatchIndex && {
    color:
      theme.type === 'LIGHT' ? theme.colors.uiColor01 : theme.colors.uiColor08,
    backgroundColor: theme.colors.primary01,
  }),

  '&:hover': {
    color:
      theme.type === 'LIGHT' ? theme.colors.uiColor01 : theme.colors.uiColor08,
    backgroundColor: theme.colors.primary01,
  },
}));

export const DropdownSearchResultItemRenderer: React.FC<DropdownSearchResultItemRendererProps> = ({
  items,
  selectedItemIndex,
  renderItem,
  onClickItem,
  uniqukeKey = 'id',
  isFetching,
  isFetchingNode,
}) => {
  const isFetchingData = isFetching && items.length !== 0;
  const itemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (itemRef.current) {
      itemRef.current.focus();
    }
  }, [selectedItemIndex]);

  const handleClickItem = (item: any, index: number) => (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();

    onClickItem(item, index);
  };

  return (
    <>
      {items.map((item, index) => (
        <StyledSearchResultItem
          key={`${item[uniqukeKey]}-${index}`}
          ref={itemRef}
          isMatchIndex={index === selectedItemIndex}
          onClick={handleClickItem(item, index)}
        >
          {renderItem(item)}
        </StyledSearchResultItem>
      ))}
      {isFetchingData && isFetchingNode}
    </>
  );
};

export default DropdownSearchResultItemRenderer;
