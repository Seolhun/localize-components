import styled from '@emotion/styled';
import React from 'react';
import GOCFormDescription from '../LocalizeFormDescription';

import GOCFormLabel from '../LocalizeFormLabel';
import { GOCFormUIProps } from '../LocalizeFormUITypes';
import { GOCCheckboxProps } from './LocalizeCheckbox';

export interface GOCCheckboxGroupProps
  extends GOCFormUIProps,
    GOCCheckboxDirectionProps {
  name?: string;

  onChange?: GOCCheckboxProps['onChange'];
}

export interface GOCCheckboxDirectionProps {
  /**
   * @default row
   */
  flexDirection?: 'row' | 'column';
}

const GOCCheckboxGroupWrapper = styled.div({});

const CheckboxChildrenWrapper = styled.div<GOCCheckboxDirectionProps>(
  ({ flexDirection }) => {
    return {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection,

      ...(flexDirection === 'column'
        ? {
            '.goc-group-checkbox + .goc-group-checkbox': {
              marginTop: '16px',
            },
          }
        : {
            '.goc-group-checkbox + .goc-group-checkbox': {
              marginLeft: '16px',
            },
          }),
    };
  },
);

const GOCCheckboxGroup: React.FC<GOCCheckboxGroupProps> = ({
  children,
  label,
  name,
  error,
  help,
  onChange,
  flexDirection = 'row',
}) => {
  const clonedChildren = React.Children.map(
    // @ts-ignore
    children,
    (child: React.ReactElement<GOCCheckboxProps>, index) => {
      if (typeof child === 'object') {
        return React.cloneElement(child, {
          key: `go-checkbox-${index + 1}`,
          className: 'goc-group-checkbox',
          name,
          onChange,
          ...child.props,
        });
      }
      return child;
    },
  );

  return (
    <GOCCheckboxGroupWrapper>
      {label && <GOCFormLabel htmlFor={name}>{label}</GOCFormLabel>}
      <CheckboxChildrenWrapper flexDirection={flexDirection}>
        {clonedChildren}
      </CheckboxChildrenWrapper>
      {help && <GOCFormDescription error={error}>{help}</GOCFormDescription>}
    </GOCCheckboxGroupWrapper>
  );
};

export { GOCCheckboxGroup };
export default GOCCheckboxGroup;
