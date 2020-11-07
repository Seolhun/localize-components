import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { GOCThemeProps } from '@/context';

import { GOCFormUIProps } from '../GOCFormUITypes';


export type GOCRadioThemeType =
  | 'primary'
  | 'secondary'
  | 'default';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface GOCRadioProps extends InputProps, GOCFormUIProps {
  /**
   * Button backgroundColor
   * @default default
   */
  themeType?: GOCRadioThemeType;
}

interface GOCCheckboxWrapperProps {
  /**
   * Button backgroundColor
   * @default default
   */
  themeType: GOCRadioProps['themeType'];
}

const HidingInput = styled.input<{}>({
  display: 'none',
});

const GOCRadioCheckerContainer = styled.div<{}, GOCThemeProps>(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '22px',
  height: '22px',
  border: `2px solid ${theme.colors.neutral6}`,
  borderRadius: '50%',
  marginRight: '8px',
  transition: 'background-color 0.3s',
}));

const GOCRadioCheckerCircle = styled.div<{}, GOCThemeProps>(() => ({
  display: 'block',
  width: '10px',
  height: '10px',
  backgroundColor: 'transparent',
  borderRadius: '50%',
  transition: 'background-color 0.3s',
}));


const getThemeStyles = (theme: GOCThemeProps, props: GOCRadioProps) => {
  const { themeType } = props;
  switch (themeType) {
    case 'secondary': {
      return {
        // Hover
        '&:hover': {
          color: `${theme.colors["black-45"]}`,

          [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + ${GOCRadioCheckerContainer}`]: {
            backgroundColor: theme.colors.white,
            border: `2px solid ${theme.colors.secondary}`,
          },
        },

        // Active
        [`${HidingInput}:active + ${GOCRadioCheckerContainer}`]: {
          backgroundColor: theme.colors.white,
          border: `2px solid ${theme.colors.secondary}`,

          [`${GOCRadioCheckerCircle}`]: {
            backgroundColor: theme.colors.secondary,
          },
        },

        // Checked
        [`${HidingInput}:checked + ${GOCRadioCheckerContainer}`]: {
          backgroundColor: theme.colors.secondary1,
          border: `2px solid ${theme.colors.secondary}`,

          [`${GOCRadioCheckerCircle}`]: {
            backgroundColor: theme.colors.secondary,
          },
        },

        // Readonly - Disabled
        [`${HidingInput}:read-only, ${HidingInput}:disabled`]: {
          backgroundColor: theme.colors.neutral4,
          border: `2px solid ${theme.colors.neutral5}`,

          [`${GOCRadioCheckerCircle}`]: {
            backgroundColor: theme.colors.neutral5,
          },
        },

        // Disabled and Checked
        [`${HidingInput}:disabled:checked + ${GOCRadioCheckerContainer}`]: {
          backgroundColor: theme.colors.neutral4,
          border: `2px solid ${theme.colors.neutral5}`,

          [`${GOCRadioCheckerCircle}`]: {
            backgroundColor: theme.colors.neutral5,
          },
        },
      }
    }
    default: {
      return {
        // Hover
        '&:hover': {
          color: `${theme.colors["black-45"]}`,

          [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + ${GOCRadioCheckerContainer}`]: {
            backgroundColor: theme.colors.white,
            border: `2px solid ${theme.colors["black-45"]}`,
          },
        },

        // Active
        [`${HidingInput}:active + ${GOCRadioCheckerContainer}`]: {
          backgroundColor: theme.colors.white,
          border: `2px solid ${theme.colors["black-45"]}`,

          [`${GOCRadioCheckerCircle}`]: {
            backgroundColor: theme.colors["black-45"],
          },
        },

        // Checked
        [`${HidingInput}:checked + ${GOCRadioCheckerContainer}`]: {
          backgroundColor: theme.colors.neutral2,
          border: `2px solid ${theme.colors["black-45"]}`,

          [`${GOCRadioCheckerCircle}`]: {
            backgroundColor: theme.colors["black-45"],
          },
        },

        // Readonly - Disabled
        [`${HidingInput}:read-only, ${HidingInput}:disabled`]: {
          backgroundColor: theme.colors.neutral4,
          border: `2px solid ${theme.colors.neutral5}`,

          [`${GOCRadioCheckerCircle}`]: {
            backgroundColor: theme.colors.neutral5,
          },
        },

        // Disabled and Checked
        [`${HidingInput}:disabled:checked + ${GOCRadioCheckerContainer}`]: {
          backgroundColor: theme.colors.neutral4,
          border: `2px solid ${theme.colors.neutral5}`,

          [`${GOCRadioCheckerCircle}`]: {
            backgroundColor: theme.colors.neutral5,
          },
        },
      }
    }
  }
}


const GOCRadioWrapper = styled.div<GOCCheckboxWrapperProps, GOCThemeProps>(({ theme, ...props }) => ({
  display: 'block',
  cursor: 'pointer',
  ...(getThemeStyles(theme, props)),
}));

const GOCRadioLabel = styled.label<GOCFormUIProps, GOCThemeProps>(
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

const GOCRadio = React.forwardRef<HTMLInputElement, GOCRadioProps>(
  ({ children, themeType = 'default', className, ...props }, ref) => {
    const { disabled, checked } = props;

    return (
      <GOCRadioWrapper themeType={themeType} className={classnames(className)}>
        <GOCRadioLabel disabled={disabled} checked={checked}>
          <HidingInput {...props} ref={ref} type="radio" />
          <GOCRadioCheckerContainer>
            <GOCRadioCheckerCircle />
          </GOCRadioCheckerContainer>
          {children}
        </GOCRadioLabel>
      </GOCRadioWrapper>
    );
  },
);

export { GOCRadio };
export default GOCRadio;
