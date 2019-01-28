import React, { SFC } from 'react';

import styled from '@emotion/styled';
import { darken, lighten } from 'polished';

import classnames from 'classnames';

import {
  getIsLightenTheme,
  getValidTheme,
} from '@seolhun//localize-components-styled-utils';
import {
  ColorProps,
  ThemeConfig,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

export interface CheckBoxProps {
  /**
   * Set this to change CheckBox label
   * @default '{}'
   */
  item: CheckBoxItemProps;
  // isNotRequired
  /**
   * Set this to change CheckBox checked
   * @default false
   */
  checked?: boolean;
  /**
   * Set this to change CheckBox className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change CheckBox groupName
   * @default ''
   */
  groupName?: string;
  /**
   * Set this to change CheckBox labelKey
   * @default 'label'
   */
  labelKey?: string;
  /**
   * Set this to change CheckBox onChange
   * @default () => null
   */
  onChange?: (item: CheckBoxItemProps) => void;
  /**
   * Set this to change CheckBox onMouseOver
   * @default () => null
   */
  onMouseOver?: (...agrs: any[]) => void;
  /**
   * Set this to change CheckBox onMouseOut
   * @default () => null
   */
  onMouseOut?: (...agrs: any[]) => void;
  /**
   * Set this to change CheckBox useValueKey
   * @default false
   */
  useValueKey?: boolean;
  /**
   * Set this to change CheckBox stype
   * @default {}
   */
  style?: {};
  /**
   * Set this to change CheckBox ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change CheckBox ours subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change CheckBox valueKey
   * @default 'value'
   */
  valueKey?: string;
}

export interface CheckBoxItemProps {
  label: string;
  value: string;
}

const CheckBox: SFC<CheckBoxProps> = ({
  item,
  // IsNotRequired
  checked = false,
  className = '',
  groupName = '',
  labelKey = 'label',
  onChange = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  useValueKey = false,
  style = {},
  valueKey = 'value',
  mainColor = ThemeConfig.MAIN_THEME,
  subColor = ThemeConfig.SUB_THEME,
}) => {
  const usedKey = useValueKey
    ? valueKey
    : labelKey;

  return (
    <StyledCheckBoxLabel
      key={item[usedKey]}
      htmlFor={item[usedKey]}
      className={classnames(
        '__Localize__',
        className,
      )}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      {item[usedKey]}
      <StyledCheckBox
        id={item[usedKey]}
        checked={checked}
        className='CheckBox'
        type='checkbox'
        onChange={() => onChange({
          label: item[labelKey],
          value: item[valueKey],
        })}
        name={groupName}
      />
      <StyledCheckMark
        className='CheckMark'
        mainColor={mainColor}
        subColor={subColor}
        style={{
          ...style,
        }}
      />
    </StyledCheckBoxLabel>
  );
};

const StyledCheckBoxLabel = styled.label`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  align-items: center;
  cursor: pointer;
  display: flex;
  padding-left: 30px;
  position: relative;
  user-select: none;
  width: 100%;
`;

const StyledCheckBox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledCheckMark = styled.span<ColorProps>`
  background-color: ${({
    mainColor = ThemeConfig.MAIN_THEME,
  }: ColorProps) => {
    return getValidTheme(mainColor);
  }};
  border-radius: 3px;
  border: 1px solid transparent;
  height: 16px;
  left: 0;
  position: absolute;
  top: 5px;
  transition: border-color 0.5s, background-color 0.5s;
  width: 16px;

  .CheckBox:hover ~ & {
    border: 1px solid ${({
      mainColor = ThemeConfig.MAIN_THEME,
    }: ColorProps) => {
      if (getIsLightenTheme(mainColor)) {
        return getValidTheme(mainColor);
      }
      return getValidTheme(mainColor);
    }};

    input:checked ~ & {
      background-color: ${({
        mainColor = ThemeConfig.MAIN_THEME,
      }: ColorProps) => {
        if (getIsLightenTheme(mainColor)) {
          return darken(0.1, getValidTheme(mainColor));
        }
        return lighten(0.1, getValidTheme(mainColor));
      }};
    }
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  .CheckBox:checked ~ &:after {
    display: block;
  }

  &:after {
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border: solid ${({
      subColor = ThemeConfig.SUB_THEME,
    }: ColorProps) => {
      return getValidTheme(subColor);
    }};
    border-width: 0 2px 2px 0;
    height: 8px;
    left: 5px;
    top: 2px;
    transform: rotate(45deg);
    width: 4px;
  }
`;

export default CheckBox;
