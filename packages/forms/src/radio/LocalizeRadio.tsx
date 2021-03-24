import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  getLocalizeScaleBy,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeScale,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

import { getLocalizeIntentColor } from './getLocalizeIntentColor';

const CLASSNAME = '__Localize__Radio';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type ExtentionProps = LocalizeProps & InputProps;

export interface LocalizeRadioProps extends ExtentionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: LocalizeScale;

  /**
   * Set this to change intent color
   * @default primary
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
    scale = 'md',
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
    const { primaryColor, inversedFontColor } = localizedColor;
    const localizeScale = getLocalizeScaleBy(scale);

    return {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',

      [`.${CLASSNAME}__Label`]: {
        color: inversedFontColor,
      },

      [`.${CLASSNAME}__Checker`]: {
        width: `${localizeScale}rem`,
        height: `${localizeScale}rem`,
        borderRadius: rounded ? '50%' : '6px',
        border: `1px solid ${theme.colors.neutral6}`,
        backgroundColor: theme.colors.inversed1,
      },

      [`.${CLASSNAME}__CheckerIcon`]: {
        width: `${localizeScale / 2}rem`,
        height: `${localizeScale / 2}rem`,
        borderRadius: rounded ? '50%' : '6px',
      },

      // Hover
      '&:hover': {
        [`${HidingInput}:not(:disabled):not(:read-only):not(:checked) + .${CLASSNAME}__Checker`]: {
          borderColor: primaryColor,
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
          backgroundColor: primaryColor,
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

      // Disabled and Checked
      [`${HidingInput}:disabled:checked + .${CLASSNAME}__Checker`]: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.neutral5,

        [`.${CLASSNAME}__CheckerIcon`]: {
          color: theme.colors.neutral8,
        },
      },
    };
  },
);

const LocalizeRadioLabel = styled.label<{}, LocalizeThemeProps>(() => {
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

const LocalizeRadioChecker = styled.div<{}, LocalizeThemeProps>(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8px',
  transition: 'background-color 0.3s',
}));

const LocalizeRadioCheckerIcon = styled.div<{}, LocalizeThemeProps>(() => ({
  display: 'block',
  backgroundColor: 'transparent',
  transition: 'background-color 0.3s',
}));

const LocalizeRadio = React.forwardRef<HTMLInputElement, LocalizeRadioProps>(
  ({ children, className, scale = 'md', intent = 'primary', rounded, ...props }, ref) => {
    return (
      <LocalizeRadioWrapper
        {...props}
        ref={ref}
        className={classnames(CLASSNAME, className)}
        intent={intent}
        scale={scale}
        rounded={rounded}
      >
        <LocalizeRadioLabel className={`${CLASSNAME}__Label`}>
          <HidingInput {...props} ref={ref} type="radio" />
          <LocalizeRadioChecker className={`${CLASSNAME}__Checker`}>
            <LocalizeRadioCheckerIcon className={`${CLASSNAME}__CheckerIcon`} />
          </LocalizeRadioChecker>
          {children}
        </LocalizeRadioLabel>
      </LocalizeRadioWrapper>
    );
  },
);

export { LocalizeRadio };
export default LocalizeRadio;
