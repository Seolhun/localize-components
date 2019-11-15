import React, { ChangeEvent, KeyboardEvent } from 'react'

import styled from '@emotion/styled'
import classnames from 'classnames';

import { LocalizeInput, LocalizeFlex } from '@seolhun/localize-components-atomic';
import { LocalizeBaseStyledProps, ILocalizeTheme } from '@seolhun/localize-components-styled-types'
import { getValidThemeObject } from '@seolhun/localize-components-styled-utils';

const DEFAULT_CLASSNAME = '__Localize__DropdownSearch';

export interface LocalizeDropdownSearchProps extends SearchResultContainerProps {
  /**
   * Set this to change Dropdown items list rendering
   */
  children: (props: LocalizeDropdownSearchChildrenProps) => React.ReactNode

  /**
   * Search Query
   * @default ''
   */
  value?: string

  /**
   * Query handler
   */
  onChange?: (value: string) => void

  /**
   * Query keydown handler
   */
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void

  /**
   * @default 'search'
   */
  type?: string

  /**
   * @default 'Search'
   */
  placeholder?: string

  /**
   * @default 'search-dropdown-input'
   */
  name?: string

  /**
   * Render after focusing
   */
  initFocus?: boolean


  /**
   * @default 10
   */
  zIndex?: number
}

export interface LocalizeDropdownSearchChildrenProps {
  onSetIsShowResult: (isShow: boolean) => void
  onSetQuery: (value: string) => void
}

interface SearchResultContainerProps extends LocalizeBaseStyledProps {
  /**
   * Search result container height
   * @default 500
   */
  resultMaxHeight?: number
}

const StyledSearchDropdownWrapper = styled(LocalizeFlex)<{ zIndex: number }>(
  ({ zIndex }) => {
    return {
      flexDirection: 'column',
      zIndex,
    }
  }
)

const StyledSearchInputContainer = styled.div({})

const StyledSearchResulWrapper = styled.div<{ zIndex: number }>(
  ({ zIndex }) => {
    return {
      position: 'relative',
      zIndex,
    }
  }
)

const StyledSearchResulContainer = styled.div<SearchResultContainerProps, ILocalizeTheme>(
  ({ resultMaxHeight, theme, ...props }) => {
    const validTheme = getValidThemeObject(props, theme);

    return {
      position: 'absolute',
      width: '100%',
      maxHeight: `${resultMaxHeight}px`,
      borderRadius: '5px',
      padding: 0,
      overflowY: 'auto',

      backgroundColor: validTheme.mainColor,
      color: validTheme.subColor,
    }
  }
)

export const LocalizeDropdownSearch: React.FC<LocalizeDropdownSearchProps> = ({
  children,
  value = '',
  onChange,
  onKeyDown,
  className,
  type = 'search',
  name = 'search-dropdown-input',
  placeholder = 'Search',
  zIndex = 10,
  resultMaxHeight = 500,
  initFocus,
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [query, setQuery] = React.useState(value)
  const [isFocusedInput, setIsFocusedInput] = React.useState(false)
  const [isResultMouseOver, setSsResultMouseOver] = React.useState(false)
  const [isShowResult, setIsShowResult] = React.useState(false)

  React.useEffect(() => {
    if (inputRef.current && initFocus) {
      inputRef.current.focus()
    }
  }, [initFocus])

  React.useEffect(() => {
    setIsShowResult(isFocusedInput || isResultMouseOver)
  }, [isFocusedInput, isResultMouseOver])

  const handleChangeQuery = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target

      if (onChange) {
        onChange(value)
      }
      setIsShowResult(value.length > 0)
      setQuery(value)
    },
    [onChange]
  )

  const handleSetQuery = React.useCallback(
    (value: string) => {
      if (onChange) {
        onChange(value)
      }
      setIsShowResult(value.length > 0)
      setQuery(value)
    },
    [onChange]
  )

  const handleQueryKeyboard = React.useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Escape' || event.key === 'Enter') {
        setIsShowResult(false)
      }

      if (onKeyDown) {
        onKeyDown(event)
      }
    },
    [onKeyDown]
  )

  const handleIsFocused = React.useCallback(() => {
    setIsFocusedInput(!isFocusedInput)
  }, [isFocusedInput])

  const handleIsResultMouseOver = React.useCallback(() => {
    setSsResultMouseOver(true)
  }, [isResultMouseOver])

  const handleIsResultMouseOut = React.useCallback(() => {
    setSsResultMouseOver(false)
  }, [isResultMouseOver])

  return (
    <StyledSearchDropdownWrapper
      className={classnames(DEFAULT_CLASSNAME, className)}
      zIndex={zIndex}
    >
      <StyledSearchInputContainer className={`${DEFAULT_CLASSNAME}__Input__Container`}>
        <LocalizeInput
          type={type}
          name={name}
          className={`${DEFAULT_CLASSNAME}__Input`}
          onBlur={handleIsFocused}
          onChange={handleChangeQuery}
          onFocus={handleIsFocused}
          onKeyDown={handleQueryKeyboard}
          placeholder={placeholder}
          value={query}
        />
      </StyledSearchInputContainer>
      {isShowResult && (
        <StyledSearchResulWrapper
          className={`${DEFAULT_CLASSNAME}__ResultWrapper`}
          zIndex={zIndex}
        >
          <StyledSearchResulContainer
            className={`${DEFAULT_CLASSNAME}__ResultContainer`}
            onMouseOver={handleIsResultMouseOver}
            onMouseOut={handleIsResultMouseOut}
            resultMaxHeight={resultMaxHeight}
            {...props}
          >
            {children({
              onSetIsShowResult: setIsShowResult,
              onSetQuery: handleSetQuery,
            })}
          </StyledSearchResulContainer>
        </StyledSearchResulWrapper>
      )}
    </StyledSearchDropdownWrapper>
  )
}

export default LocalizeDropdownSearch
