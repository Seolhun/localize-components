import styled from '@emotion/styled';
import React from 'react';
import GOCFormDescription from '../LocalizeFormDescription';

import GOCFormLabel from '../LocalizeFormLabel';
import { LocalizeFormStateProps } from '../LocalizeFormStateProps';
import { LocalizeCheckboxProps } from './LocalizeCheckbox';

export interface LocalizeCheckboxGroupProps extends LocalizeFormStateProps, LocalizeCheckboxDirectionProps {
  name?: string;

  onChange?: LocalizeCheckboxProps['onChange'];
}

export interface LocalizeCheckboxDirectionProps {
  /**
   * @default row
   */
  flexDirection?: 'row' | 'column';
}

const LocalizeCheckboxGroupWrapper = styled.div({});

const CheckboxChildrenWrapper = styled.div<LocalizeCheckboxDirectionProps>(({ flexDirection }) => {
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
});

const LocalizeCheckboxGroup: React.FC<LocalizeCheckboxGroupProps> = ({
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
    (child: React.ReactElement<LocalizeCheckboxProps>, index) => {
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
    <LocalizeCheckboxGroupWrapper>
      {label && <GOCFormLabel htmlFor={name}>{label}</GOCFormLabel>}
      <CheckboxChildrenWrapper flexDirection={flexDirection}>{clonedChildren}</CheckboxChildrenWrapper>
      {help && <GOCFormDescription error={error}>{help}</GOCFormDescription>}
    </LocalizeCheckboxGroupWrapper>
  );
};

export { LocalizeCheckboxGroup };
export default LocalizeCheckboxGroup;
