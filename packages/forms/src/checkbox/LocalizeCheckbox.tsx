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
    intent = 'primary',
    localize = {
      primaryColor: 'primary',
      neutralColor: 'inversed9',
      fontColor: 'inversed1',
      inversedColor: 'inversed10',
    },
    rounded,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { primaryColor, neutralColor, inversedFontColor } = localizedColor;
    const scale = getLocalizeSizeBy(size);

    return {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      color: inversedFontColor,

      [`.${CLASSNAME}__Checker`]: {
        width: `${scale}rem`,
        height: `${scale}rem`,
        borderRadius: rounded ? '6px' : '0',
        border: `1px solid ${theme.colors.neutral6}`,
        backgroundColor: theme.colors.inversed1,
      },

      [`.${CLASSNAME}__CheckerIcon`]: {
        width: `${scale}rem`,
        height: `${scale}rem`,
        stroke: theme.colors.transparent,
      },

      // Hover
      '&:hover': {
        [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + .${CLASSNAME}__Checker`]: {
          backgroundColor: primaryColor,
          borderColor: neutralColor,
        },
      },

      // Active
      [`${HidingInput}:not(:disabled):active + .${CLASSNAME}__Checker`]: {
        backgroundColor: theme.colors.inversed1,
        borderColor: primaryColor,
      },

      // Checked
      [`${HidingInput}:checked + .${CLASSNAME}__Checker`]: {
        backgroundColor: theme.colors.inversed1,
        borderColor: primaryColor,

        [`.${CLASSNAME}__CheckerIcon`]: {
          stroke: primaryColor,
        },
      },

      // Disabled and Checked
      [`${HidingInput}:disabled:checked + .${CLASSNAME}__Checker`]: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,

        [`.${CLASSNAME}__CheckerIcon`]: {
          color: theme.colors.neutral8,
        },
      },

      // Readonly - Disabled
      [`${HidingInput}:read-only, ${HidingInput}:disabled`]: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,

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

const LocalizeCheckboxChecker = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '22px',
    height: '22px',
    marginRight: '8px',
    transition: 'background-color 0.3s',
  };
});

const LocalizeCheckboxCheckerIcon = styled.svg<{}, LocalizeThemeProps>(() => {
  return {
    fill: 'none',
    strokeWidth: '3px',
  };
});

const LocalizeCheckbox = React.forwardRef<HTMLInputElement, LocalizeCheckboxProps>(
  ({ children, className, size = 'md', intent = 'primary', rounded, ...props }, ref) => {
    return (
      <LocalizeCheckboxWrapper
        {...props}
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
