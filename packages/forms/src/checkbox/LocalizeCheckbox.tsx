import React from 'react';
import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  getLocalizeIntentColor,
  getLocalizeSizeBy,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeSize,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

const CLASSNAME = '__Localize__Checkbox';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type ExcludedInputProps = Omit<InputProps, 'size'>;
interface LocalizeLocalProps extends LocalizeProps {
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
}

type ExtentionProps = ExcludedInputProps & LocalizeLocalProps;

export interface LocalizeCheckboxProps extends ExtentionProps {
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

const LocalizeCheckboxWrapper = styled.div<LocalizeCheckboxProps, LocalizeThemeProps>(
  ({
    theme,
    size = 'md',
    intent = 'default',
    localize = {
      primaryColor: 'default',
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
        border: `1px solid ${theme.colors.disabled}`,

        [`.${CLASSNAME}__CheckerIcon`]: {
          color: theme.colors.neutral8,
        },
      },

      // Disabled and Checked
      [`${HidingInput}:disabled:checked + .${CLASSNAME}__Checker`]: {
        backgroundColor: theme.colors.disabled,
        border: `1px solid ${theme.colors.disabled}`,

        [`.${CLASSNAME}__CheckerIcon`]: {
          color: theme.colors.neutral8,
        },
      },
    };
  },
);

const LocalizeCheckboxLabel = styled.label<{}, LocalizeThemeProps>(() => {
  return {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    outline: 0,
    transition: 'color 0.3s',
    cursor: 'pointer',
    userSelect: 'none',
  };
});

const LocalizeCheckboxChecker = styled.div<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '22px',
    height: '22px',
    border: `1px solid ${theme.colors.neutral6}`,
    marginRight: '8px',
    transition: 'background-color 0.3s',
  };
});

const LocalizeCheckboxCheckerIcon = styled.svg<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    width: '22px',
    height: '22px',
    fill: 'none',
    stroke: theme.colors.transparent,
    strokeWidth: '3px',
  };
});

const LocalizeCheckbox = React.forwardRef<HTMLInputElement, LocalizeCheckboxProps>(
  ({ children, className, size = 'md', intent = 'default', rounded, ...props }, ref) => {
    return (
      <LocalizeCheckboxWrapper
        ref={ref}
        className={classnames(CLASSNAME, className)}
        intent={intent}
        size={size}
        rounded={rounded}
      >
        <LocalizeCheckboxLabel className={`${CLASSNAME}__Label`}>
          <HidingInput {...props} ref={ref} type="checkbox" />
          <LocalizeCheckboxChecker className={`${CLASSNAME}__Checker`}>
            <LocalizeCheckboxCheckerIcon
              className={`${CLASSNAME}__CheckerIcon`}
              viewBox="0 0 24 24"
            >
              <polyline points="20 5 10 16 5 12" />
            </LocalizeCheckboxCheckerIcon>
          </LocalizeCheckboxChecker>
          {children}
        </LocalizeCheckboxLabel>
      </LocalizeCheckboxWrapper>
    );
  },
);

export { LocalizeCheckbox };
export default LocalizeCheckbox;
