import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeFormStateProps } from '../LocalizeFormStateProps';
import { LocalizeFormWrapper } from '../wrapper';

const CLASSNAME = '__Localize__Range';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type Props = LocalizeProps & InputProps & LocalizeFormStateProps;

export interface LocalizeRangeProps extends Props {
  visibleValue?: boolean;
}

const LocalizeRangeContainer = styled.div<LocalizeFormStateProps, LocalizeProps>(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '44px',
  };
});

const HidingInput = styled.input<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    appearance: 'none',
    width: '100%',
    height: '5px',
    padding: 0,
    margin: 0,
    borderRadius: '2px',
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

const VisibleValueContainer = styled.div<LocalizeRangeProps, LocalizeThemeProps>(
  ({ theme, fontColor = 'neutral1', disabled }) => {
    const color = theme.colors[fontColor];

    return {
      display: 'flex',
      justifyContent: 'space-between',
      color,

      ...(disabled && {
        color: theme.colors.neutral5,
      }),
    };
  },
);

const LocalizeRange = React.forwardRef<HTMLInputElement, LocalizeRangeProps>(
  ({ className, label, help, error, visibleValue, ...props }, ref) => {
    return (
      <LocalizeFormWrapper
        className={classnames(CLASSNAME, className)}
        label={label}
        help={help}
        error={error}
      >
        <LocalizeRangeContainer>
          <HidingInput {...props} ref={ref} type="range" />
        </LocalizeRangeContainer>
        {visibleValue && (
          <VisibleValueContainer {...props}>
            <span>{props.min}</span>
            <span>{props.max}</span>
          </VisibleValueContainer>
        )}
      </LocalizeFormWrapper>
    );
  },
);

export { LocalizeRange };
export default LocalizeRange;
