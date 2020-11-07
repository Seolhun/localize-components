import styled from '@emotion/styled';
import React from 'react';
import GOCFormDescription from '../LocalizeFormDescription';

import GOCFormLabel from '../LocalizeFormLabel';
import { GOCFormUIProps } from '../LocalizeFormStateProps';
import { GOCRadioProps } from './GOCRadio';

export interface GOCRadioGroupProps extends GOCFormUIProps, GOCRadioDirectionProps {
  name?: string;

  onChange?: GOCRadioProps['onChange'];
}

export interface GOCRadioDirectionProps {
  /**
   * @default row
   */
  flexDirection?: 'row' | 'column';
}

const GOCRadioGroupWrapper = styled.div({});

const RadioChildrenWrapper = styled.div<GOCRadioDirectionProps>(({ flexDirection }) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection,

    ...(flexDirection === 'column'
      ? {
          '.goc-group-radio + .goc-group-radio': {
            marginTop: '16px',
          },
        }
      : {
          '.goc-group-radio + .goc-group-radio': {
            marginLeft: '16px',
          },
        }),
  };
});

const GOCRadioGroup: React.FC<GOCRadioGroupProps> = ({
  children,
  label,
  name,
  error,
  help,
  onChange,
  flexDirection = 'row',
}) => {
  const reactChildren = React.Children.map(
    // @ts-ignore
    children,
    (child: React.ReactElement<GOCRadioProps>, index) => {
      if (typeof child === 'object') {
        return React.cloneElement(child, {
          key: `goc-radio-${index + 1}`,
          className: 'goc-group-radio',
          name,
          onChange,
          ...child.props,
        });
      }
      return child;
    },
  );

  return (
    <GOCRadioGroupWrapper>
      {label && <GOCFormLabel htmlFor={name}>{label}</GOCFormLabel>}
      <RadioChildrenWrapper flexDirection={flexDirection}>{reactChildren}</RadioChildrenWrapper>
      {help && <GOCFormDescription error={error}>{help}</GOCFormDescription>}
    </GOCRadioGroupWrapper>
  );
};

export { GOCRadioGroup };
export default GOCRadioGroup;
