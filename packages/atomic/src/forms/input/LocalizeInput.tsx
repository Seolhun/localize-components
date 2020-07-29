import React from 'react';
import styled from '@emotion/styled';
import { MarginProperty } from 'csstype';

import { LocalizeFormLabel } from '../LocalizeFormLabel';
import { BaseInput, BaseInputProps, InputItemDirection } from './BaseInput';

export interface LocalizeInputProps extends BaseInputProps {
  name?: string;

  label?: React.ReactNode;

  margin?: MarginProperty<string>;
}

interface LocalizeInputWrapperProps {
  margin?: LocalizeInputProps['margin'];
}

const LocalizeInputWrapper = styled.div<LocalizeInputWrapperProps>(
  ({ margin }) => {
    return {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      margin,
    };
  },
);

const LocalizeInputRelativeContainer = styled.div({
  position: 'relative',
});

const ItemWrapper = styled.div<{ itemDirection?: InputItemDirection }>(
  ({ itemDirection }) => ({
    position: 'absolute',
    top: '25%',
    ...(itemDirection === 'right'
      ? {
          right: '12px',
        }
      : {
          left: '12px',
        }),
  }),
);

const LocalizeInput = React.forwardRef<HTMLInputElement, LocalizeInputProps>(
  (
    {
      name,
      error,
      label,
      defaultValue,
      width = '100%',
      itemNode,
      itemDirection = 'right',
      itemWidth = '40px',
      margin = '0 0 24px 0',
      type,
      ...props
    },
    ref,
  ) => (
    <LocalizeInputWrapper margin={margin}>
      {label && <LocalizeFormLabel>{label}</LocalizeFormLabel>}
      <LocalizeInputRelativeContainer>
        {itemDirection === 'left' && itemNode && (
          <ItemWrapper itemDirection={itemDirection}>{itemNode}</ItemWrapper>
        )}
        <BaseInput
          {...props}
          type={type}
          ref={ref}
          name={name}
          defaultValue={defaultValue}
          error={error}
          width={width}
          itemNode={itemNode}
          itemDirection={itemDirection}
          itemWidth={itemWidth}
        />
        {itemDirection === 'right' && itemNode && (
          <ItemWrapper itemDirection={itemDirection}>{itemNode}</ItemWrapper>
        )}
      </LocalizeInputRelativeContainer>
      {!!error && <LocalizeFormLabel color="error">{error}</LocalizeFormLabel>}
    </LocalizeInputWrapper>
  ),
);

export { LocalizeInput };
export default LocalizeInput;
