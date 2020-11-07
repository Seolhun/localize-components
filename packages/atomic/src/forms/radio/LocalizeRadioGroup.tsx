import styled from '@emotion/styled';
import React from 'react';
import GOCFormDescription from '../LocalizeFormDescription';

import GOCFormLabel from '../LocalizeFormLabel';
import { LocalizeFormStateProps } from '../LocalizeFormStateProps';
import { LocalizeRadioProps } from './LocalizeRadio';


const CLASSNAME = '__Localize__CheckboxGroup';
type Props = LocalizeCheckboxDirectionProps & LocalizeFormStateProps;

export interface LocalizeRadioGroupProps extends Props {
  name?: string;

  onChange?: LocalizeRadioProps['onChange'];
}

export interface LocalizeCheckboxDirectionProps {
  /**
   * @default row
   */
  flexDirection?: 'row' | 'column';
}

const LocalizeRadioGroupWrapper = styled.div({});

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

const LocalizeRadioGroup: React.FC<LocalizeRadioGroupProps> = ({
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
    (child: React.ReactElement<LocalizeRadioProps>, index) => {
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
    <LocalizeRadioGroupWrapper>
      {label && <GOCFormLabel htmlFor={name}>{label}</GOCFormLabel>}
      <CheckboxChildrenWrapper flexDirection={flexDirection}>{clonedChildren}</CheckboxChildrenWrapper>
      {help && <GOCFormDescription error={error}>{help}</GOCFormDescription>}
    </LocalizeRadioGroupWrapper>
  );
};

export { LocalizeRadioGroup };
export default LocalizeRadioGroup;
