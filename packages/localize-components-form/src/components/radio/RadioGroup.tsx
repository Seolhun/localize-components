import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import { LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__RadioGroup';

export type RadioGroupAlignType = 'vertical' | 'horizontal';

export interface RadioGroupProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change Radio Group children
   */
  children: (props: RadioGroupProps) => React.ReactNode;

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
   * Set this to change Radio Group align
   * @default 'vertical'
   */
  align?: RadioGroupAlignType;

  /**
   * Set this to change Radio Group gap
   * @default '10px'
   */
  gap?: string;

  /**
   * Set this to change Radio Group onClick
   * @default () => any;
   */
  onClick?: (...args: any[]) => any;
}

export interface RadioGroupContainerProps {
  align: RadioGroupAlignType;
  gap: string;
}

export const RadioGroupContainer = styled.div<RadioGroupContainerProps>(
  ({ align, gap }) => {
    const getGapStylesByAlign = () => {
      const isVertical = align === 'vertical';
      if (isVertical) {
        return {
          marginBottom: `${gap}`,
        };
      }
      return {
        marginRight: `${gap}`,
      };
    };
    return {
      '& > *:not(:last-child)': {
        ...getGapStylesByAlign(),
      },
    };
  },
);

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  groupName,
  className,
  mainColor,
  subColor,
  labelKey = 'label',
  valueKey = 'value',
  useValueKey = false,
  align = 'vertical',
  gap = '10px',
  onClick = () => null,
}) => {
  return (
    <RadioGroupContainer
      className={classnames(DEFAULT_CLASSNAME, className)}
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
        onClick,
      })}
    </RadioGroupContainer>
  );
};
