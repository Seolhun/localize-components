import React, { FC, ChangeEvent, useMemo } from 'react';

import {
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';

import styled from '@emotion/styled'

const DEFAULT_CLASSNAME = '__Localize__DropdownItem';

export interface DropdownItemProps {
  option: DropdownItemOption,
  /**
   * @description onChnage item value
   */
  onChange: (event: ChangeEvent<HTMLDivElement>, ...args: any) => void;
  /**
   * @description onChangedItem
   */
  htmlFor?: string;
  /**
   * @default 'label'
   */
  usedKey?: string;
  /**
   * @default 'value'
   */
  usedValue?: string;
  /**
   * @description Option item default Height
   * @default '3rem'
   */
  itemHeight?: string;
}

export interface DropdownItemOption {
  key: string;
  label?: any;
  value?: string | number | boolean;
  [key: string]: any
}

export interface DropdownItemContainerProps {
  itemHeight: string;
}

const DropdownItemWrapper = styled.div<any, ILocalizeTheme>({
  cursor: 'pointer',
})

const DropdownItemContainer = styled.div<DropdownItemContainerProps>(({ itemHeight }) => {
  return {
    display: 'flex',
    height: itemHeight,
    padding: '0.5rem',
  }
})

const DropdownItemOptionLabel = styled.label({
  width: '100%',
  height: '100%',

  '&:hover': {

  },
})

const DropdownItemOptionInput = styled.input({
  width: 0,
  height: 0,
})

export const DropdownItem: FC<DropdownItemProps> = ({
  option,
  onChange,
  htmlFor,
  usedKey = 'label',
  usedValue = 'value',
  itemHeight = '3rem',
}) => {
  const memoizedHtmlFor = useMemo(() => {
    return `${DEFAULT_CLASSNAME}__${option[usedKey]}`;
  }, [option, usedKey])

  return (
    <DropdownItemWrapper>
      <DropdownItemContainer itemHeight={itemHeight}>
        <DropdownItemOptionLabel htmlFor={htmlFor || memoizedHtmlFor}>
          {option[usedKey]}
          <DropdownItemOptionInput
            name={htmlFor || memoizedHtmlFor}
            value={option[usedValue]}
            onChange={onChange}
          />
        </DropdownItemOptionLabel>
      </DropdownItemContainer>
    </DropdownItemWrapper>
  )
}

export default DropdownItem;
