import React, { FC, ChangeEvent, useMemo } from 'react';

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

const DEFAULT_CLASSNAME = '__Localize__DropdownItem';

export interface DropdownItemProps extends LocalizeBaseStyledProps {
  /**
   * @description Dropdown Item option
   */
  option: DropdownItemOption,
  /**
   * @description onChnage item value
   */
  onChange: (event: ChangeEvent<HTMLInputElement>, ...args: any[]) => void;
  /**
   * @description Displayed option Key
   */
  usedKey: string;
  /**
   * @description Event value option key
   */
  usedValue: string;
  /**
   * @description Option item default Height
   */
  itemHeight: string;
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

export const DropdownItemWrapper = styled.div<LocalizeBaseStyledProps, ILocalizeTheme>(({ theme, ...props }) => {
  const { backgroundColor } = getValidThemeObject(props, theme);

  return {
    width: '100%',
    height: 'auto',
    backgroundColor: backgroundColor,

    cursor: 'pointer',

    '&:hover': {
      backgroundColor: getThemeHoverStyle(backgroundColor),
    },
  }
})

export const DropdownItemContainer = styled.div<DropdownItemContainerProps>(({ itemHeight }) => {
  return {
    height: itemHeight,
    padding: '0.5rem',
  }
})

const DropdownItemOptionLabel = styled.label({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
})

const DropdownItemOptionInput = styled.input({
  width: 0,
  height: 0,
})

export const DropdownItem: FC<DropdownItemProps> = ({
  option,
  onChange,
  className,
  usedKey = 'label',
  usedValue = 'value',
  itemHeight = '3rem',
  ...props
}) => {
  const memoizedHtmlFor = useMemo(() => {
    return `${DEFAULT_CLASSNAME}__${option[usedKey]}`;
  }, [option, usedKey])

  return (
    <DropdownItemWrapper {...props}>
      <DropdownItemContainer itemHeight={itemHeight}>
        <DropdownItemOptionLabel
          className={classnames(DEFAULT_CLASSNAME, className)}
          htmlFor={memoizedHtmlFor}
        >
          {option[usedKey]}
          <DropdownItemOptionInput
            name={memoizedHtmlFor}
            value={option[usedValue]}
            onChange={onChange}
          />
        </DropdownItemOptionLabel>
      </DropdownItemContainer>
    </DropdownItemWrapper>
  )
}

export default DropdownItem;
