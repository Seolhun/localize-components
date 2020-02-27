import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import { SquareInput } from '@seolhun/localize-components-form';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { DropdownSearchResultItem } from './DropdownSearchResultItem';

const DEFAULT_CLASSNAME = '__Localize__DropdownSearch';
const NO_DATA_MESSAGE = 'Not found data';

export interface LocalizeDropdownSearchProps {
  /**
   * Items를 이용하여 랜더링 옵션 Props
   */
  items: any[];

  /**
   * Items 랜더링 함수
   */
  renderItem: (item: any) => React.ReactNode;

  /**
   * selected Item 옵션
   */
  item?: any;

  /**
   * Items 랜더링 이후 아이템을 클릭할 경우의 옵션
   */
  onClickItem?: (item: any) => void;

  /**
   * List rednering에 사용되는 고유 값 키
   * */
  uniqukeKey?: string;

  /**
   * Scroll Pagination의 fetching 여부
   */
  isAsyncFetching?: boolean;

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
   * 검색어를 변경하는 핸들러
   */
  onChangeQuery?: (query: string) => void;

  /**
   * 검색어를 Focus 핸들러
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 검색어를 Blur 핸들러
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 검색어를 변경하는 핸들러
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /**
   * 검색어를 변경하는 핸들러
   */
  onScrollPagination?: () => void;

  /**
   * @default 'search'
   */
  type?: string;

  /**
   * @default 'search-dropdown-input'
   */
  name?: string;

  /**
   * @default 'Search'
   */
  placeholder?: string;

  /**
   * Search Input label
   */
  label?: string;

  /**
   * SearchInput error message
   */
  error?: string;

  /**
   * Items에 값이 없을 경우 보여줄 Node 값
   * @default "Not found data"
   * */
  noResultNode?: React.ReactNode;

  /**
   * 검색된 결과의 창을 보여주기 위한 최대 높이
   * @default 500
   */
  resultMaxHeight?: number;

  /**
   * @default 1000
   */
  zIndex?: number;

  /**
   * onClick executed after result dom is closed
   * @default true
   */
  isCloseAfterClick?: boolean;

  /**
   * className for Style
   */
  className: string;

  /**
   * Debug mode for developer
   */
  isDebug?: boolean;
}

interface SearchResultContainerProps {
  resultMaxHeight?: LocalizeDropdownSearchProps['resultMaxHeight'];
  zIndex?: LocalizeDropdownSearchProps['zIndex'];
}

const SearchDropdownWrapper = styled.div<{ zIndex: number }>(({ zIndex }) => ({
  display: 'flex',
  flex: 1,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  zIndex,
}));

const SearchDropdownInputContainer = styled.div({
  width: '100%',

  'input[type="search"]': {
    WebkitAppearance: 'textfield',
  },
});

const SearchResulWrapper = styled.div<{
  isShowResult: boolean;
  zIndex: number;
}>(({ isShowResult, zIndex }) => ({
  position: 'relative',
  display: `${isShowResult ? 'block' : 'none'}`,
  zIndex,
}));

const SearchResulContainer = styled.div<
  SearchResultContainerProps,
  LocalizeThemeProps
>(({ theme, resultMaxHeight }) => ({
  position: 'absolute',
  width: '100%',
  maxHeight: `${resultMaxHeight}px`,
  borderRadius: '5px',
  border: `1px solid ${theme.colors.primary01}`,
  backgroundColor: theme.colors.primaryBackground01,
  margin: '-14px 0 0',
  padding: '0',
  overflowY: 'auto',
}));

const SearchResultWrapper = styled.div({
  padding: 0,
  margin: 0,
});

// export const LocalizeDropdownSearch: React.FC<LocalizeDropdownSearchProps> = ({
export const LocalizeDropdownSearch = React.forwardRef<
  HTMLInputElement,
  LocalizeDropdownSearchProps
>(
  (
    {
      items,
      item,
      renderItem,
      onClickItem,
      uniqukeKey,
      isAsyncFetching,
      isFetching,
      isFetchingNode,
      onChangeQuery,
      onFocus,
      onBlur,
      onKeyDown,
      onScrollPagination,
      type = 'search',
      name = 'search-dropdown-input',
      placeholder = 'Search',
      zIndex = 1000,
      className,
      resultMaxHeight = 500,
      noResultNode = NO_DATA_MESSAGE,
      isCloseAfterClick = true,
      isDebug,
      ...props
    },
    inputRef,
  ) => {
    const dropdownWarpperRef = React.useRef<HTMLDivElement>(null);
    const scrollResultRef = React.useRef<HTMLDivElement>(null);
    const [query, setQuery] = React.useState('');
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(-1);
    const [selectedItem, setSelectedItem] = React.useState(item);
    const [isFocusedInput, setIsFocusedInput] = React.useState(false);
    const [isResultMouseOver, setIsResultMouseOver] = React.useState(false);
    const [isShowResult, setIsShowResult] = React.useState(false);

    React.useEffect(() => {
      if (isDebug) {
        setIsShowResult(true);
      }
    }, [isDebug]);

    React.useEffect(() => {
      if (uniqukeKey && !isShowResult && selectedItem) {
        const isDiffQuery = query !== selectedItem[uniqukeKey];
        if (isDiffQuery) {
          setIsShowResult(isDiffQuery);
        }
      }
    }, [query, uniqukeKey, selectedItem]);

    React.useEffect(() => {
      if (!isShowResult) {
        setIsShowResult(isFocusedInput);
      }
    }, [isFocusedInput]);

    React.useEffect(() => {
      if (!isShowResult) {
        setIsShowResult(isResultMouseOver);
      }
    }, [isResultMouseOver]);

    const handleClickOutDropdown = (event: any) => {
      if (dropdownWarpperRef.current && event.target) {
        if (!dropdownWarpperRef.current.contains(event.target)) {
          setIsShowResult(false);
        }
      }
    };

    const handleScrollWithPagination = () => {
      if (!scrollResultRef.current) {
        return;
      }

      const { clientHeight, scrollHeight, scrollTop } = scrollResultRef.current;
      const triggeringSize = scrollHeight - scrollTop;
      if (clientHeight >= triggeringSize && isAsyncFetching === false) {
        if (onScrollPagination) {
          onScrollPagination();
        }
      }
    };

    React.useEffect(() => {
      document.addEventListener('click', handleClickOutDropdown);

      if (scrollResultRef.current) {
        scrollResultRef.current.addEventListener(
          'scroll',
          handleScrollWithPagination,
        );
        scrollResultRef.current.addEventListener(
          'resize',
          handleScrollWithPagination,
        );
      }

      return () => {
        document.removeEventListener('click', handleClickOutDropdown);

        if (scrollResultRef.current) {
          scrollResultRef.current.removeEventListener(
            'scroll',
            handleScrollWithPagination,
          );
          scrollResultRef.current.removeEventListener(
            'resize',
            handleScrollWithPagination,
          );
        }
      };
    }, [scrollResultRef.current, onScrollPagination, isAsyncFetching]);

    const handleSelectItemIndex = (index: number) => {
      if (items.length <= index) {
        setSelectedItemIndex(-1);
        return;
      }
      if (index <= -1) {
        setSelectedItemIndex(items.length);
        return;
      }
      setSelectedItemIndex(index);
    };

    const handleSelectItem = (newItem: any, index: number) => {
      if (!newItem) {
        return;
      }

      if (uniqukeKey && newItem[uniqukeKey]) {
        setQuery(newItem[uniqukeKey]);
      }

      if (onClickItem) {
        onClickItem(newItem);
      }
      setSelectedItem(newItem);
      handleSelectItemIndex(index);

      if (isCloseAfterClick) {
        setIsShowResult(false);
      }
    };

    const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();

      const newQuery = event.target.value;
      if (onChangeQuery) {
        onChangeQuery(newQuery);
      }
      setQuery(newQuery);
    };

    const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      event.stopPropagation();

      if (onKeyDown) {
        onKeyDown(event);
      }

      if (isShowResult) {
        if (event.key === 'ArrowDown') {
          handleSelectItemIndex(selectedItemIndex + 1);
        }
        if (event.key === 'ArrowUp') {
          handleSelectItemIndex(selectedItemIndex - 1);
        }
        if (event.key === 'Escape') {
          setIsShowResult(false);
        }
        if (event.key === 'Enter') {
          handleSelectItem(items[selectedItemIndex], selectedItemIndex);
          setIsShowResult(false);

          // Warning: Don't Remove To Prevent Submit in Form
          event.preventDefault();
        }
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(event);
      }

      setIsFocusedInput(true);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(event);
      }

      setIsFocusedInput(false);
    };

    const handleIsResultMouseOver = () => {
      setIsResultMouseOver(true);
    };

    const handleIsResultMouseOut = () => {
      setIsResultMouseOver(false);
    };

    return (
      <SearchDropdownWrapper
        className={classnames(DEFAULT_CLASSNAME, className)}
        ref={dropdownWarpperRef}
        zIndex={zIndex}
      >
        <SearchDropdownInputContainer
          className={`${DEFAULT_CLASSNAME}__Input__Container`}
        >
          <SquareInput
            {...props}
            ref={inputRef}
            className={`${DEFAULT_CLASSNAME}__Input`}
            type={type}
            value={query}
            name={name}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleQuery}
            onKeyDown={handleKeydown}
            placeholder={placeholder}
            autoComplete="off"
          />
        </SearchDropdownInputContainer>
        {/* TODO: React.window */}
        <SearchResulWrapper
          className={`${DEFAULT_CLASSNAME}__ResultWrapper`}
          isShowResult={isShowResult}
          zIndex={zIndex}
        >
          <SearchResulContainer
            className={`${DEFAULT_CLASSNAME}__ResultContainer`}
            ref={scrollResultRef}
            resultMaxHeight={resultMaxHeight}
            zIndex={zIndex}
          >
            <SearchResultWrapper
              onMouseOver={handleIsResultMouseOver}
              onMouseOut={handleIsResultMouseOut}
            >
              <DropdownSearchResultItem
                items={items}
                selectedItem={selectedItem}
                selectedItemIndex={selectedItemIndex}
                renderItem={renderItem}
                onClickItem={handleSelectItem}
                uniqukeKey={uniqukeKey}
                isFetching={isFetching}
                isFetchingNode={isFetchingNode}
                noResultNode={noResultNode}
              />
            </SearchResultWrapper>
          </SearchResulContainer>
        </SearchResulWrapper>
      </SearchDropdownWrapper>
    );
  },
);

export default LocalizeDropdownSearch;
