import React from 'react';
import classnames from 'classnames';
import styled from '@emotion/styled';

import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeFormStateProps } from '../LocalizeFormStateProps';

const CLASSNAME = '__Localize__Checkbox';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type Props = LocalizeProps & InputProps & LocalizeFormStateProps;

export interface LocalizeCheckboxProps extends Props {}

const HidingInput = styled.input<{}>({
  display: 'none',
});

const LocalizeCheckboxCheckerContainer = styled.div<{}, LocalizeThemeProps>(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '22px',
  height: '22px',
  border: `2px solid ${theme.colors.neutral6}`,
  borderRadius: '4px',
  marginRight: '8px',
  transition: 'background-color 0.3s',
}));

const LocalizeCheckboxCheckerIcon = styled.svg<LocalizeFormStateProps, LocalizeThemeProps>(
  ({ theme, checked }) => ({
    width: '22px',
    height: '22px',
    fill: 'none',
    stroke: theme.colors.red1,
    strokeWidth: '4px',
    opacity: checked ? 1 : 0,
    transition: 'opacity 0.3s',
  }),
);

const LocalizeCheckboxWrapper = styled.div<LocalizeProps, LocalizeThemeProps>(
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

        [`input:not(:disabled):not(:read-only) + ${LocalizeCheckboxCheckerContainer}`]: {
          backgroundColor,
          border: `2px solid ${borderColor}`,
        },
      },

      // Active
      [`input:active + ${LocalizeCheckboxCheckerContainer}`]: {
        backgroundColor,
        border: `2px solid ${borderColor}`,

        [`${LocalizeCheckboxCheckerIcon}`]: {
          stroke: borderColor,
        },
      },

      // Checked
      [`input:checked + ${LocalizeCheckboxCheckerContainer}`]: {
        backgroundColor,
        border: `2px solid ${borderColor}`,

        [`${LocalizeCheckboxCheckerIcon}`]: {
          stroke: borderColor,
        },
      },

      // Readonly - Disabled
      [`input:read-only, input:disabled`]: {
        backgroundColor: theme.colors.neutral4,
        border: `2px solid ${theme.colors.neutral5}`,

        [`${LocalizeCheckboxCheckerIcon}`]: {
          stroke: theme.colors.neutral5,
        },
      },

      // Disabled and Checked
      [`input:disabled:checked + ${LocalizeCheckboxCheckerContainer}`]: {
        backgroundColor: theme.colors.neutral4,
        border: `2px solid ${theme.colors.neutral5}`,

        [`${LocalizeCheckboxCheckerIcon}`]: {
          stroke: theme.colors.neutral5,
        },
      },
    };
  },
);

const LocalizeCheckboxLabel = styled.label<LocalizeFormStateProps, LocalizeThemeProps>(
  ({ theme }) => {
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
  },
);

const LocalizeCheckbox = React.forwardRef<HTMLInputElement, LocalizeCheckboxProps>(
  ({ children, className, ...props }, ref) => {
    const { disabled, checked } = props;

    return (
      <LocalizeCheckboxWrapper className={classnames(CLASSNAME, className)}>
        <LocalizeCheckboxLabel disabled={disabled} checked={checked}>
          <HidingInput {...props} ref={ref} type="checkbox" />
          <LocalizeCheckboxCheckerContainer>
            <LocalizeCheckboxCheckerIcon checked={checked} viewBox="0 0 24 24">
              <polyline points="20 5 10 16 5 12" strokeWidth="3px" />
            </LocalizeCheckboxCheckerIcon>
          </LocalizeCheckboxCheckerContainer>
          {children}
        </LocalizeCheckboxLabel>
      </LocalizeCheckboxWrapper>
    );
  },
);

export { LocalizeCheckbox };
export default LocalizeCheckbox;
