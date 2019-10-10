import React, { FC, ChangeEvent, ReactNode, UIEvent } from 'react';

import styled from '@emotion/styled'
import classnames from 'classnames';

import {
  ILocalizeTheme,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';
import {
  getValidThemeObject,
  getThemeHoverStyle,
} from '@seolhun/localize-components-styled-utils';
import DropdownItem, { DropdownItemWrapper, DropdownItemContainer } from './DropdownItem';


const DEFAULT_CLASSNAME = '__Localize__DropdownItemList';
const DROPDOWN_HEIGHT = 3; //3rem

export interface DropdownItemListProps extends LocalizeBaseStyledProps {
  options: DropdownItemListOption[],
  /**
   * @description onChnage item value event
   */
  onChange: (event: ChangeEvent<HTMLInputElement>, ...args: any[]) => void;
  /**
   * @description onScroll items wrapper event
   */
  onScroll?: (event: UIEvent<HTMLDivElement>, ...args: any[]) => void;
  /**
   * @description Displayed option Key
   * @default 'label'
   */
  usedKey?: string;
  /**
   * @description Event value option key
   * @default 'value'
   */
  usedValue?: string;
  /**
   * @description Option items Container default Height
   * @default '15rem'
   */
  optionHeight?: string;
  /**
   * @description Option item default Height
   * @default '3rem'
   */
  itemHeight?: string;
  /**
   * @description Custom loadingElement
   */
  loadingElement?: ReactNode
  /**
   * @description Option item default Height
   */
  isLoading?: boolean;
}

export interface DropdownItemListOption {
  key: string;
  label?: any;
  value?: string | number | boolean;
  [key: string]: any
}

export interface DropdownItemListContainerProps {
  optionHeight: string;
}

const DropdownItemListWrapper = styled.div<LocalizeBaseStyledProps, ILocalizeTheme>(({ theme, ...props }) => {
  const { backgroundColor } = getValidThemeObject(props, theme);

  const {
    color,
    radius,
    shadow,
  } = theme.border;

  return {
    width: '100%',
    height: 'auto',
    backgroundColor: backgroundColor,
    border: `1px solid ${color}`,
    borderRadius: `0 0 ${radius} ${radius}`,
    boxShadow: shadow,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: getThemeHoverStyle(backgroundColor),
    },
  }
})

const DropdownItemListContainer = styled.div<DropdownItemListContainerProps>(({ optionHeight }) => {
  return {
    height: optionHeight,
    maxHeight: optionHeight,
    overflowY: 'scroll',
  }
})

export const DropdownItemList: FC<DropdownItemListProps> = ({
  options,
  onChange,
  onScroll,
  className,
  usedKey = 'label',
  usedValue = 'value',
  optionHeight = '15rem',
  itemHeight = `${DROPDOWN_HEIGHT}rem`,
  loadingElement,
  isLoading,
  ...props
}) => {
  return (
    <DropdownItemListWrapper
      className={classnames(DEFAULT_CLASSNAME, className)}
      onScroll={onScroll}
      {...props}
    >
      <DropdownItemListContainer optionHeight={optionHeight}>
        {options.map((option) => (
          <DropdownItem
            option={option}
            onChange={onChange}
            usedKey={usedKey}
            usedValue={usedValue}
            itemHeight={itemHeight}
          />
        ))}
        {(!!loadingElement && isLoading) && (
          <DropdownItemWrapper>
            <DropdownItemContainer itemHeight={itemHeight}>
              {loadingElement}
            </DropdownItemContainer>
          </DropdownItemWrapper>
        )}
      </DropdownItemListContainer>
    </DropdownItemListWrapper>
  )
}

export default DropdownItemList;
