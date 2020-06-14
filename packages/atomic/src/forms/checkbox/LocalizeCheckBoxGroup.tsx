import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeProps } from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__CheckBoxGroup';

export type LocalizeCheckBoxGroupAlignType = 'vertical' | 'horizontal';

interface LocalizeCheckBoxGroupProps extends LocalizeProps {
  /**
   * Set this to change CheckBox Group name
   */
  groupName?: string;

  /**
   * Set this to change CheckBox Group align
   * @default 'vertical'
   */
  groupAlign?: LocalizeCheckBoxGroupAlignType;

  /**
   * Set this to change CheckBox Group gap
   * @default '10px'
   */
  gap?: string;
}

interface LocalizeCheckBoxContainerProps {
  groupAlign: LocalizeCheckBoxGroupAlignType;

  gap: string;
}

const getGapStylesByAlign = (
  groupAlign: LocalizeCheckBoxContainerProps['groupAlign'],
  gap: LocalizeCheckBoxContainerProps['gap'],
) => {
  const isVertical = groupAlign === 'vertical';
  if (isVertical) {
    return {
      marginBottom: `${gap}`,
    };
  }
  return {
    marginRight: `${gap}`,
  };
};

const LocalizeCheckBoxContainer = styled.div<LocalizeCheckBoxContainerProps>(
  ({ groupAlign, gap }) => {
    return {
      '& > *:not(:last-child)': {
        ...getGapStylesByAlign(groupAlign, gap),
      },
    };
  },
);

const LocalizeCheckBoxGroup: React.FC<LocalizeCheckBoxGroupProps> = ({
  children,
  className,
  groupName,
  groupAlign = 'horizontal',
  gap = '1rem',
  ...props
}) => {
  return (
    <LocalizeCheckBoxContainer
      className={classnames(DEFAULT_CLASSNAME, className)}
      groupAlign={groupAlign}
      gap={gap}
    >
      {/* @ts-ignore */}
      {React.Children.map((children) =>
        React.createElement(children, {
          groupName,
          groupAlign,
          ...props,
        }),
      )}
    </LocalizeCheckBoxContainer>
  );
};

export { LocalizeCheckBoxGroup, LocalizeCheckBoxGroupProps };

export default LocalizeCheckBoxGroup;
