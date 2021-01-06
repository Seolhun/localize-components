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
type ExtentionProps = LocalizeProps & Omit<InputProps, 'size'>;

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
      bgColor: 'default',
      bdColor: 'conversion1',
      innerFontColor: 'conversion1',
      fontColor: 'conversion10',
    },
    rounded,
  }) => {
    const localizedColor = getLocalizeIntentColor(theme, intent, localize);
    const { backgroundColor, borderColor, color } = localizedColor;
    const scale = getLocalizeSizeBy(size);

    return {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      color,

      [`.${CLASSNAME}__Checker`]: {
        width: scale,
        height: scale,
        borderRadius: rounded ? '6px' : '0',
      },

      [`.${CLASSNAME}__CheckerIcon`]: {
        width: scale,
        height: scale,
      },

      // Hover
      '&:hover': {
        [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + .${CLASSNAME}__Checker`]: {
          backgroundColor,
          border: `2px solid ${borderColor}`,
        },
      },

      // Active
      [`${HidingInput}:not(:disabled):active + .${CLASSNAME}__Checker`]: {
        backgroundColor,
        border: `2px solid ${borderColor}`,
      },

      // Checked
      [`${HidingInput}:checked + .${CLASSNAME}__Checker`]: {
        backgroundColor,
        border: `2px solid ${borderColor}`,

        [`.${CLASSNAME}__CheckerIcon`]: {
          stroke: borderColor,
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
    border: `2px solid ${theme.colors.neutral6}`,
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
  ({ children, className, size = 'md', intent = 'default', ...props }, ref) => {
    return (
      <LocalizeCheckboxWrapper
        ref={ref}
        className={classnames(CLASSNAME, className)}
        intent={intent}
        size={size}
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
