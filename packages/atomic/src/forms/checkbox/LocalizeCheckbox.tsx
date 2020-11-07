import React from 'react';
import classnames from 'classnames';
import styled from '@emotion/styled';

import { GOCThemeProps } from '@/context';

import { GOCFormUIProps } from '../LocalizeFormUITypes';

export type GOCCheckboxThemeType = 'primary' | 'secondary' | 'default';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export interface GOCCheckboxProps extends InputProps, GOCFormUIProps {
  /**
   * Button backgroundColor
   * @default default
   */
  themeType?: GOCCheckboxThemeType;
}

interface GOCCheckboxWrapperProps {
  /**
   * Button backgroundColor
   * @default default
   */
  themeType: GOCCheckboxProps['themeType'];
}

const HidingInput = styled.input<{}>({
  display: 'none',
});

const GOCCheckboxCheckerContainer = styled.div<{}, GOCThemeProps>(
  ({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '22px',
    height: '22px',
    border: `2px solid ${theme.colors.neutral6}`,
    borderRadius: '4px',
    marginRight: '8px',
    transition: 'background-color 0.3s',
  }),
);

const GOCCheckboxCheckerIcon = styled.svg<GOCFormUIProps, GOCThemeProps>(
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

const getThemeStyles = (theme: GOCThemeProps, props: GOCCheckboxProps) => {
  const { themeType } = props;
  switch (themeType) {
    case 'secondary': {
      return {
        // Hover
        '&:hover': {
          color: `${theme.colors['black-45']}`,

          [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + ${GOCCheckboxCheckerContainer}`]: {
            backgroundColor: theme.colors.white,
            border: `2px solid ${theme.colors.secondary}`,
          },
        },

        // Active
        [`${HidingInput}:active + ${GOCCheckboxCheckerContainer}`]: {
          backgroundColor: theme.colors.white,
          border: `2px solid ${theme.colors.secondary}`,

          [`${GOCCheckboxCheckerIcon}`]: {
            stroke: theme.colors.secondary,
          },
        },

        // Checked
        [`${HidingInput}:checked + ${GOCCheckboxCheckerContainer}`]: {
          backgroundColor: theme.colors.secondary1,
          border: `2px solid ${theme.colors.secondary}`,

          [`${GOCCheckboxCheckerIcon}`]: {
            stroke: theme.colors.secondary,
          },
        },

        // Readonly - Disabled
        [`${HidingInput}:read-only, ${HidingInput}:disabled`]: {
          backgroundColor: theme.colors.neutral4,
          border: `2px solid ${theme.colors.neutral5}`,

          [`${GOCCheckboxCheckerIcon}`]: {
            stroke: theme.colors.neutral5,
          },
        },

        // Disabled and Checked
        [`${HidingInput}:disabled:checked + ${GOCCheckboxCheckerContainer}`]: {
          backgroundColor: theme.colors.neutral4,
          border: `2px solid ${theme.colors.neutral5}`,

          [`${GOCCheckboxCheckerIcon}`]: {
            stroke: theme.colors.neutral5,
          },
        },
      };
    }
    default: {
      return {
        // Hover
        '&:hover': {
          color: `${theme.colors['black-45']}`,

          [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + ${GOCCheckboxCheckerContainer}`]: {
            backgroundColor: theme.colors.white,
            border: `2px solid ${theme.colors['black-45']}`,
          },
        },

        // Active
        [`${HidingInput}:active + ${GOCCheckboxCheckerContainer}`]: {
          backgroundColor: theme.colors.white,
          border: `2px solid ${theme.colors['black-45']}`,

          [`${GOCCheckboxCheckerIcon}`]: {
            stroke: theme.colors['black-45'],
          },
        },

        // Checked
        [`${HidingInput}:checked + ${GOCCheckboxCheckerContainer}`]: {
          backgroundColor: theme.colors.neutral2,
          border: `2px solid ${theme.colors['black-45']}`,

          [`${GOCCheckboxCheckerIcon}`]: {
            stroke: theme.colors['black-45'],
          },
        },

        // Readonly - Disabled
        [`${HidingInput}:read-only, ${HidingInput}:disabled`]: {
          backgroundColor: theme.colors.neutral4,
          border: `2px solid ${theme.colors.neutral5}`,

          [`${GOCCheckboxCheckerIcon}`]: {
            stroke: theme.colors.neutral5,
          },
        },

        // Disabled and Checked
        [`${HidingInput}:disabled:checked + ${GOCCheckboxCheckerContainer}`]: {
          backgroundColor: theme.colors.neutral4,
          border: `2px solid ${theme.colors.neutral5}`,

          [`${GOCCheckboxCheckerIcon}`]: {
            stroke: theme.colors.neutral5,
          },
        },
      };
    }
  }
};

const GOCCheckboxWrapper = styled.div<GOCCheckboxWrapperProps, GOCThemeProps>(
  ({ theme, ...props }) => ({
    display: 'block',
    cursor: 'pointer',
    ...getThemeStyles(theme, props),
  }),
);

const GOCCheckboxLabel = styled.label<GOCFormUIProps, GOCThemeProps>(
  ({ theme }) => {
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
  },
);

const GOCCheckbox = React.forwardRef<HTMLInputElement, GOCCheckboxProps>(
  ({ children, themeType = 'default', className, ...props }, ref) => {
    const { disabled, checked } = props;

    return (
      <GOCCheckboxWrapper
        themeType={themeType}
        className={classnames(className)}
      >
        <GOCCheckboxLabel disabled={disabled} checked={checked}>
          <HidingInput {...props} ref={ref} type="checkbox" />
          <GOCCheckboxCheckerContainer>
            <GOCCheckboxCheckerIcon checked={checked} viewBox="0 0 24 24">
              <polyline points="20 5 10 16 5 12" strokeWidth="3px" />
            </GOCCheckboxCheckerIcon>
          </GOCCheckboxCheckerContainer>
          {children}
        </GOCCheckboxLabel>
      </GOCCheckboxWrapper>
    );
  },
);

export { GOCCheckbox };
export default GOCCheckbox;
