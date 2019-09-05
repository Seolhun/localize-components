import React, { FunctionComponent, ReactNode } from 'react';

import styled from '@emotion/styled';

import {
  ThemeConfig,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

export interface RadioItemProps {
  [key: string]: any;
}

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
   * Set this to change Radio Group mainColor
   * @default ThemeConfig.primaryColor = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Radio Group subColor
   * @default ThemeConfig.secondaryColor = grey
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

const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  children,
  groupName,
  labelKey = 'label',
  valueKey = 'value',
  useValueKey = false,
  mainColor = ThemeConfig.primaryColor,
  subColor = ThemeConfig.secondaryColor,
  align = 'vertical',
  gap = '10px',
  onClickItems = () => null,
}) => {
  return (
    <RadioGroupContainer
      className="__Localize__RadioGroup"
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
  );
};

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
