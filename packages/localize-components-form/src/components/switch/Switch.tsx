import React, { FunctionComponent, useCallback, ChangeEvent } from 'react';

import styled from '@emotion/styled';

import classnames from 'classnames';

import { getValidTheme } from '@seolhun//localize-components-styled-utils';
import {
  LocalizeStyledProps,
  LocalizeTheme,
  LocalizeThemesType,
  ILocalizeTheme,
} from '@seolhun/localize-components-styled-types';

export interface SwitchProps {
  /**
   * Set this to change Switch checked
   */
  checked: boolean;
  /**
   * Set this to change Switch items
   * @default undefined
   */
  items?: [ISwitchItem, ISwitchItem];

  /**
   * Set this to change Switch className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change Switch groupName
   * @default ''
   */
  groupName?: string;
  /**
   * Set this to change Switch labelKey
   * @default 'label'
   */
  labelKey?: string;
  /**
   * Set this to change Switch onChange
   * @default () => null
   */
  onChange?: (event?: ChangeEvent, checkedItem?: ISwitchCheckedItem) => void;
  /**
   * Set this to change Switch onMouseOver
   * @default () => null
   */
  onMouseOver?: (...agrs: any[]) => void;
  /**
   * Set this to change Switch onMouseOut
   * @default () => null
   */
  onMouseOut?: (...agrs: any[]) => void;
  /**
   * Set this to change Switch useValueKey
   * @default false
   */
  useValueKey?: boolean;
  /**
   * Set this to change Switch css
   * @default {}
   */
  css?: {};
  /**
   * Set this to change Switch mainColor
   * @default LocalizeTheme.primaryColor = royal_blue
   */
  mainColor?: LocalizeThemesType;
  /**
   * Set this to change Switch subColor
   * @default LocalizeTheme.secondaryColor = grey
   */
  subColor?: LocalizeThemesType;
  /**
   * Set this to change Switch valueKey
   * @default 'value'
   */
  valueKey?: string;
}

export interface ISwitchItem {
  label: string;
  value: string;
}

export interface ISwitchCheckedItem {
  checkedItem?: ISwitchItem;
  checked?: boolean;
}

const Switch: FunctionComponent<SwitchProps> = ({
  checked,
  //
  items,
  className = '',
  groupName = '',
  mainColor = LocalizeTheme.primaryColor,
  subColor = LocalizeTheme.secondaryColor,
  onChange = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  useValueKey = false,
  labelKey = 'label',
  valueKey = 'value',
  css = {},
}) => {
  const usedKey = useValueKey ? valueKey : labelKey;
  const checkedItem = checked && items.length ? items[0] : items[1];

  const handleChecked = useCallback((event: ChangeEvent) => {
    onChange(event, {
      [labelKey]: checkedItem[labelKey],
      [valueKey]: checkedItem[valueKey],
      checked,
    })
  }, [checked])

  return (
    <StyledSwitchLabel
      key={checkedItem[usedKey]}
      htmlFor={checkedItem[usedKey]}
      className={classnames('__Localize__SwitchLabel', className)}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      <StyledSwitchInput
        id={checkedItem[usedKey]}
        checked={checked}
        className={classnames('__Localize__SwitchInput', className)}
        type="checkbox"
        onChange={handleChecked}
        value={checkedItem[usedKey]}
        name={groupName}
      />
      <StyledSlider
        className={classnames('__Localize__SwitchSlider', className)}
        mainColor={mainColor}
        subColor={subColor}
        css={css}
      />
    </StyledSwitchLabel>
  );
};

const StyledSwitchLabel = styled.label`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
  margin: 0 5px;

  input:checked + .Slider:before {
    -ms-transform: translateX(26px);
    -webkit-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const StyledSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledSlider = styled.span<LocalizeStyledProps, ILocalizeTheme>(({
  mainColor = LocalizeTheme.primaryColor,
  subColor = LocalizeTheme.secondaryColor,
  theme,
}) => {
  return {
    backgroundColor: getValidTheme(mainColor),
    borderRadius: '34px',
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: '-5px',
    bottom: 0,
    left: 0,
    transition: '0.4s',

    ['&:before']: {
      content: '',
      backgroundColor: getValidTheme(subColor),
      borderRadius: '50%',
      position: 'absolute',
      left: '1px',
      top: '2px',
      height: '22px',
      width: '22px',
      transition: '0.4s',
    }
  }
})

export default Switch;
