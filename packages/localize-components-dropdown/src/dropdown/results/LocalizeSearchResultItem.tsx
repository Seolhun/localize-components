import React from 'react'

import styled from '@emotion/styled'

import {
  LocalizeSearchResultItemRenderer,
  LocalizeSearchResultItemRendererProps,
} from './LocalizeSearchResultItemRenderer'

export interface LocalizeSearchResultItemProps extends LocalizeSearchResultItemRendererProps {
  /**
   * Set this to change ResultItem title
   */
  title: React.ReactNode;
  /**
   * When items is Fetching status
   * @default false
   **/
  isFetching?: boolean;

  /**
   * When items is Fetching rendered this
   * @default ''
   **/
  isFetchingNode?: React.ReactNode;

  /**
   * When items is empty rendered this
   * @default 'Not found data'
   **/
  noResultNode?: React.ReactNode;
}

const StyledLocalizeSearchResultItemWrapper = styled.div({
  padding: 0,
})

const StyledLocalizeSearchResultItemTitleContainer = styled.div({
  display: 'flex',
  alignItems: 'center',

  padding: '0.5rem 1rem',
  margin: 0,
})

const StyledLocalizeSearchResultItemContainer = styled.div({
  padding: 0,
  margin: 0,
})

export const LocalizeSearchResultItem: React.FC<LocalizeSearchResultItemProps> = ({
  title,
  isFetching,
  isFetchingNode,
  ...props
}) => {
  const { items } = props
  const isFetchingData = isFetching && items.length === 0
  const hasNoData =
    !isFetching && (!items || !Array.isArray(items) || items.length === 0)

  if (isFetchingData) {
    return (
      <StyledLocalizeSearchResultItemWrapper>
        {isFetchingNode}
      </StyledLocalizeSearchResultItemWrapper>
    )
  }

  if (hasNoData) {
    return null
  }

  return (
    <StyledLocalizeSearchResultItemWrapper>
      <StyledLocalizeSearchResultItemTitleContainer>
        {title}
      </StyledLocalizeSearchResultItemTitleContainer>
      <StyledLocalizeSearchResultItemContainer>
        <LocalizeSearchResultItemRenderer {...props} />
      </StyledLocalizeSearchResultItemContainer>
    </StyledLocalizeSearchResultItemWrapper>
  )
}

export default LocalizeSearchResultItem
