import React from 'react'

import styled from '@emotion/styled'

import { LocalizeThemeStyledProps } from '@seolhun/localize-components-styled-types'

import { LocalizeSearchResultItem, LocalizeSearchResultItemProps } from './LocalizeSearchResultItem'

const NO_DATA_MESSAGE = 'Not found data'

export interface LocalizeSearchResultProps extends LocalizeThemeStyledProps {
  results: LocalizeSearchResultItemProps[]

  /**
   * Set this to change Result Item no data message
   * @default 'Not found data.'
   **/
  noResultNode?: React.ReactNode
}

const StyledLocalizeSearchResultWrapper = styled.div({
  padding: 0,
  margin: 0,

  [`${LocalizeSearchResultItem}:not(:last-child)`]: {
    marginBottom: '1.8rem',
  },
})

const StyledLocalizeSearchResultItemWrapper = styled.div({
  padding: 0,
})

const StyledLocalizeSearchResultItemNameContainer = styled.div({
  display: 'flex',
  alignItems: 'center',

  padding: ' 0.8rem 4.5rem',
  margin: 0,
})

export const LocalizeSearchResult: React.FC<LocalizeSearchResultProps> = ({
  results,
  noResultNode = NO_DATA_MESSAGE,
  ...props
}) => {
  const memoizedIsEmptyAllData = React.useMemo(() => {
    return results.every(({ items, isFetching }) => {
      return (
        !isFetching && (!items || !Array.isArray(items) || items.length === 0)
      )
    })
  }, [results])

  return (
    <StyledLocalizeSearchResultWrapper>
      {memoizedIsEmptyAllData ? (
        <StyledLocalizeSearchResultItemWrapper>
          <StyledLocalizeSearchResultItemNameContainer>
            {noResultNode}
          </StyledLocalizeSearchResultItemNameContainer>
        </StyledLocalizeSearchResultItemWrapper>
      ) : (
        <>
          {results.map((result, idx) => (
            <LocalizeSearchResultItem
              key={`localize-item-${idx}`}
              {...result}
              {...props}
            />
          ))}
        </>
      )}
    </StyledLocalizeSearchResultWrapper>
  )
}

export default LocalizeSearchResult
