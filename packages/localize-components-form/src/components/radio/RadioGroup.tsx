import React, { SFC, ReactNode } from 'react';

import styled from '@emotion/styled';

import {
  ThemeConfig,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

export interface RadioItemProps {
  [key: string]: any,
};

export type RadioGroupAlign = 'vertical' | 'horizontal' | string;

export interface RadioGroupProps {
  /**
   * Set this to change Radio Group children
   */
  children: (props: RadioGroupProps) => ReactNode;
  /**
   * Set this to change Radio Group name
   */
  groupName?: string;

  /**
   * Set this to change Radio Group labelKey
   * @default 'label'
   */
  labelKey?: string;
  /**
   * Set this to change Radio Group valueKey
   * @default 'value'
   */
  valueKey?: string;
  /**
   * Set this to change Radio Group useValueKey
   * @default false
   */
  useValueKey?: boolean;
  /**
   * Set this to change Radio Group ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Radio Group ours subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;

  /**
   * Set this to change Radio Group align
   * @default 'vertical'
   */
  align?: RadioGroupAlign;
  /**
   * Set this to change Radio Group gap
   * @default '10px'
   */
  gap?: string;
  /**
   * Set this to change Radio Group onClick
   * @default () => any;
   */
  onClickItems?: (...args: any[]) => any;
}

interface RadioGroupContainerProps {
  align: RadioGroupAlign;
  gap: string;
}

const RadioGroup: SFC<RadioGroupProps> = ({
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
    <RadioGroupContainer
      className='__Localize__RadioGroup'
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
    </RadioGroupContainer>
  )
}

const RadioGroupContainer = styled.div<RadioGroupContainerProps>`
  & > *:not(:last-child) {
    margin-right: ${({ align, gap }) => {
      if (align === 'horizontal') {
        return `${gap}`;
      }
      return '0';
    }};
  }
`;


export default RadioGroup;
