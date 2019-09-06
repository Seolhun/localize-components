import React, { FunctionComponent, useCallback, ChangeEvent } from 'react';

import styled from '@emotion/styled';

import classnames from 'classnames';

import { getValidTheme } from '@seolhun//localize-components-styled-utils';
import {
  StyledProps,
  ThemeConfig,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

export interface SwitchProps {
  /**
   * Set this to change Switch label
   */
  items: ISwitchItem[];
  /**
   * Set this to change Switch checked
   * @default false
   */
  checked: boolean;
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
   * @default ThemeConfig.primaryColor = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Switch subColor
   * @default ThemeConfig.secondaryColor = grey
   */
  subColor?: ThemesType;
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
  items,
  // IsNotRequired
  checked = false,
  className = '',
  groupName = '',
  labelKey = 'label',
  mainColor = ThemeConfig.primaryColor,
  onChange = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  css = {},
  subColor = ThemeConfig.secondaryColor,
  useValueKey = false,
  valueKey = 'value',
}) => {
  const usedKey = useValueKey ? valueKey : labelKey;
  const checkedItem = checked ? items[0] : items[1];
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
      className={classnames('__Localize__', className)}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      <StyledSwitchInput
        id={checkedItem[usedKey]}
        checked={checked}
        className="Switch"
        type="checkbox"
        onChange={handleChecked}
        value={checkedItem[usedKey]}
        name={groupName}
      />
      <StyledSlider
        className="Slider"
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

const StyledSlider = styled.span<StyledProps>`
  -webkit-transition: 0.4s;
  background-color: ${({
    mainColor = ThemeConfig.primaryColor,
  }: StyledProps) => {
    return getValidTheme(mainColor);
  }};
  border-radius: 34px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: -5px;
  top: 0;
  transition: 0.4s;

  &:before {
    -webkit-transition: 0.4s;
    background-color: ${({
      subColor = ThemeConfig.secondaryColor,
    }: StyledProps) => {
      return getValidTheme(subColor);
    }};
    border-radius: 50%;
    bottom: 3px;
    content: '';
    height: 20px;
    left: 5px;
    position: absolute;
    transition: 0.4s;
    width: 20px;
  }
`;

export default Switch;
