import styled from '@emotion/styled';
import React from 'react';

import { LocalizeFormWrapper } from '../wrapper';
import { LocalizeFormStateProps } from '../LocalizeFormStateProps';
import { LocalizeRadioProps } from './LocalizeRadio';

const CLASSNAME = '__Localize__RadioGroup';
type Props = LocalizeRadioDirectionProps & LocalizeFormStateProps;

export interface LocalizeRadioGroupProps extends Props {
  name?: string;

  onChange?: LocalizeRadioProps['onChange'];
}

export interface LocalizeRadioDirectionProps {
  /**
   * @default row
   */
  flexDirection?: 'row' | 'column';
}

const RadioChildrenWrapper = styled.div<LocalizeRadioDirectionProps>(({ flexDirection }) => {
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
    <LocalizeFormWrapper name={name} label={label} help={help} error={error}>
      <RadioChildrenWrapper flexDirection={flexDirection}>{clonedChildren}</RadioChildrenWrapper>
    </LocalizeFormWrapper>
  );
};

export { LocalizeRadioGroup };
export default LocalizeRadioGroup;
