import React, { MouseEvent } from 'react'

import styled from '@emotion/styled'

import { LocalizeThemeStyledProps, ILocalizeTheme } from '@seolhun/localize-components-styled-types'
import { getValidThemeObject, getThemeHoverStyle } from '@seolhun/localize-components-styled-utils';

export interface LocalizeSearchResultItemRendererProps extends LocalizeThemeStyledProps {
  /**
   * Set this to change redering items
   **/
  items: any[]

  /**
   * Set this to change render function
   **/
  renderItem: (item?: any) => React.ReactNode

  /**
   * Set this to change item click handler
   **/

  onClickItem: (item?: any) => void

  /**
   * Set this to change item uniqeKey name
   * @default _id
   **/
  uniqukeKey?: string
}

const StyledLocalizeSearchResultItem = styled.div<LocalizeThemeStyledProps, ILocalizeTheme>(({ theme, ...props }) => {
  const validTheme = getValidThemeObject(props, theme);
  return {
    padding: '0.5rem 1rem',
    cursor: 'pointer',

    '&:hover': {
      color: getThemeHoverStyle(validTheme.subColor),
      backgroundColor: getThemeHoverStyle(validTheme.mainColor),
    },
  }
})

export const LocalizeSearchResultItemRenderer: React.FC<
  LocalizeSearchResultItemRendererProps
> = ({ items, renderItem, onClickItem, uniqukeKey = '_id', ...props }) => {
  const handleClickItem = React.useCallback(
    (item?: any) => (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()

      onClickItem(item)
    },
    []
  )

  return (
    <>
      {items.map((item, idx) => (
        <StyledLocalizeSearchResultItem
          key={`${item[uniqukeKey]}-${idx}`}
          onClick={handleClickItem(item)}
          {...props}
        >
          {renderItem(item)}
        </StyledLocalizeSearchResultItem>
      ))}
    </>
  )
}

export default LocalizeSearchResultItemRenderer
