import React, { SFC } from 'react';

import styled from '@emotion/styled';

import classnames from 'classnames';

import {
  getValidTheme,
} from '@seolhun//localize-components-styled-utils';
import {
  StyledProps,
  ThemeConfig,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

import { RadioGroupAlign } from './RadioGroup';

export interface RadioProps {
  /**
   * Set this to change Radio label
   * @default '{}'
   */
  item: RadioItemProps;

  /**
   * Set this to change Radio checked
   * @default false
   */
  checked?: boolean;
  /**
   * Set this to change Radio className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change Radio groupName
   * @default ''
   */
  groupName?: string;
  /**
   * Set this to change Radio labelKey
   * @default 'label'
   */
  labelKey?: string;
  /**
   * Set this to change Radio onChange
   * @default () => null
   */
  onChange?: (item: RadioItemProps) => void;
  /**
   * Set this to change Radio onMouseOver
   * @default () => null
   */
  onMouseOver?: (...agrs: any[]) => void;
  /**
   * Set this to change Radio onMouseOut
   * @default () => null
   */
  onMouseOut?: (...agrs: any[]) => void;
  /**
   * Set this to change Radio useValueKey
   * @default false
   */
  useValueKey?: boolean;
  /**
   * Set this to change Radio stype
   * @default {}
   */
  style?: {};
  /**
   * Set this to change Radio ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Radio ours subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
  /**
   * Set this to change Radio valueKey
   * @default 'value'
   */
  valueKey?: string;

  /**
   * Set this to change Radio Group align
   * @default undefined
   */
  align?: RadioGroupAlign;
}


export interface RadioItemProps {
  [key: string]: any,
};

const Radio: SFC<RadioProps> = ({
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
}) => {
  const usedKey = useValueKey
    ? valueKey
    : labelKey;

  const handleOnChange = () => {
    onChange({
      label: item[labelKey],
      value: item[valueKey],
    });
  }

  return (
    <StyledRadioLabel
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
      <StyledRadio
        type='radio'
        id={item[usedKey]}
        checked={checked}
        className='__Localize__Radio'
        onChange={handleOnChange}
        value={item[usedKey]}
        name={groupName}
      />
      <StyledCheckMark
        mainColor={mainColor}
        subColor={subColor}
        style={{
          ...style,
        }}
      />
    </StyledRadioLabel>
  );
};

interface SizeProps {
    /**
   * Set this to change Radio Group align
   * @default undefined
   */
  align?: RadioGroupAlign;
}

const StyledRadioLabel = styled.label<SizeProps>`
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

const StyledRadio = styled.input`
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
  border-radius: 50%;
  border: 1px solid ${({
    mainColor = ThemeConfig.MAIN_THEME,
  }: StyledProps) => {
    return getValidTheme(mainColor);
  }};
  height: 16px;
  left: 0;
  position: absolute;
  top: 5px;
  transition: border-color 0.5s, background-color 0.5s;
  width: 16px;

  .__Localize__Radio:checked ~ & {
    display: block;
    border: 1px solid ${({
      subColor = ThemeConfig.SUB_THEME,
    }: StyledProps) => {
      return getValidTheme(subColor);
    }};
  }

  .__Localize__Radio:hover ~ & {
    border: 1px solid ${({
      subColor = ThemeConfig.SUB_THEME,
    }: StyledProps) => {
      return getValidTheme(subColor);
    }};
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  .__Localize__Radio:checked ~ &:after {
    display: block;
    transition: transform .3s ease-out;
    transform: scale(1.0);
  }

  &:after {
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    background: ${({
      subColor = ThemeConfig.SUB_THEME,
    }: StyledProps) => {
      return getValidTheme(subColor);
    }};
    border: 1px solid ${({
      subColor = ThemeConfig.SUB_THEME,
    }: StyledProps) => {
      return getValidTheme(subColor);
    }};
    height: 8px;
    left: 2.5px;
    top: 2.5px;
    width: 8px;
    border-radius: 50%;
  }
`;

export default Radio;
