import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeFormStateProps } from '../LocalizeFormStateProps';

const CLASSNAME = '__Localize__Radio';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type Props = LocalizeProps & InputProps & LocalizeFormStateProps;

export interface LocalizeRadioProps extends Props {}

const HidingInput = styled.input<{}>({
  display: 'none',
});

const LocalizeRadioCheckerContainer = styled.div<{}, LocalizeThemeProps>(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '22px',
  height: '22px',
  border: `2px solid ${theme.colors.neutral5}`,
  borderRadius: '50%',
  marginRight: '8px',
  transition: 'background-color 0.3s',
}));

const LocalizeRadioCheckerCircle = styled.div<{}, LocalizeThemeProps>(() => ({
  display: 'block',
  width: '10px',
  height: '10px',
  backgroundColor: 'transparent',
  borderRadius: '50%',
  transition: 'background-color 0.3s',
}));

const LocalizeRadioWrapper = styled.div<LocalizeProps, LocalizeThemeProps>(
  ({ theme, bgColor = 'neutral1', bdColor }) => {
    const backgroundColor = theme.colors[bgColor];
    const color = theme.colors.neutral1;
    const borderColor = theme.colors[bdColor || bgColor];

    return {
      display: 'block',
      cursor: 'pointer',

      // Hover
      '&:hover': {
        color,

        [`input:not(:disabled):not(:read-only) + ${LocalizeRadioCheckerContainer}`]: {
          backgroundColor,
          border: `2px solid ${borderColor}`,
        },
      },

      // Active
      [`input:active + ${LocalizeRadioCheckerContainer}`]: {
        backgroundColor,
        border: `2px solid ${borderColor}`,

        [`${LocalizeRadioCheckerCircle}`]: {
          backgroundColor: borderColor,
        },
      },

      // Checked
      [`input:checked + ${LocalizeRadioCheckerContainer}`]: {
        backgroundColor,
        border: `2px solid ${borderColor}`,

        [`${LocalizeRadioCheckerCircle}`]: {
          backgroundColor: borderColor,
        },
      },

      // Readonly - Disabled
      [`input:read-only, input:disabled`]: {
        backgroundColor: theme.colors.neutral4,
        border: `2px solid ${theme.colors.neutral5}`,

        [`${LocalizeRadioCheckerCircle}`]: {
          backgroundColor: theme.colors.neutral5,
        },
      },

      // Disabled and Checked
      [`input:disabled:checked + ${LocalizeRadioCheckerContainer}`]: {
        backgroundColor: theme.colors.neutral4,
        border: `2px solid ${theme.colors.neutral5}`,

        [`${LocalizeRadioCheckerCircle}`]: {
          backgroundColor: theme.colors.neutral5,
        },
      },
    };
  },
);

const LocalizeRadioLabel = styled.label<LocalizeFormStateProps, LocalizeThemeProps>(({ theme }) => {
  return {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    outline: 0,
    color: theme.colors.conversion10,
    transition: 'color 0.3s',
    cursor: 'pointer',
    userSelect: 'none',
  };
});

const LocalizeRadio = React.forwardRef<HTMLInputElement, LocalizeRadioProps>(
  ({ children, className, ...props }, ref) => {
    const { disabled, checked } = props;

    return (
      <LocalizeRadioWrapper className={classnames(CLASSNAME, className)}>
        <LocalizeRadioLabel disabled={disabled} checked={checked}>
          <HidingInput {...props} ref={ref} type="radio" />
          <LocalizeRadioCheckerContainer>
            <LocalizeRadioCheckerCircle />
          </LocalizeRadioCheckerContainer>
          {children}
        </LocalizeRadioLabel>
      </LocalizeRadioWrapper>
    );
  },
);

export { LocalizeRadio };
export default LocalizeRadio;
