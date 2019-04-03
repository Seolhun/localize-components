import React, { SFC } from 'react';

import styled from '@emotion/styled';
import { darken, lighten } from 'polished';

import classnames from 'classnames';

import {
  getIsLightenTheme,
  getValidTheme,
} from '@seolhun//localize-components-styled-utils';
import {
  StyledProps,
  ThemeConfig,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

import { CheckBoxGroupAlign } from './CheckBoxGroup';

export interface CheckBoxProps {
  /**
   * Set this to change CheckBox label
   * @default '{}'
   */
  item: CheckBoxItemProps;

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

  /**
   * Set this to change Radio Group align
   * @default undefined
   */
  align?: CheckBoxGroupAlign;
  /**
   * Set this to change CheckBox Group onClick
   * @default undefined
   */
  onClickItems?: (...args: any[]) => any;
}


export interface CheckBoxItemProps {
  [key: string]: any,
};

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
  align,
  onClickItems,
}) => {
  const usedKey = useValueKey
    ? valueKey
    : labelKey;

  const handleOnChange = (item) => {
    onChange({
      label: item[labelKey],
      value: item[valueKey],
    });

    if (onClickItems) {
      onClickItems({
        label: item[labelKey],
        value: item[valueKey],
      });
    }
  }

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
      align={align}
    >
      {item[usedKey]}
      <StyledCheckBox
        id={item[usedKey]}
        checked={checked}
        className='__Localize__CheckBox'
        type='checkbox'
        onChange={handleOnChange}
        value={item[usedKey]}
        name={groupName || item[usedKey]}
      />
      <StyledCheckMark
        mainColor={mainColor}
        subColor={subColor}
        style={{
          ...style,
        }}
      />
    </StyledCheckBoxLabel>
  );
};

interface SizeProps {
  /**
 * Set this to change Radio Group align
 * @default undefined
 */
align?: CheckBoxGroupAlign;
}


const StyledCheckBoxLabel = styled.label<SizeProps>`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  align-items: center;
  cursor: pointer;
  display: ${({
    align,
  }) => {
    if (align === 'horizontal') {
      return 'inline-flex';
    }
    return 'flex';
  }};
  height: auto;
  padding-left: 30px;
  position: relative;
  user-select: none;
  width: ${({
    align,
  }) => {
    if (align === 'horizontal') {
      return 'auto';
    }
    return '100%';
  }};
`;

const StyledCheckBox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledCheckMark = styled.span<StyledProps>`
  background-color: ${({
    mainColor = ThemeConfig.MAIN_THEME,
  }: StyledProps) => {
    return getValidTheme(mainColor);
  }};
  border-radius: 6px;
  border: 1px solid transparent;
  display: inline-flex;
  height: 16px;
  justify-content: flex-start;
  left: 0;
  position: absolute;
  transition: border-color 0.5s, background-color 0.5s;
  width: 16px;

  .__Localize__CheckBox:hover ~ & {
    border: 1px solid ${({
      mainColor = ThemeConfig.MAIN_THEME,
    }: StyledProps) => {
      if (getIsLightenTheme(mainColor)) {
        return getValidTheme(mainColor);
      }
      return getValidTheme(mainColor);
    }};

    input:checked ~ & {
      background-color: ${({
        mainColor = ThemeConfig.MAIN_THEME,
      }: StyledProps) => {
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

  .__Localize__CheckBox:checked ~ &:after {
    display: block;
  }

  &:after {
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border: solid ${({
      subColor = ThemeConfig.SUB_THEME,
    }: StyledProps) => {
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
