import React, { FunctionComponent } from 'react';

import styled from '@emotion/styled';

import classnames from 'classnames';

import {
  getValidTheme,
} from '@seolhun//localize-components-styled-utils';
import {
  StyledProps,
  ThemeConfig,
  ThemesType,
  DarkenTheme,
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
   * Set this to change Radio css
   * @default {}
   */
  css?: {};
  /**
   * Set this to change Radio mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Radio subColor
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
  /**
   * Set this to change CheckBox Group onClick
   * @default undefined
   */
  onClickItems?: (...args: any[]) => any;
}

export interface RadioItemProps {
  [key: string]: any,
};

const Radio: FunctionComponent<RadioProps> = ({
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
  css = {},
  valueKey = 'value',
  mainColor = ThemeConfig.MAIN_THEME,
  subColor = ThemeConfig.SUB_THEME,
  align,
  onClickItems,
}) => {
  const usedKey = useValueKey
    ? valueKey
    : labelKey;

  const handleOnChange = () => {
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
        name={groupName || item[usedKey]}
      />
      <StyledCheckMark
        mainColor={mainColor}
        subColor={subColor}
        css={css}
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

const StyledRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledCheckMark = styled.span<StyledProps>`
  background-color: ${({
    subColor = ThemeConfig.SUB_THEME,
  }: StyledProps) => {
    return getValidTheme(subColor);
  }};
  border-radius: 50%;
  border: 1px solid ${DarkenTheme.dark_gray};
  display: inline-flex;
  height: 16px;
  justify-content: flex-start;
  left: 0;
  position: absolute;
  transition: border-color 0.5s, background-color 0.5s;
  width: 16px;

  .__Localize__Radio:checked ~ & {
    display: block;
    border: 1px solid ${({
      mainColor = ThemeConfig.MAIN_THEME,
    }) => {
      return getValidTheme(mainColor);
    }};
  }

  .__Localize__Radio:hover ~ & {
    border: 1px solid ${({
      mainColor = ThemeConfig.MAIN_THEME,
    }) => {
      return getValidTheme(mainColor);
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
      mainColor = ThemeConfig.MAIN_THEME,
    }) => {
      return getValidTheme(mainColor);
    }};
    border: 1px solid ${({
      mainColor = ThemeConfig.MAIN_THEME,
    }) => {
      return getValidTheme(mainColor);
    }};
    height: 8px;
    left: 2.5px;
    top: 2.5px;
    width: 8px;
    border-radius: 50%;
  }
`;

export default Radio;
