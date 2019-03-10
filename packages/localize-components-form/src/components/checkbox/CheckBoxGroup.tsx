import React, { SFC, ReactNode, useState, useEffect } from 'react';

import styled from '@emotion/styled';

import {
  ThemeConfig,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

export interface RadioItemProps {
  [key: string]: any,
};

export type CheckBoxGroupAlign = 'vertical' | 'horizontal' | string;

export interface CheckBoxGroupProps {
  /**
   * Set this to change CheckBox Group children
   */
  children: (props: CheckBoxGroupProps) => ReactNode;
  /**
   * Set this to change CheckBox Group name
   */
  groupName?: string;

  /**
   * Set this to change CheckBox Group labelKey
   * @default 'label'
   */
  labelKey?: string;
  /**
   * Set this to change CheckBox Group valueKey
   * @default 'value'
   */
  valueKey?: string;
  /**
   * Set this to change CheckBox Group useValueKey
   * @default false
   */
  useValueKey?: boolean;
  /**
   * Set this to change CheckBox Group ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change CheckBox Group ours subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;

  /**
   * Set this to change CheckBox Group align
   * @default 'vertical'
   */
  align?: CheckBoxGroupAlign;
  /**
   * Set this to change CheckBox Group gap
   * @default '10px'
   */
  gap?: string;
  /**
   * Set this to change CheckBox Group onClick
   * @default () => any;
   */
  onClickItems?: (...args: any[]) => any;
}

interface CheckBoxGroupContainerProps {
  align: CheckBoxGroupAlign;
  gap: string;
}

const CheckBoxGroup: SFC<CheckBoxGroupProps> = ({
  children,
  groupName,
  labelKey = 'label',
  valueKey = 'value',
  useValueKey = false,
  mainColor = ThemeConfig.MAIN_THEME,
  subColor = ThemeConfig.SUB_THEME,
  align = 'vertical',
  gap = '10px',
  onClickItems = () => null,
}) => {

  return (
    <CheckBoxGroupContainer
      className='__Localize__CheckBoxGroup'
      align={align}
      gap={gap}
    >
      {children({
        children,
        groupName,
        labelKey,
        valueKey,
        useValueKey,
        mainColor,
        subColor,
        align,
        onClickItems,
      })}
    </CheckBoxGroupContainer>
  )
}

const CheckBoxGroupContainer = styled.div<CheckBoxGroupContainerProps>`
  & > *:not(:last-child) {
    margin-right: ${({ align, gap }) => {
      if (align === 'horizontal') {
        return `${gap}`;
      }
      return '0';
    }};
  }
`;


export default CheckBoxGroup;
