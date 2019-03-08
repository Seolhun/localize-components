import React, { SFC, ReactNode } from 'react';

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
}) => {

  return (
    <div className='__Localize__'>
      {children({
        children,
        groupName,
        labelKey,
        valueKey,
        useValueKey,
        mainColor,
        subColor,
        align,
      })}
    </div>
  )
}

export default RadioGroup;
