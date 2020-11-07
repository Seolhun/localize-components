import styled from '@emotion/styled';
import React from 'react';

import { LocalizeFormWrapper } from '../wrapper';
import { LocalizeFormStateProps } from '../LocalizeFormStateProps';
import { LocalizeCheckboxProps } from './LocalizeCheckbox';

const CLASSNAME = '__Localize__CheckboxGroup';
type Props = LocalizeCheckboxDirectionProps & LocalizeFormStateProps;

export interface LocalizeCheckboxGroupProps extends Props {
  name?: string;

  onChange?: LocalizeCheckboxProps['onChange'];
}

export interface LocalizeCheckboxDirectionProps {
  /**
   * @default row
   */
  flexDirection?: 'row' | 'column';
}

const CheckboxChildrenWrapper = styled.div<LocalizeCheckboxDirectionProps>(({ flexDirection }) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection,

    ...(flexDirection === 'column'
      ? {
          [`.${CLASSNAME} + .${CLASSNAME}`]: {
            marginTop: '16px',
          },
        }
      : {
          [`.${CLASSNAME} + .${CLASSNAME}`]: {
            marginLeft: '16px',
          },
        }),
  };
});

const LocalizeCheckboxGroup: React.FC<LocalizeCheckboxGroupProps> = ({
  children,
  name,
  label,
  help,
  error,
  onChange,
  flexDirection = 'row',
}) => {
  const clonedChildren = React.Children.map(
    // @ts-ignore
    children,
    (child: React.ReactElement<LocalizeCheckboxProps>, index) => {
      if (typeof child === 'object') {
        return React.cloneElement(child, {
          key: index + 1,
          className: CLASSNAME,
          name,
          onChange,
          ...child.props,
        });
      }
      return child;
    },
  );

  return (
    <LocalizeFormWrapper name={name} label={label} help={help} error={error}>
      <CheckboxChildrenWrapper flexDirection={flexDirection}>{clonedChildren}</CheckboxChildrenWrapper>
    </LocalizeFormWrapper>
  );
};

export { LocalizeCheckboxGroup };
export default LocalizeCheckboxGroup;
