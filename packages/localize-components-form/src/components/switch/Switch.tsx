import React, { SFC } from 'react';

import styled from '@emotion/styled';

import classnames from 'classnames';

import {
  getValidTheme,
} from '@seolhun//localize-components-styled-utils';
import {
  ColorProps,
  ThemeConfig,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

export interface SwitchProps {
  /**
   * Set this to change Switch label
   * @default {}
   */
  item: SwitchItemProps;
  // isNotRequired
  /**
   * Set this to change Switch checked
   * @default false
   */
  checked?: boolean;
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
  onChange?: (item: SwitchItemProps) => void;
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
   * Set this to change Switch stype
   * @default {}
   */
  style?: {};
  /**
   * Set this to change Switch ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Switch ours subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change Switch valueKey
   * @default 'value'
   */
  valueKey?: string;
}

export interface SwitchItemProps {
  label: string;
  value: string;
}

const Switch: SFC<SwitchProps> = ({
  item,
  // IsNotRequired
  checked = false,
  className = '',
  groupName = '',
  labelKey = 'label',
  mainColor = ThemeConfig.MAIN_THEME,
  onChange = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  style = {},
  subColor = ThemeConfig.SUB_THEME,
  useValueKey = false,
  valueKey = 'value',
}) => {
  const usedKey = useValueKey
    ? valueKey
    : labelKey;

  return (
    <StyledSwitchLabel
      key={item[usedKey]}
      htmlFor={item[usedKey]}
      className={classnames(
        '__Localize__',
        className,
      )}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      <StyledSwitchInput
        id={item[usedKey]}
        checked={checked}
        className='Switch'
        type='checkbox'
        onChange={() => onChange({
          label: item[labelKey],
          value: item[valueKey],
        })}
        value={item[usedKey]}
        name={groupName}
      />
      <StyledSlider
        className='Slider'
        mainColor={mainColor}
        subColor={subColor}
        style={{
          ...style,
        }}
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

const StyledSlider = styled.span<ColorProps>`
  -webkit-transition: .4s;
  background-color: ${({
    mainColor = ThemeConfig.MAIN_THEME,
  }: ColorProps) => {
    return getValidTheme(mainColor);
  }};
  border-radius: 34px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: -5px;
  top: 0;
  transition: .4s;

  &:before {
    -webkit-transition: .4s;
    background-color: ${({
      subColor = ThemeConfig.SUB_THEME,
    }: ColorProps) => {
      return getValidTheme(subColor);
    }};
    border-radius: 50%;
    bottom: 3px;
    content: "";
    height: 20px;
    left: 5px;
    position: absolute;
    transition: .4s;
    width: 20px;
  }
`;

export default Switch;
