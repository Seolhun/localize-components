import React from 'react';
import classnames from 'classnames';
import styled from '@emotion/styled';

import { LocalizeFormUIProps } from '../LocalizeFormUITypes';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

export type LocalizeCheckboxThemeType = 'primary' | 'secondary' | 'default';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export interface LocalizeCheckboxProps extends InputProps, LocalizeFormUIProps {
  /**
   * Button backgroundColor
   * @default default
   */
  themeType?: LocalizeCheckboxThemeType;
}

interface LocalizeCheckboxWrapperProps {
  /**
   * Button backgroundColor
   * @default default
   */
  themeType: LocalizeCheckboxProps['themeType'];
}

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

const LocalizeCheckboxCheckerIcon = styled.svg<LocalizeFormUIProps, LocalizeThemeProps>(({ theme, checked }) => ({
  width: '22px',
  height: '22px',
  fill: 'none',
  stroke: theme.colors.red1,
  strokeWidth: '4px',
  opacity: checked ? 1 : 0,
  transition: 'opacity 0.3s',
}));

const LocalizeCheckboxWrapper = styled.div<LocalizeCheckboxWrapperProps, LocalizeThemeProps>(({ theme, ...props }) => ({
  display: 'block',
  cursor: 'pointer',
  // Hover
  '&:hover': {
    color: `${theme.colors['black-45']}`,

    [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + ${LocalizeCheckboxCheckerContainer}`]: {
      backgroundColor: theme.colors.white,
      border: `2px solid ${theme.colors.secondary}`,
    },
  },

  // Active
  [`${HidingInput}:active + ${LocalizeCheckboxCheckerContainer}`]: {
    backgroundColor: theme.colors.white,
    border: `2px solid ${theme.colors.secondary}`,

    [`${LocalizeCheckboxCheckerIcon}`]: {
      stroke: theme.colors.secondary,
    },
  },

  // Checked
  [`${HidingInput}:checked + ${LocalizeCheckboxCheckerContainer}`]: {
    backgroundColor: theme.colors.secondary1,
    border: `2px solid ${theme.colors.secondary}`,

    [`${LocalizeCheckboxCheckerIcon}`]: {
      stroke: theme.colors.secondary,
    },
  },

  // Readonly - Disabled
  [`${HidingInput}:read-only, ${HidingInput}:disabled`]: {
    backgroundColor: theme.colors.neutral4,
    border: `2px solid ${theme.colors.neutral5}`,

    [`${LocalizeCheckboxCheckerIcon}`]: {
      stroke: theme.colors.neutral5,
    },
  },

  // Disabled and Checked
  [`${HidingInput}:disabled:checked + ${LocalizeCheckboxCheckerContainer}`]: {
    backgroundColor: theme.colors.neutral4,
    border: `2px solid ${theme.colors.neutral5}`,

    [`${LocalizeCheckboxCheckerIcon}`]: {
      stroke: theme.colors.neutral5,
    },
  },
}));

const LocalizeCheckboxLabel = styled.label<LocalizeFormUIProps, LocalizeThemeProps>(({ theme }) => {
  return {
    ...theme.fonts.body1,
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    outline: 0,
    color: theme.colors['black-45'],
    transition: 'color 0.3s',
    cursor: 'pointer',
    userSelect: 'none',
  };
});

const LocalizeCheckbox = React.forwardRef<HTMLInputElement, LocalizeCheckboxProps>(
  ({ children, themeType = 'default', className, ...props }, ref) => {
    const { disabled, checked } = props;

    return (
      <LocalizeCheckboxWrapper themeType={themeType} className={classnames(className)}>
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
