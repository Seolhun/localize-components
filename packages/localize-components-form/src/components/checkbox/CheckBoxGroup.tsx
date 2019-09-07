import React, { FunctionComponent, ReactNode } from 'react';

import styled from '@emotion/styled';

import {
  LocalizeTheme,
  LocalizeThemesType,
} from '@seolhun/localize-components-styled-types';

export interface RadioItemProps {
  [key: string]: any;
}

export type CheckBoxGroupAlign = 'vertical' | 'horizontal';

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
   * Set this to change CheckBox Group mainColor
   * @default LocalizeTheme.primaryColor = royal_blue
   */
  mainColor?: LocalizeThemesType;
  /**
   * Set this to change CheckBox Group subColor
   * @default LocalizeTheme.secondaryColor = grey
   */
  subColor?: LocalizeThemesType;

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

export const CheckBoxGroupContainer = styled.div<CheckBoxGroupContainerProps>(({
  align,
  gap,
}) => {
  const getGapStylesByAlign = () => {
    const isVertical = align === 'vertical';
    if (isVertical) {
      return {
        marginBottom: `${gap}`,
      }
    }
    return {
      marginRight: `${gap}`,
    }
  }
  return {
    '& > *:not(:last-child)': {
      ...getGapStylesByAlign(),
    },
  }
})

const CheckBoxGroup: FunctionComponent<CheckBoxGroupProps> = ({
  children,
  groupName,
  labelKey = 'label',
  valueKey = 'value',
  useValueKey = false,
  mainColor = LocalizeTheme.primaryColor,
  subColor = LocalizeTheme.secondaryColor,
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
      <>
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
      </>
    </CheckBoxGroupContainer>
  );
};

export default CheckBoxGroup;
