import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  getLocalizeIntentColor,
  getLocalizeSizeBy,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeSize,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeFormStateProps } from '../LocalizeFormStateProps';

const CLASSNAME = '__Localize__Radio';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type ExcludedInputProps = Omit<InputProps, 'size'>;
type ExtentionProps = LocalizeProps & ExcludedInputProps;

export interface LocalizeRadioProps extends ExtentionProps {
  /**
   * Set this to change font color
   * @default md
   */
  size?: LocalizeSize;

  /**
   * Set this to change intent color
   * @default default
   */
  intent?: LocalizeIntentThemeType;

  /**
   * Set this to change rounded border-radius
   */
  rounded?: boolean;
}

const HidingInput = styled.input<{}>({
  display: 'none',
});

const LocalizeRadioWrapper = styled.div<LocalizeRadioProps, LocalizeThemeProps>(
  ({
    theme,
    size = 'md',
    intent = 'primary',
    localize = {
      primaryColor: 'primary',
      neutralColor: 'transparent',
      fontColor: 'inversed1',
      inversedColor: 'inversed10',
    },
    rounded,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor, fontColor } = localizedColor;
    const scale = getLocalizeSizeBy(size);

    return {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      color: fontColor,

      [`.${CLASSNAME}__Checker`]: {
        width: `${scale}rem`,
        height: `${scale}rem`,
        borderRadius: rounded ? '6px' : '0',
      },

      [`.${CLASSNAME}__CheckerIcon`]: {
        width: `${scale}rem`,
        height: `${scale}rem`,
      },

      // Hover
      '&:hover': {
        [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + .${CLASSNAME}__Checker`]: {
          backgroundColor: primaryColor,
          border: `2px solid ${neutralColor}`,
        },
      },

      // Active
      [`${HidingInput}:not(:disabled):active + .${CLASSNAME}__Checker`]: {
        backgroundColor: primaryColor,
        border: `2px solid ${neutralColor}`,
      },

      // Checked
      [`${HidingInput}:checked + .${CLASSNAME}__Checker`]: {
        backgroundColor: primaryColor,
        border: `2px solid ${neutralColor}`,

        [`.${CLASSNAME}__CheckerIcon`]: {
          stroke: neutralColor,
        },
      },

      // Readonly - Disabled
      [`${HidingInput}:read-only, ${HidingInput}:disabled`]: {
        backgroundColor: theme.colors.disabled,
        border: `2px solid ${theme.colors.disabled}`,

        [`.${CLASSNAME}__CheckerIcon`]: {
          color: theme.colors.neutral8,
        },
      },

      // Disabled and Checked
      [`${HidingInput}:disabled:checked + .${CLASSNAME}__Checker`]: {
        backgroundColor: theme.colors.disabled,
        border: `2px solid ${theme.colors.disabled}`,

        [`.${CLASSNAME}__CheckerIcon`]: {
          color: theme.colors.neutral8,
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
    color: theme.colors.inversed10,
    transition: 'color 0.3s',
    cursor: 'pointer',
    userSelect: 'none',
  };
});

const LocalizeRadioChecker = styled.div<{}, LocalizeThemeProps>(({ theme }) => ({
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

const LocalizeRadioCheckerIcon = styled.div<{}, LocalizeThemeProps>(() => ({
  display: 'block',
  width: '10px',
  height: '10px',
  backgroundColor: 'transparent',
  borderRadius: '50%',
  transition: 'background-color 0.3s',
}));

const LocalizeRadio = React.forwardRef<HTMLInputElement, LocalizeRadioProps>(
  ({ children, className, size = 'md', intent = 'primary', ...props }, ref) => {
    return (
      <LocalizeRadioWrapper
        ref={ref}
        className={classnames(CLASSNAME, className)}
        intent={intent}
        size={size}
      >
        <LocalizeRadioLabel className={`${CLASSNAME}__Label`}>
          <HidingInput {...props} ref={ref} type="radio" />
          <LocalizeRadioChecker className={`${CLASSNAME}__Checker`}>
            <LocalizeRadioCheckerIcon />
          </LocalizeRadioChecker>
          {children}
        </LocalizeRadioLabel>
      </LocalizeRadioWrapper>
    );
  },
);

export { LocalizeRadio };
export default LocalizeRadio;
