import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__CheckBoxGroup';

export type LocalizeCheckBoxAlignType = 'vertical' | 'horizontal';

export interface LocalizeCheckBoxProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change CheckBox Group children
   */
  children: (props: LocalizeCheckBoxProps) => React.ReactNode;

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
   * Set this to change CheckBox Group align
   * @default 'vertical'
   */
  align?: LocalizeCheckBoxAlignType;

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

interface LocalizeCheckBoxContainerProps {
  align: LocalizeCheckBoxAlignType;
  gap: string;
}

const LocalizeCheckBoxContainer = styled.div<LocalizeCheckBoxContainerProps>(
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

export const LocalizeCheckBox: React.FC<LocalizeCheckBoxProps> = ({
  children,
  groupName,
  className,
  labelKey = 'label',
  valueKey = 'value',
  useValueKey = false,
  align = 'vertical',
  gap = '10px',
  onClickItems = () => null,
}) => {
  return (
    <LocalizeCheckBoxContainer
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
        onClickItems,
      })}
    </LocalizeCheckBoxContainer>
  );
};

export default LocalizeCheckBox;
