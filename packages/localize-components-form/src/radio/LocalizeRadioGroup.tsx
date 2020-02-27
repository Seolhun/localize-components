import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import { LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__RadioGroup';

export type LocalizeRadioGroupAlignType = 'vertical' | 'horizontal';

export interface LocalizeRadioGroupProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change Radio Group children
   */
  children: (props: LocalizeRadioGroupProps) => React.ReactNode;

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
  align?: LocalizeRadioGroupAlignType;

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

interface LocalizeRadioGroupContainerProps {
  align: LocalizeRadioGroupAlignType;
  gap: string;
}

const LocalizeRadioGroupContainer = styled.div<
  LocalizeRadioGroupContainerProps
>(({ align, gap }) => {
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
});

export const LocalizeRadioGroup: React.FC<LocalizeRadioGroupProps> = ({
  children,
  groupName,
  className,
  labelKey = 'label',
  valueKey = 'value',
  useValueKey = false,
  align = 'vertical',
  gap = '10px',
  onClick = () => null,
}) => {
  return (
    <LocalizeRadioGroupContainer
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
        align,
        onClick,
      })}
    </LocalizeRadioGroupContainer>
  );
};

export default LocalizeRadioGroup;
