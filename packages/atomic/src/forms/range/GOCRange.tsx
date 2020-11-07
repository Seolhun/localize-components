import React from 'react';
import styled from '@emotion/styled';

import { GOCThemeProps } from '@/context';

import { GOCFormUIProps } from '../GOCFormUITypes';
import GOCFormLabel from '../GOCFormLabel';
import GOCFormDescription from '../GOCFormDescription';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface GOCRangeProps extends InputProps, GOCFormUIProps {
  visibleValue?: boolean;
}

const GOCRangeWrapper = styled.div({
  width: '100%',
});

const GOCRangeContainer = styled.div<GOCFormUIProps, GOCThemeProps>(
  ({ theme }) => {
    return {
      ...theme.fonts.body1,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '44px',
      // TODO: Icon Color by State
    };
  },
);

const HidingInput = styled.input<{}, GOCThemeProps>(({ theme }) => {
  return {
    appearance: 'none',
    width: '100%',
    height: '5px',
    padding: 0,
    margin: 0,
    borderRadius: '2px',
    background: theme.colors['black-45'],
    outline: 'none',

    // Range Handler
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '24px',
      height: '24px',
      borderRadius: '12px',
      background: theme.colors.secondary,
      cursor: 'pointer',
    },
    '&::-moz-range-thumb': {
      appearance: 'none',
      width: '24px',
      height: '24px',
      borderRadius: '12px',
      background: theme.colors.secondary,
      cursor: 'pointer',
    },
    '&:focus': {
      '&::-webkit-slider-thumb': {
        backgroundColor: theme.colors.neutral8,
      },
      '&::-moz-range-thumb': {
        backgroundColor: theme.colors.neutral8,
      },
    },
    '&:disabled': {
      backgroundColor: theme.colors.neutral5,
      '&::-webkit-slider-thumb': {
        backgroundColor: theme.colors.neutral5,
      },
      '&::-moz-range-thumb': {
        backgroundColor: theme.colors.neutral5,
      },
    },
  };
});

const VisibleValueContainer = styled.div<GOCFormUIProps, GOCThemeProps>(
  ({ theme, disabled }) => {
    return {
      ...theme.fonts[16],
      display: 'flex',
      justifyContent: 'space-between',
      color: theme.colors['black-45'],

      ...(disabled && {
        color: theme.colors.neutral5,
      }),
    };
  },
);

const GOCRange = React.forwardRef<HTMLInputElement, GOCRangeProps>(
  ({ label, help, error, visibleValue, ...props }, ref) => {
    return (
      <GOCRangeWrapper>
        {label && <GOCFormLabel>{label}</GOCFormLabel>}
        <GOCRangeContainer>
          <HidingInput {...props} ref={ref} type="range" />
        </GOCRangeContainer>
        {visibleValue && (
          <VisibleValueContainer {...props}>
            <span>{props.min}</span>
            <span>{props.max}</span>
          </VisibleValueContainer>
        )}
        {help && <GOCFormDescription error={error}>{help}</GOCFormDescription>}
      </GOCRangeWrapper>
    );
  },
);

export { GOCRange };
export default GOCRange;
